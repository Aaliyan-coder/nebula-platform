import { motion } from "framer-motion";

const items = [
  { q: "We cut our incident response time from 40 minutes to under 5. Helix changed how our team operates.", n: "Lena Park", r: "Staff SRE · Northwind" },
  { q: "Finally, an observability platform that doesn't feel like a 2014 Java app. It's actually a joy to use.", n: "Marcus Chen", r: "CTO · Drift Labs" },
  { q: "We replaced four tools with Helix and our infra bill dropped 32%. Onboarding took an afternoon.", n: "Priya Raman", r: "VP Engineering · Lumen" },
  { q: "The CLI is the cleanest I've used since Vercel's early days. My team adopted it without a single meeting.", n: "Sofia Alvarez", r: "Platform Lead · Arc" },
  { q: "Tracing, logs, and metrics in one place — correlated. It's what every other vendor pretends to ship.", n: "Daniel Okafor", r: "Principal Engineer · Hexcore" },
  { q: "Helix is the rare developer tool that makes me feel faster the more I learn it.", n: "Aiko Tanaka", r: "Founder · Zerolag" },
];

export function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Loved by <span className="text-gradient">10,000+ engineers</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Trusted by teams shipping the world's most demanding software.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              className="rounded-2xl border border-border bg-card/60 p-6 hover:bg-card/80 transition"
            >
              <blockquote className="text-sm leading-relaxed text-foreground/90">"{t.q}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="size-9 rounded-full bg-gradient-primary" />
                <div>
                  <div className="text-sm font-medium">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
