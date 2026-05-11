import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Hero } from "@/components/site/Hero";
import { LogoCloud } from "@/components/site/LogoCloud";
import { Features } from "@/components/site/Features";
import { ProductDemo } from "@/components/site/ProductDemo";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Helix — The Developer Platform for Modern Infrastructure" },
      {
        name: "description",
        content:
          "Helix is the all-in-one developer platform for shipping reliable software. Real-time observability, edge-fast deploys, and infrastructure intelligence in one workspace.",
      },
      { property: "og:title", content: "Helix — Developer platform for modern infrastructure" },
      { property: "og:description", content: "Observability, deploys, and infrastructure intelligence — unified." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <ProductDemo />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
