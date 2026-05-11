import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-border overflow-hidden glass-strong p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-50" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              Ship with <span className="text-gradient">confidence.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Join thousands of teams using Helix to build reliable, observable, fast software.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white border-0 h-12 px-6 glow-shadow">
                Start free <ArrowRight className="ml-1.5 size-4" />
              </Button>
              <Button size="lg" variant="ghost" className="glass h-12 px-6">
                Talk to sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
