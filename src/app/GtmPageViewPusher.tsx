"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window { dataLayer: Record<string, any>[] | undefined }
}

export default function GtmPageViewPusher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: pathname + (searchParams?.toString() ? `?${searchParams}` : ""),
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
