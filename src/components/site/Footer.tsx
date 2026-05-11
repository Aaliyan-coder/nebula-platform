import { Github, Twitter, Linkedin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const cols = [
  { t: "Product", l: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"] },
  { t: "Developers", l: ["Docs", "API Reference", "CLI", "SDKs", "Status"] },
  { t: "Company", l: ["About", "Careers", "Customers", "Blog", "Press"] },
  { t: "Legal", l: ["Privacy", "Terms", "Security", "DPA", "SOC 2"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-[1.4fr_repeat(4,1fr)] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-gradient-primary grid place-items-center">
                <Zap className="size-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-semibold">Helix</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              The developer platform for modern infrastructure. Build, ship, and observe with confidence.
            </p>
            <form className="mt-6 flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="you@company.com" className="bg-background/60" />
              <Button type="submit" className="bg-gradient-primary text-white border-0">Subscribe</Button>
            </form>
            <div className="mt-6 flex gap-2">
              {[Github, Twitter, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 rounded-lg border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition"
                >
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.t}>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{c.t}</div>
              <ul className="mt-4 space-y-2.5">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Helix Systems, Inc. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[oklch(0.7_0.18_150)] animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
