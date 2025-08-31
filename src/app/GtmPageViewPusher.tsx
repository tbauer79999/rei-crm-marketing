"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window { dataLayer: Array<Record<string, any>> | undefined }
}

export default function GtmPageViewPusher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ensure dataLayer exists
  const push = (payload: Record<string, any>) => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    // TEMP: verbose logging so we can see it firing
    // eslint-disable-next-line no-console
    console.log("[GTM] push", payload);
  };

  // fire on first mount + on route/search changes
  useEffect(() => {
    const qp = searchParams?.toString();
    const page_path = pathname + (qp ? `?${qp}` : "");
    push({ event: "page_view", page_path, page_title: document.title, debug_ts: Date.now() });
  }, [pathname, searchParams]);

  // also fire on in-page hash changes (e.g., /page#section)
  useEffect(() => {
    const onHash = () => {
      push({
        event: "page_view",
        page_path: window.location.pathname + window.location.search + window.location.hash,
        page_title: document.title,
        debug_hash: true,
        debug_ts: Date.now(),
      });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return null;
}
