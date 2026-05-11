const integrations = [
  "GitHub", "GitLab", "Bitbucket", "Slack", "Discord", "PagerDuty",
  "Datadog", "Grafana", "Prometheus", "OpenTelemetry", "Sentry",
  "AWS", "GCP", "Azure", "Cloudflare", "Vercel", "Fly.io",
  "Postgres", "Redis", "Kafka", "Snowflake", "ClickHouse",
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex gap-3 w-max animate-marquee"
        style={reverse ? { animationDirection: "reverse", animationDuration: "40s" } : { animationDuration: "45s" }}
      >
        {[...items, ...items].map((n, i) => (
          <div
            key={i}
            className="shrink-0 rounded-xl border border-border bg-card/50 px-5 py-3 text-sm font-medium text-foreground/80 hover:bg-card hover:text-foreground transition whitespace-nowrap"
          >
            <span className="mr-2 inline-block size-1.5 rounded-full bg-gradient-primary align-middle" />
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Integrations() {
  const half = Math.ceil(integrations.length / 2);
  return (
    <section id="integrations" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Plays well with <span className="text-gradient">your stack</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            150+ first-class integrations. Bring your tools — keep your workflow.
          </p>
        </div>
        <div className="space-y-3">
          <Row items={integrations.slice(0, half)} />
          <Row items={integrations.slice(half)} reverse />
        </div>
      </div>
    </section>
  );
}
