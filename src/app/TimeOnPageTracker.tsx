"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window { gtag: (...args: any[]) => void }
}

export default function TimeOnPageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const startTime = Date.now();

    const sendEvent = () => {
      const seconds = Math.round((Date.now() - startTime) / 1000);
      if (seconds < 1 || typeof window.gtag !== "function") return;
      window.gtag("event", "time_on_page", {
        seconds_on_page: seconds,
        page_path: pathname,
      });
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") sendEvent();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [pathname]);

  return null;
}
