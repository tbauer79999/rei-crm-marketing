"use client";

import { useEffect } from "react";

/**
 * Loads Google Tag Manager and the ad pixels (Meta, OpenAI) only after the
 * visitor consents through Cookiebot. Nothing here runs on page load by default.
 *
 *   statistics consent -> GTM (and so GA4)
 *   marketing consent  -> Meta Pixel + OpenAI pixel (GTM too, if not yet loaded)
 *   preferences consent -> SurFox chat widget (it stores a persistent visitor ID in
 *                          localStorage and logs a page_open event on every load)
 *
 * Cookiebot runs in manual blocking mode (see layout.tsx), so this file is the
 * single place where tracking scripts are gated. Any new tracker must be added
 * here, not dropped into layout.tsx, or it will fire before consent.
 */

const GTM_ID = "GTM-TH5L46KW";

const META_PIXEL = `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '328435827569053');
  fbq('track', 'PageView');
`;

const OPENAI_PIXEL = `
  !function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
  oaiq("init",{pixelId:"3okzcUZpRKFwF8eabHEHV9",debug:true});
`;

type CookiebotApi = {
  consent: { statistics: boolean; marketing: boolean; preferences: boolean };
};

declare global {
  interface Window {
    Cookiebot?: CookiebotApi;
  }
}

let gtmLoaded = false;
let pixelsLoaded = false;
let widgetLoaded = false;

function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // Google Consent Mode requires the `arguments` object, not an array.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments as unknown as Record<string, unknown>);
}

function runInline(id: string, code: string) {
  const el = document.createElement("script");
  el.id = id;
  el.text = code;
  document.head.appendChild(el);
}

function apply() {
  const consent = window.Cookiebot?.consent;
  if (!consent) return;

  const analytics = consent.statistics ? "granted" : "denied";
  const ads = consent.marketing ? "granted" : "denied";
  const state = {
    analytics_storage: analytics,
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  };

  if (gtmLoaded) {
    gtag("consent", "update", state);
  } else if (consent.statistics || consent.marketing) {
    gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    gtag("consent", "update", state);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(s);
    gtmLoaded = true;
  }

  if (consent.marketing && !pixelsLoaded) {
    runInline("meta-pixel", META_PIXEL);
    runInline("oai-pixel", OPENAI_PIXEL);
    pixelsLoaded = true;
  }

  if (consent.preferences && !widgetLoaded) {
    const w = document.createElement("script");
    w.id = "surfox-chat-widget";
    w.src = "https://surfox.ai/chat-widget.js";
    w.async = true;
    w.setAttribute("data-widget-key", "wk_5c3a82cabe46479da8d56b797483ac3c");
    w.setAttribute("data-primary-color", "#0FB6C9");
    document.body.appendChild(w);
    widgetLoaded = true;
  }
}

export default function ConsentGatedScripts() {
  useEffect(() => {
    const events = ["CookiebotOnConsentReady", "CookiebotOnAccept", "CookiebotOnDecline"];
    events.forEach((e) => window.addEventListener(e, apply));
    // Cookiebot may already have finished before this component mounted.
    apply();
    return () => events.forEach((e) => window.removeEventListener(e, apply));
  }, []);

  return null;
}
