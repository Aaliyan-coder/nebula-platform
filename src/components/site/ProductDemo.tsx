import { motion } from "framer-motion";
import { useState } from "react";
import { Terminal, Code2, Activity } from "lucide-react";

const tabs = [
  { id: "terminal", label: "CLI", icon: Terminal },
  { id: "api", label: "API", icon: Code2 },
  { id: "live", label: "Live feed", icon: Activity },
] as const;

type Tab = (typeof tabs)[number]["id"];

function TerminalView() {
  const lines = [
    { p: "$", t: "helix deploy --env production", c: "" },
    { p: "→", t: "Building 3 services...", c: "muted" },
    { p: "✓", t: "api-gateway built in 8.2s", c: "green" },
    { p: "✓", t: "worker built in 4.1s", c: "green" },
    { p: "✓", t: "web built in 12.7s", c: "green" },
    { p: "→", t: "Rolling out to 14 regions...", c: "muted" },
    { p: "✓", t: "Deploy live at https://app.helix.dev", c: "green" },
    { p: "→", t: "Health checks passing · 0 errors", c: "blue" },
  ];
  return (
    <div className="font-mono text-sm space-y-1.5">
      {lines.map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="flex gap-3"
        >
          <span className="text-muted-foreground">{l.p}</span>
          <span
            className={
              l.c === "green"
                ? "text-[oklch(0.85_0.18_150)]"
                : l.c === "blue"
                ? "text-[oklch(0.82_0.16_245)]"
                : l.c === "muted"
                ? "text-muted-foreground"
                : "text-foreground"
            }
          >
            {l.t}
          </span>
        </motion.div>
      ))}
      <div className="flex gap-3">
        <span className="text-muted-foreground">$</span>
        <span className="inline-block w-2 h-4 bg-foreground/80 animate-pulse" />
      </div>
    </div>
  );
}

function ApiView() {
  return (
    <div className="grid md:grid-cols-2 gap-4 font-mono text-xs">
      <div className="rounded-lg border border-border bg-background/40 p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 rounded text-[10px] bg-[oklch(0.78_0.18_245_/_0.15)] text-[oklch(0.85_0.16_245)]">POST</span>
          <span className="text-foreground/90">/v1/metrics/query</span>
        </div>
        <pre className="text-muted-foreground leading-relaxed">{`{
  "service": "api-gateway",
  "metric": "latency_p99",
  "window": "1h",
  "groupBy": "region"
}`}</pre>
      </div>
      <div className="rounded-lg border border-border bg-background/40 p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 rounded text-[10px] bg-[oklch(0.7_0.18_150_/_0.15)] text-[oklch(0.85_0.18_150)]">200 OK</span>
          <span className="text-muted-foreground">42ms</span>
        </div>
        <pre className="text-muted-foreground leading-relaxed">{`{
  "data": [
    { "region": "us-east-1", "p99": 38 },
    { "region": "eu-west-1", "p99": 42 },
    { "region": "ap-south-1", "p99": 51 }
  ]
}`}</pre>
      </div>
    </div>
  );
}

function LiveFeed() {
  const events = [
    { s: "deploy", t: "v2.14.3 → production", c: "oklch(0.78 0.18 245)" },
    { s: "alert", t: "checkout p99 > 200ms (resolved 2m)", c: "oklch(0.78 0.18 90)" },
    { s: "scale", t: "worker-eu scaled 4 → 9", c: "oklch(0.78 0.16 150)" },
    { s: "auth", t: "new SSO connection: acme.corp", c: "oklch(0.78 0.18 245)" },
    { s: "deploy", t: "v2.14.4 → preview/branch-184", c: "oklch(0.65 0.24 300)" },
  ];
  return (
    <div className="space-y-2">
      {events.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-3 py-2 font-mono text-xs"
        >
          <span className="size-2 rounded-full" style={{ background: e.c }} />
          <span className="uppercase tracking-wider text-[10px] text-muted-foreground w-16">{e.s}</span>
          <span className="text-foreground/90">{e.t}</span>
          <span className="ml-auto text-muted-foreground">{i * 4 + 2}s ago</span>
        </motion.div>
      ))}
    </div>
  );
}

export function ProductDemo() {
  const [tab, setTab] = useState<Tab>("terminal");
  return (
    <section id="product" className="relative py-28">
      <div className="absolute inset-0 bg-dot [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Built for how <span className="text-gradient">engineers actually work</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A clean CLI, a typed SDK, and a real-time dashboard that stays out of your way.
          </p>
        </div>

        <div className="rounded-2xl border border-border glass-strong overflow-hidden">
          <div className="flex items-center gap-1 border-b border-border p-2 bg-background/30">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition ${
                  tab === t.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-md bg-muted/60"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <t.icon className="relative size-3.5" />
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
          <div className="p-6 md:p-8 min-h-[320px]">
            {tab === "terminal" && <TerminalView />}
            {tab === "api" && <ApiView />}
            {tab === "live" && <LiveFeed />}
          </div>
        </div>
      </div>
    </section>
  );
}
