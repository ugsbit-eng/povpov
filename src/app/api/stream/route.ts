import { kv } from "@vercel/kv";
import { DEFAULTS, KPI_KEY } from "@/lib/kpi-defaults";

export const runtime = "edge";

type Kpis = typeof DEFAULTS;
const enc = new TextEncoder();
const send = (obj: any) => enc.encode(`data: ${JSON.stringify(obj)}\n\n`);

export async function GET() {
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const push = (data: any) => controller.enqueue(send(data));

      // Seed / initial snapshot
      let snap: Kpis | null = await kv.get<Kpis>(KPI_KEY);
      if (!snap) {
        const dayKey = new Intl.DateTimeFormat("en-CA", {
          timeZone: "Europe/Amsterdam",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date());
        snap = { ...DEFAULTS, dayKey };
        await kv.set(KPI_KEY, snap);
      }
      push({ type: "snapshot", payload: snap });

      // Heartbeat every 15s
      const hb = setInterval(
        () => controller.enqueue(enc.encode(`: hb\n\n`)),
        15000
      );

      // Poll KV every 5s; emit when lastUpdateMs changes
      let last = snap?.lastUpdateMs ?? 0;
      const poll = setInterval(async () => {
        try {
          const next = await kv.get<Kpis>(KPI_KEY);
          if (next && next.lastUpdateMs !== last) {
            last = next.lastUpdateMs;
            push({ type: "update", payload: next });
          }
        } catch {
          push({ type: "error", message: "KV read failed" });
        }
      }, 5000);

      // cleanup on cancel
      // @ts-ignore
      this.cancel = () => {
        clearInterval(poll);
        clearInterval(hb);
      };
    },
    cancel() {},
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}