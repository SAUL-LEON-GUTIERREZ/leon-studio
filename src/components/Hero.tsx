"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, Rocket, Smartphone, Gauge, Shield, ChevronDown } from "lucide-react";
import HeroMockup from "./HeroMockup";

const rotatingWords = [
  "PÁGINAS WEB PROFESIONALES",
  "TIENDAS ONLINE",
  "SISTEMAS POS",
  "SOFTWARE EMPRESARIAL",
  "AUTOMATIZACIÓN DE PROCESOS"
];

function AnimatedWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex overflow-hidden h-[1.15em] items-center justify-center align-middle py-1">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -35, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 -webkit-background-clip: text -webkit-text-fill-color: transparent bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(236,72,153,0.35)] inline-block uppercase font-black"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-[var(--bg)] overflow-hidden noise-overlay min-h-screen flex flex-col justify-center">

      {/* ── Cosmic Glowing Ambient Orbs ── */}
      <div className="glow-orb glow-indigo w-[600px] h-[500px] -top-32 left-1/2 -translate-x-1/2 opacity-25 -z-10" />
      <div className="glow-orb glow-gold w-[400px] h-[400px] top-10 left-1/2 -translate-x-1/2 opacity-15 -z-10" />

      {/* ── Engineering Grid Overlay from user code ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16">

          {/* Gold Badge Capsule from the flyer */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 backdrop-blur-xl mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-purple-200 uppercase">
              PÁGINAS WEB • ECOMMERCE • SOFTWARE A MEDIDA
            </span>
          </motion.div>

          {/* High converting headline focused on results */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <h1
              className="font-display font-black text-[var(--text)] tracking-tighter leading-[0.92] md:leading-[0.85] mb-6 max-w-6xl mx-auto"
              style={{ fontSize: "clamp(2.8rem, 7.5vw, 5.8rem)" }}
            >
              Construimos
              <br />
              <span className="bg-gradient-to-r from-white via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                soluciones digitales
              </span>
              <br />
              que impulsan negocios
            </h1>
          </motion.div>

          {/* Dedicated Rotating Words Section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 mb-8"
          >
            <span className="text-slate-400 font-bold text-sm md:text-base uppercase tracking-widest block">
              Especialistas en
            </span>
            <div className="mt-2 text-2xl md:text-4xl font-black">
              <AnimatedWord />
            </div>
          </motion.div>

          {/* Elegant SaaS Subtitle focusing on benefits */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="text-[16px] md:text-[18px] text-[var(--text-muted)] leading-relaxed mb-10 max-w-3xl mx-auto font-medium"
          >
            Desarrollamos páginas web, ecommerce y software empresarial diseñados para atraer más clientes, optimizar procesos y aumentar las ventas de tu negocio.
            <br className="hidden md:block" />
            Creamos soluciones modernas, rápidas y escalables para empresas de todo el Perú.
          </motion.p>

          {/* Action CTAs with load entry animation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none mb-6"
          >
            <a
              href="https://wa.me/51916175738?text=Hola,%20quiero%20solicitar%20la%20asesoría%20gratuita%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-extrabold rounded-full transition-all duration-300 hover:scale-[1.03] shadow-[0_8px_30px_rgba(124,58,237,0.3)] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              Solicitar Asesoría Gratuita
            </a>
            <button
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer"
            >
              Ver servicios
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* ── Protagonist Mockup Wrapper with spring entrance ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto mt-8 sm:mt-12"
          >
            <HeroMockup />
          </motion.div>

        </div>

        {/* Scroll cue from your code */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown className="w-6 h-6 text-purple-500/40 hover:text-purple-400 transition-colors" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
