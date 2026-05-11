import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Hobby",
    price: "$0",
    desc: "For solo developers and side-projects.",
    features: ["1 project", "10K events/day", "7-day retention", "Community support"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    desc: "Everything you need to ship in production.",
    features: ["Unlimited projects", "10M events/day", "30-day retention", "SSO + audit log", "Priority support"],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Dedicated infra, custom SLAs, white-glove onboarding.",
    features: ["Dedicated cluster", "Unlimited retention", "On-prem available", "99.99% SLA", "Named CSM"],
    cta: "Contact sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Simple, <span className="text-gradient">scalable pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Start free. Upgrade only when you outgrow it.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`relative rounded-2xl p-7 ${
                t.highlight
                  ? "border-gradient bg-card/80 glow-shadow"
                  : "border border-border bg-card/60"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-xs text-white">
                  Most popular
                </div>
              )}
              <div className="font-display text-lg font-semibold">{t.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold tracking-tight">{t.price}</span>
                {t.price !== "Custom" && <span className="text-muted-foreground text-sm">/mo</span>}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <Button
                className={`mt-6 w-full ${t.highlight ? "bg-gradient-primary text-white border-0" : ""}`}
                variant={t.highlight ? "default" : "secondary"}
              >
                {t.cta}
              </Button>
              <ul className="mt-6 space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="size-4 text-[oklch(0.78_0.16_150)] mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
