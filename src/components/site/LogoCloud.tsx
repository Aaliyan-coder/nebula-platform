const logos = ["Vercel", "Linear", "Stripe", "Supabase", "Cloudflare", "Notion", "GitHub", "OpenAI", "Datadog", "Figma"];

export function LogoCloud() {
  return (
    <section className="py-16 border-y border-border/60 bg-background/40">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted by engineering teams at
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-14 animate-marquee w-max">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={i}
                className="font-display text-2xl md:text-3xl font-semibold text-muted-foreground/70 hover:text-foreground transition whitespace-nowrap"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
