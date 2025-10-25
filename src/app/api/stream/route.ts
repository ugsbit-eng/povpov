import { getKPIs } from "@/lib/state";

export const runtime = "nodejs";

const enc = new TextEncoder();
const send = (obj: any) => enc.encode(`data: ${JSON.stringify(obj)}\n\n`);

export async function GET(req: Request) {
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      let closed = false;
      const safeEnqueue = (chunk: Uint8Array) => {
        if (closed) return;
        try { controller.enqueue(chunk); } catch { closed = true; cleanup(); }
      };
      const push = (data: any) => safeEnqueue(send(data));

      // initial payload
      push({ type: "kpis", data: getKPIs() });

      // timers
      const iv = setInterval(() => push({ type: "kpis", data: getKPIs() }), 1000);
      const hb = setInterval(() => safeEnqueue(enc.encode(":hb\n\n")), 10000);

      // cleanup
      const cleanup = () => {
        if (closed) return;
        closed = true;
        clearInterval(iv);
        clearInterval(hb);
        try { controller.close(); } catch {}
      };

      // client abort
      try { req.signal.addEventListener("abort", cleanup); } catch {}

      (controller as any).cleanup = cleanup;
    },
    cancel() {
      const c = (this as any).cleanup;
      if (c) c();
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
