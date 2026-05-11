import { motion } from "framer-motion";

export function FloatingOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-32 -left-32 size-[420px] rounded-full blur-[120px] opacity-40"
        style={{ background: "oklch(0.72 0.18 245 / 0.5)" }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 size-[520px] rounded-full blur-[140px] opacity-30"
        style={{ background: "oklch(0.65 0.24 300 / 0.5)" }}
        animate={{ x: [0, -60, 30, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 size-[380px] rounded-full blur-[110px] opacity-25"
        style={{ background: "oklch(0.78 0.16 180 / 0.5)" }}
        animate={{ x: [0, 50, -50, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
