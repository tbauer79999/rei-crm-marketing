'use client'

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "./posthog";

export default function ClientPostHogWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    posthog.capture('$pageview');
  }, [pathname]);

  return null;
}
