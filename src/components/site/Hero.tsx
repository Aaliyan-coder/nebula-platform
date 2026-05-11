import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Counter } from "./Counter";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const [mouse, setMouse] = useState({ x: 0.5, y: 0.3 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative pt-32 md:pt-40 pb-24 overflow-hidden">
      {/* Mouse-follow glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, oklch(0.72 0.18 245 / 0.18), transparent 60%)`,
        }}
      />
      {/* Grid + mesh */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-gradient-mesh" />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition"
          >
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-[color:var(--neon)]" />
              <span className="text-foreground/90">New</span>
            </span>
            <span className="h-3 w-px bg-border" />
            Helix 2.0 — AI-powered observability is live
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] tracking-tight font-semibold"
          >
            The developer platform <br className="hidden md:block" />
            for <span className="text-gradient">modern infrastructure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Ship reliable systems with end-to-end observability, real-time API testing,
            and infrastructure intelligence — all in one elegant workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button
              size="lg"
              className="group bg-gradient-primary text-white border-0 hover:opacity-95 glow-shadow h-12 px-6"
            >
              Start building free
              <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="ghost" className="h-12 px-5 glass">
              <Play className="mr-1.5 size-4" /> Watch demo
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 text-xs text-muted-foreground"
          >
            No credit card required · SOC 2 Type II · Free for solo developers
          </motion.p>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 md:mt-20"
        >
          <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative animate-float">
            <DashboardMockup />
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { v: 99.99, s: "%", l: "Uptime SLA", d: 2 },
            { v: 12, s: "ms", l: "p99 latency" },
            { v: 4200, s: "+", l: "Teams shipping" },
            { v: 180, s: "M", l: "Events / day" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-semibold text-gradient">
                <Counter to={s.v} suffix={s.s} decimals={s.d ?? 0} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
