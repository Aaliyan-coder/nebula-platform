import { motion } from "framer-motion";
import { Activity, Boxes, GitBranch, Globe2, Lock, Sparkles, Zap, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

function Card({
  className = "",
  children,
  delay = 0,
}: {
  className?: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl border border-border bg-card/60 overflow-hidden border-gradient hover:-translate-y-1 transition-transform duration-300 ${className}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(400px_circle_at_var(--x,50%)_var(--y,50%),oklch(0.72_0.18_245_/_0.12),transparent_60%)]" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

function IconBadge({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="size-10 rounded-xl bg-gradient-primary grid place-items-center glow-shadow">
      <Icon className="size-5 text-white" strokeWidth={2.2} />
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full glass mb-4">
            <Sparkles className="size-3.5 text-[color:var(--neon)]" /> Platform
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            One platform. <span className="text-gradient">Every layer of your stack.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From request to render, get unified visibility and control across services, edges, and environments.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(220px,auto)]">
          {/* Big card */}
          <Card className="md:col-span-2 md:row-span-2 p-7">
            <IconBadge Icon={Activity} />
            <h3 className="mt-5 font-display text-2xl font-semibold">Real-time observability</h3>
            <p className="mt-2 text-muted-foreground max-w-md">
              Distributed tracing, structured logs, and live metrics — correlated in one timeline so you can resolve
              incidents in minutes, not hours.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-background/50 p-4 font-mono text-xs space-y-1.5">
              <div className="flex justify-between text-muted-foreground">
                <span>trace_id</span><span>9f4c2a · 184ms</span>
              </div>
              {[
                ["GET /api/checkout", "32ms", "oklch(0.78 0.16 150)"],
                ["→ auth.verify", "8ms", "oklch(0.78 0.18 245)"],
                ["→ db.query users", "14ms", "oklch(0.78 0.18 245)"],
                ["→ stripe.charge", "118ms", "oklch(0.78 0.18 90)"],
                ["← 200 OK", "—", "oklch(0.78 0.16 150)"],
              ].map(([n, t, c], i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full" style={{ background: c }} />
                  <span className="flex-1 text-foreground/90">{n}</span>
                  <span className="text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card delay={0.05} className="p-6">
            <IconBadge Icon={Zap} />
            <h3 className="mt-4 font-display text-lg font-semibold">Edge-fast deploys</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Global rollouts in under 30 seconds with instant rollback.
            </p>
          </Card>

          <Card delay={0.1} className="p-6">
            <IconBadge Icon={Lock} />
            <h3 className="mt-4 font-display text-lg font-semibold">SOC 2 + GDPR</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Enterprise-grade security, audit logs, and SSO out of the box.
            </p>
          </Card>

          <Card delay={0.15} className="md:col-span-2 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <IconBadge Icon={GitBranch} />
                <h3 className="mt-4 font-display text-lg font-semibold">Git-native workflows</h3>
                <p className="mt-1.5 text-sm text-muted-foreground max-w-sm">
                  Preview every branch, diff infrastructure changes, and ship from your existing PR flow.
                </p>
              </div>
              <div className="hidden sm:block rounded-lg border border-border bg-background/50 p-3 font-mono text-[11px] w-56">
                <div className="text-[oklch(0.78_0.16_150)]">+ added route /api/v2</div>
                <div className="text-[oklch(0.78_0.18_90)]">~ scaled web → 8</div>
                <div className="text-muted-foreground">~ deploy preview ready</div>
              </div>
            </div>
          </Card>

          <Card delay={0.05} className="p-6">
            <IconBadge Icon={Globe2} />
            <h3 className="mt-4 font-display text-lg font-semibold">300+ regions</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Anycast routing keeps every user under 50ms from your services.
            </p>
          </Card>

          <Card delay={0.1} className="p-6">
            <IconBadge Icon={Boxes} />
            <h3 className="mt-4 font-display text-lg font-semibold">Composable primitives</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Queues, KV, cron, and AI inference — built into one runtime.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
