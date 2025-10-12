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

      // @ts-ignore
      controller.error = () => { clearInterval(iv); clearInterval(hb); };
    },
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
