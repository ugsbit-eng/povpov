import { getKPIs } from "@/lib/state";

export const runtime = "nodejs";

const enc = new TextEncoder();
const send = (obj: any) => enc.encode(`data: ${JSON.stringify(obj)}\n\n`);

export async function GET() {
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const push = (data: any) => controller.enqueue(send(data));
      push({ type: "kpis", data: getKPIs() });
      
      const iv = setInterval(() => push({ type: "kpis", data: getKPIs() }), 1000);
      const hb = setInterval(() => controller.enqueue(enc.encode(":hb\n\n")), 10000);

      // Proper cleanup when stream is cancelled
      const cleanup = () => {
        clearInterval(iv);
        clearInterval(hb);
      };

      // Handle abort signal for proper cleanup
      const abortController = new AbortController();
      abortController.signal.addEventListener('abort', cleanup);
      
      // Store cleanup function for potential manual cleanup
      (controller as any).cleanup = cleanup;
    },
    cancel() {
      // This is called when the client disconnects
      if ((this as any).cleanup) {
        (this as any).cleanup();
      }
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
