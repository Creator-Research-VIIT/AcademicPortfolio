"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

export default function GoatCounterClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.goatcounter?.count) {
      const qs = searchParams?.toString() ? `?${searchParams.toString()}` : "";
      window.goatcounter.count({ path: pathname + qs });
    }
  }, [pathname, searchParams]);

  return (
    <Script
      src="//gc.zgo.at/count.js"
      data-goatcounter="https://yashrathod.goatcounter.com/count"
      data-goatcounter-settings='{"allow_local": true}'
      strategy="afterInteractive"
      async
    />
  );
}
