"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Dueño",
    company: "Restaurante El Sabor Criollo",
    text: "El sistema POS transformó completamente nuestro negocio. Antes perdíamos horas en cierres de caja, ahora todo es automático. Las ventas subieron 30% en 3 meses.",
    color: "#6366f1",
    initials: "CM",
  },
  {
    name: "Luciana Torres",
    role: "Gerente Comercial",
    company: "Boutique LunaStyle",
    text: "La tienda online es espectacular. Mis clientes siempre preguntan quién la hizo. Las ventas por internet ahora representan el 40% de mis ingresos totales.",
    color: "#8b5cf6",
    initials: "LT",
  },
  {
    name: "Roberto Quispe",
    role: "CEO",
    company: "Distribuidora Andina SAC",
    text: "El ERP a medida superó todas nuestras expectativas. Controlar nuestros 5 almacenes desde un solo sistema era algo que creíamos imposible.",
    color: "#22d3ee",
    initials: "RQ",
  },
  {
    name: "Ana Fujimoto",
    role: "Directora",
    company: "Academia Digital Lima",
    text: "Nuestra landing page convierte 3 veces mejor. El diseño es premium, carga rapidísimo y el soporte siempre responde cuando lo necesitamos.",
    color: "#10b981",
    initials: "AF",
  },
  {
    name: "Miguel Paredes",
    role: "Propietario",
    company: "Ferretería Paredes e Hijos",
    text: "Ahora controlamos inventario de 2,000+ productos en tiempo real. El retorno de inversión fue en menos de 6 meses. Lo recomiendo completamente.",
    color: "#f59e0b",
    initials: "MP",
  },
  {
    name: "Sofía Ramírez",
    role: "Fundadora",
    company: "Clínica Estética Bella Vida",
    text: "La web refleja exactamente el nivel premium de nuestra clínica. Los clientes llegan mucho más calificados y el sistema de citas redujo llamadas en 60%.",
    color: "#ec4899",
    initials: "SR",
  },
];

export default function Testimonials() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonios" ref={ref} className="section relative overflow-hidden bg-[var(--bg)] noise-overlay border-t border-[var(--border-soft)]">
      <div className="absolute inset-0 dot-bg opacity-15" />
      
      {/* Background glowing lights */}
      <div className="glow-orb glow-indigo" style={{ width: 500, height: 500, bottom: -80, right: -80, opacity: 0.15 }} />
      <div className="glow-orb glow-gold" style={{ width: 400, height: 400, top: -80, left: -80, opacity: 0.08 }} />

      <div className="container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--primary-soft)] text-[11px] font-bold text-[var(--primary)] mb-6 uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            Testimonios Reales
          </span>
          <h2 className="font-display font-black text-[var(--text)] leading-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
            Casos de éxito que <br />
            <span className="text-gradient-purple">hablan por nosotros</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[16px] leading-relaxed">
            Negocios peruanos que confiaron en nuestro código y transformaron su forma de vender y gestionar.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              className="card group relative p-8 flex flex-col overflow-hidden border-[var(--border)] hover:border-purple-500/20"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${t.color}08, transparent 70%)` }}
              />

              {/* Quote */}
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center mb-6 shrink-0 relative z-10"
                style={{ background: `${t.color}12`, border: `1px solid ${t.color}20` }}
              >
                <Quote className="w-4 h-4" style={{ color: t.color }} />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[13.5px] text-[var(--text-muted)] leading-relaxed flex-1 mb-7 relative z-10">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-black text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}66)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[var(--text)]">{t.name}</div>
                  <div className="text-[12px] text-slate-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
