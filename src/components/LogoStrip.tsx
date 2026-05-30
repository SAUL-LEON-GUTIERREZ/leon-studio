"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const logos = [
  { name: "NOVA STORE", sub: "ECOMMERCE", style: "font-display font-light tracking-[0.2em]" },
  { name: "MOKA", sub: "COFFEE & BAR", style: "font-serif tracking-widest" },
  { name: "FITZONE", sub: "GYM", style: "font-display font-black italic tracking-wide" },
  { name: "GRUPO ANDINO", sub: "DISTRIBUCIÓN", style: "font-sans font-bold tracking-tight" },
  { name: "OCEANÍA", sub: "SEAFOOD", style: "font-serif font-medium tracking-[0.1em]" },
  { name: "VetCare", sub: "CLÍNICA VETERINARIA", style: "font-sans font-medium" },
  { name: "LUNASTYLE", sub: "BOUTIQUE", style: "font-display font-semibold tracking-wider" },
  { name: "BELLA VIDA", sub: "ESTÉTICA", style: "font-serif italic tracking-wide" },
];

function LogoItem({ l }: { l: typeof logos[0] }) {
  return (
    <div className="flex flex-col items-center justify-center px-10 shrink-0 opacity-55 hover:opacity-90 transition-opacity duration-300 cursor-default">
      <span className={`text-[15px] text-[var(--text)] font-semibold leading-none uppercase ${l.style}`}>{l.name}</span>
      {l.sub && (
        <span className="text-[8px] tracking-[0.18em] text-[var(--text-light)] uppercase mt-1.5 font-bold">{l.sub}</span>
      )}
    </div>
  );
}

export default function LogoStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const track = [...logos, ...logos];

  return (
    <section
      ref={ref}
      className="border-y border-[var(--border-soft)] relative z-10 overflow-hidden bg-[var(--bg)]"
    >
      <div className="container py-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* Left label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col shrink-0 md:border-r border-[var(--border-soft)] md:pr-12 text-center md:text-left"
        >
          <div className="text-[28px] font-black text-gradient-gold font-display leading-none">50+</div>
          <div className="text-[12px] text-[var(--text-muted)] font-extrabold uppercase tracking-wider mt-1.5">Negocios confían en nosotros</div>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex-1 overflow-hidden logo-strip w-full"
        >
          <div className="marquee-track">
            {track.map((l, i) => (
              <LogoItem key={`${l.name}-${i}`} l={l} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
