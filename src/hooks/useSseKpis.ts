"use client";
import * as React from "react";

export function useSseKpis<T = any>(url = "/api/stream") {
  const [data, setData] = React.useState<T | null>(null);
  const [connected, setConnected] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !("EventSource" in window)) return;
    let es: EventSource | null = new EventSource(url);

    const onOpen = () => setConnected(true);
    const onErr = () => setConnected(false);
    const onMsg = (e: MessageEvent) => {
      try {
        const j = JSON.parse(e.data);
        if (j?.payload) setData(j.payload);
      } catch {}
    };

    es.addEventListener("open", onOpen);
    es.addEventListener("error", onErr);
    es.addEventListener("message", onMsg);

    return () => {
      if (es) {
        es.removeEventListener("open", onOpen);
        es.removeEventListener("error", onErr);
        es.removeEventListener("message", onMsg);
        es.close();
        es = null;
      }
    };
  }, [url]);

  return { data, connected };
}