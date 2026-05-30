"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Smartphone, Search, Rocket, ShieldCheck, Activity } from "lucide-react";

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: "easeOut" as const }
  });

  return (
    <section id="beneficios" ref={ref} className="section relative overflow-hidden bg-[var(--bg)] noise-overlay border-y border-[var(--border-soft)]">
      
      {/* Cinematic glows */}
      <div className="glow-orb glow-indigo w-[600px] h-[600px] -bottom-10 -left-10 opacity-15 -z-10" />
      <div className="glow-orb glow-gold w-[400px] h-[400px] -top-10 -right-10 opacity-10 -z-10" />
      
      <div className="container relative z-10 w-full">
        
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <motion.div {...fade(0)}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--primary-soft)] text-[11px] font-bold text-[var(--primary)] mb-6 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              Nuestra Filosofía Técnica
            </div>
            <h2 className="font-display font-black text-[var(--text)] text-[32px] md:text-[44px] leading-[1.05] tracking-tight mb-4">
              Arquitectura de software que <span className="text-gradient-gold">no falla.</span>
            </h2>
            <p className="text-[16px] text-[var(--text-muted)] leading-[1.6]">
              A diferencia de las agencias tradicionales que usan plantillas pesadas, nosotros escribimos código desde cero. El resultado: sistemas a prueba de balas, ultra-rápidos y listos para escalar.
            </p>
          </motion.div>
        </div>

        {/* ── Bento Grid Structure ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          
          {/* Bento Item 1: Wide (Speed) */}
          <motion.div {...fade(0.1)} className="card p-8 md:col-span-2 lg:col-span-2 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap className="w-32 h-32 text-purple-500" />
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="text-[20px] font-bold text-[var(--text)] mb-2">Velocidad Extrema</h3>
              <p className="text-[14px] text-[var(--text-muted)] max-w-sm">Tiempos de carga inferiores a 1 segundo. Optimizamos cada línea de código para retener a todos tus usuarios.</p>
            </div>
            <div className="flex items-end gap-3">
              <div className="text-[40px] font-black text-gradient-gold leading-none stat-num">100/100</div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-light)] mb-1">En Google Lighthouse</div>
            </div>
          </motion.div>

          {/* Bento Item 2: Square (Mobile) */}
          <motion.div {...fade(0.2)} className="card p-8 md:col-span-1 lg:col-span-1 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="text-[18px] font-bold text-[var(--text)] mb-2">Mobile First</h3>
              <p className="text-[13px] text-[var(--text-muted)]">Diseño impecable y totalmente fluido para pantallas táctiles desde el día uno.</p>
            </div>
          </motion.div>

          {/* Bento Item 3: Tall (Infrastructure) */}
          <motion.div {...fade(0.3)} className="card p-8 md:col-span-3 lg:col-span-1 lg:row-span-2 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/5 blur-3xl rounded-full" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="text-[20px] font-bold text-[var(--text)] mb-2">Infraestructura Cloud</h3>
              <p className="text-[14px] text-[var(--text-muted)] mb-6">Desplegamos tu proyecto en arquitecturas serverless. Adiós a las caídas de servidor.</p>
            </div>
            <div className="mt-auto bg-[var(--bg-muted)]/60 border border-[var(--border-soft)] rounded-xl p-4 backdrop-blur-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-[var(--text-light)] font-semibold">Uptime garantizado</span>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-bold">
                  <Activity className="w-3.5 h-3.5" /> 99.9%
                </span>
              </div>
              <div className="w-full bg-[var(--border)] rounded-full h-1.5">
                <div className="bg-[#10b981] h-1.5 rounded-full w-[99.9%]" />
              </div>
            </div>
          </motion.div>

          {/* Bento Item 4: Wide (SEO) */}
          <motion.div {...fade(0.4)} className="card p-8 md:col-span-3 lg:col-span-3 flex flex-col justify-center relative overflow-hidden group">
             <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-5">
              <Search className="w-64 h-64 text-[#8B5CF6]" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <Search className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[var(--text)]">Posicionamiento SEO Técnico</h3>
                </div>
                <p className="text-[14px] text-[var(--text-muted)]">Nuestra estructura de código garantiza que Google entienda y priorice tu negocio frente a tu competencia.</p>
              </div>
              <div className="shrink-0 flex items-center gap-4 bg-[var(--bg-muted)]/60 border border-[var(--border-soft)] p-4 rounded-xl backdrop-blur-md">
                 <div className="text-center px-4 border-r border-[var(--border-soft)]">
                   <div className="text-[24px] font-black text-gradient-gold">#1</div>
                   <div className="text-[9px] uppercase tracking-wider text-[var(--text-light)]">Arquitectura</div>
                 </div>
                 <div className="text-center px-4">
                   <div className="text-[24px] font-black text-[var(--text)]">JSON-LD</div>
                   <div className="text-[9px] uppercase tracking-wider text-[var(--text-light)]">Rich Snippets</div>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
