import { motion } from "framer-motion";
import { Activity, ArrowUpRight, CircleCheck, Cpu, Database, Globe, Server } from "lucide-react";

function Sparkline({ points, color = "var(--neon)" }: { points: number[]; color?: string }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const w = 100;
  const h = 32;
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min || 1)) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-8">
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={`oklch(0.72 0.18 245 / 0.5)`} />
          <stop offset="100%" stopColor={`oklch(0.72 0.18 245 / 0)`} />
        </linearGradient>
      </defs>
      <path d={`${d} L${w},${h} L0,${h} Z`} fill="url(#spark)" />
      <path d={d} stroke={`oklch(0.78 0.18 245)`} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function AreaChart() {
  const points = [40, 55, 48, 70, 62, 80, 75, 92, 85, 100, 95, 110];
  const w = 320, h = 120;
  const max = Math.max(...points);
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - (p / max) * h * 0.9;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-32">
      <defs>
        <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.18 245 / 0.4)" />
          <stop offset="100%" stopColor="oklch(0.72 0.18 245 / 0)" />
        </linearGradient>
        <linearGradient id="area-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="oklch(0.78 0.18 245)" />
          <stop offset="100%" stopColor="oklch(0.65 0.24 300)" />
        </linearGradient>
      </defs>
      {[0, 30, 60, 90].map((y) => (
        <line key={y} x1="0" x2={w} y1={y} y2={y} stroke="oklch(1 0 0 / 0.05)" />
      ))}
      <path d={`${d} L${w},${h} L0,${h} Z`} fill="url(#area)" />
      <motion.path
        d={d}
        stroke="url(#area-line)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />
    </svg>
  );
}

export function DashboardMockup() {
  return (
    <div className="relative rounded-2xl border border-border glass-strong shadow-2xl overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/40">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[oklch(0.7_0.18_25)]" />
          <span className="size-2.5 rounded-full bg-[oklch(0.78_0.18_90)]" />
          <span className="size-2.5 rounded-full bg-[oklch(0.7_0.18_150)]" />
        </div>
        <div className="ml-3 flex-1 flex justify-center">
          <div className="px-3 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground font-mono">
            app.helix.dev / observability
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-[200px_1fr] min-h-[420px]">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col gap-1 p-3 border-r border-border bg-background/20">
          {[
            { i: Activity, l: "Overview", a: true },
            { i: Server, l: "Services" },
            { i: Database, l: "Databases" },
            { i: Globe, l: "Edge" },
            { i: Cpu, l: "Compute" },
          ].map((it) => (
            <div
              key={it.l}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-sm ${
                it.a ? "bg-primary/15 text-foreground" : "text-muted-foreground"
              }`}
            >
              <it.i className="size-4" />
              {it.l}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Production</div>
              <div className="font-display text-lg font-semibold">api-gateway</div>
            </div>
            <div className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-[oklch(0.7_0.18_150_/_0.15)] text-[oklch(0.85_0.18_150)]">
              <span className="size-1.5 rounded-full bg-[oklch(0.7_0.18_150)] animate-pulse" />
              Healthy
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { l: "Requests", v: "2.4M", t: "+12%", d: [10, 15, 12, 18, 16, 22, 20, 28] },
              { l: "Latency p99", v: "42ms", t: "-8%", d: [40, 38, 42, 36, 30, 32, 28, 26] },
              { l: "Error rate", v: "0.03%", t: "-22%", d: [5, 4, 6, 3, 4, 2, 3, 1] },
            ].map((k) => (
              <div key={k.l} className="rounded-lg border border-border bg-card/60 p-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  {k.l} <ArrowUpRight className="size-3" />
                </div>
                <div className="font-display text-xl font-semibold mt-0.5">{k.v}</div>
                <div className="text-[10px] text-[oklch(0.78_0.16_150)] mb-1">{k.t}</div>
                <Sparkline points={k.d} />
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-lg border border-border bg-card/60 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium">Throughput · last 24h</div>
              <div className="text-xs text-muted-foreground font-mono">req/s</div>
            </div>
            <AreaChart />
          </div>

          {/* Activity feed */}
          <div className="rounded-lg border border-border bg-card/60 p-3 space-y-2">
            {[
              { t: "Deploy succeeded · api-gateway @ 9f4c2", c: "oklch(0.78 0.16 150)" },
              { t: "Auto-scaled eu-west-1 → 12 replicas", c: "oklch(0.78 0.18 245)" },
              { t: "Alert resolved · checkout p99 normalized", c: "oklch(0.78 0.18 90)" },
            ].map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.2 }}
                className="flex items-center gap-2 text-xs font-mono"
              >
                <CircleCheck className="size-3.5" style={{ color: a.c }} />
                <span className="text-muted-foreground">{a.t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
