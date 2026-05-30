"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Monitor, ShoppingBag, BarChart3, Layout } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Zenith POS Pro",
    category: "Sistema POS & Gestión",
    description: "Sistema completo de punto de venta con control de inventario en tiempo real, facturación SUNAT y dashboard ejecutivo para cadena de restaurantes.",
    tech: ["React", "Node.js", "PostgreSQL", "SUNAT API"],
    color: "#B48A1D", accent: "#FFE082", textColor: "#9A731C",
    icon: Monitor,
    preview: "pos" as const,
  },
  {
    id: 2,
    name: "Nova Store Premium",
    category: "Ecommerce de Alta Gama",
    description: "Tienda virtual de moda con catálogo dinámico, carrito inteligente, integración con Yape y Mercado Pago, y panel de gestión automatizado.",
    tech: ["Next.js", "Stripe", "Yape API", "Vercel"],
    color: "#8B5CF6", accent: "#c4b5fd", textColor: "#6D28D9",
    icon: ShoppingBag,
    preview: "ecommerce" as const,
  },
  {
    id: 3,
    name: "Apex Dashboard ERP",
    category: "ERP & Analytics Empresarial",
    description: "Plataforma ERP a medida para distribuidora. CRM integrado, gestión de almacén, cotizaciones automáticas y reportes en tiempo real.",
    tech: ["Next.js", "TypeScript", "Prisma", "AWS"],
    color: "#9333EA", accent: "#e9d5ff", textColor: "#7C3AED",
    icon: BarChart3,
    preview: "erp" as const,
  },
  {
    id: 4,
    name: "LandingFlow Suite",
    category: "Landing Pages de Alta Conversión",
    description: "Embudo de landing pages rápidas para sector inmobiliario. Captura automatizada de leads, integraciones API y analytics avanzado.",
    tech: ["Astro", "Framer Motion", "Resend", "Google Analytics"],
    color: "#7C3AED", accent: "#d8b4fe", textColor: "#6D28D9",
    icon: Layout,
    preview: "landing" as const,
  },
];

/* ── Previews ── */
type PreviewProps = { color: string };

const PreviewPOS = ({ color }: PreviewProps) => (
  <div className="h-full flex text-slate-800" style={{ background: "#FFFFFF" }}>
    <div className="w-36 border-r border-slate-100 p-3 flex flex-col gap-1.5 shrink-0 bg-slate-50/50">
      <div className="h-7 bg-purple-50 rounded-lg mb-3 flex items-center px-2 border border-purple-100/40">
        <div className="w-2.5 h-2.5 rounded bg-purple-600 mr-2" />
        <div className="h-2 bg-purple-200 rounded w-16" />
      </div>
      {["Dashboard","Ventas","Inventario","Clientes","Reportes"].map((item, i) => (
        <div key={item} className={`h-8 rounded-xl flex items-center px-3 text-[10px] font-bold ${i===0?"bg-purple-600/10 text-purple-700 border border-purple-200/30":"text-slate-500"}`}>
          {item}
        </div>
      ))}
    </div>
    <div className="flex-1 p-4 flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        {[["S/14,280","Ventas","#7C3AED"],["284","Órdenes","#4F46E5"],["S/890","Pendiente","#D97706"]].map(([v,l,c])=>(
          <div key={l} className="rounded-xl p-2.5 border border-slate-100 bg-slate-50/30">
            <div className="text-[9px] text-slate-500 font-semibold mb-1">{l}</div>
            <div className="text-[13px] font-bold" style={{color:c as string}}>{v}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-xl p-3 border border-slate-100 bg-slate-50/10">
        <div className="text-[10px] text-slate-700 font-bold mb-2">Últimas transacciones</div>
        {[["Mesa 3 – Ceviche","S/45","Pagado"],["Mesa 7 – Lomo Saltado","S/38","Pendiente"],["Mesa 1 – Combo x2","S/72","Pagado"]].map(([n,p,s])=>(
          <div key={n} className="flex items-center justify-between py-1.5 border-b border-slate-100/60 last:border-0">
            <span className="text-[10px] text-slate-600 font-medium">{n}</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold text-slate-800">{p}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${s==="Pagado"?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-amber-50 text-amber-700 border border-amber-100"}`}>{s}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PreviewEcommerce = ({ color }: PreviewProps) => (
  <div className="h-full flex flex-col p-4 gap-3 text-slate-800" style={{ background: "#FFFFFF" }}>
    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
      <span className="text-[12px] font-black text-slate-800 font-display">Nova Store</span>
      <div className="flex gap-1.5">
        {["Inicio","Colecciones"].map((l,i)=>(
          <div key={l} className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${i===0?"bg-purple-600/10 border border-purple-200/30 text-purple-700":"text-slate-500"}`}>{l}</div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 flex-1">
      {[{n:"Vestido Premium",p:"S/189",b:"Nuevo"},{n:"Bolso de Lujo",p:"S/245",b:"-20%"},{n:"Accesorio Gold",p:"S/89",b:"Top"}].map(item=>(
        <div key={item.n} className="rounded-xl overflow-hidden border border-slate-100 bg-white flex flex-col">
          <div className="aspect-square flex items-center justify-center relative flex-1" style={{background:"linear-gradient(135deg,rgba(139,92,246,0.06),rgba(236,72,153,0.04))"}}>
            <span className="text-xl">🛍️</span>
            <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-full text-[8px] font-extrabold text-white bg-purple-600">{item.b}</div>
          </div>
          <div className="p-2 bg-slate-50/50 border-t border-slate-100">
            <div className="text-[9px] text-slate-600 font-bold truncate">{item.n}</div>
            <div className="text-[11px] font-black text-slate-800 mt-0.5">{item.p}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PreviewERP = ({ color }: PreviewProps) => (
  <div className="h-full flex flex-col p-4 gap-3 text-slate-800" style={{ background: "#FFFFFF" }}>
    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
      <span className="text-[12px] font-black text-slate-800 font-display">Apex ERP</span>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[10px] font-bold bg-cyan-50 border border-cyan-100 text-cyan-700">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />En vivo
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {[["S/2.4M","Facturación anual","#0D9488"],["98.2%","Eficiencia","#059669"],["1,284","Clientes activos","#4F46E5"],["47","Almacenes","#D97706"]].map(([v,l,c])=>(
        <div key={l} className="rounded-xl p-2 border border-slate-100 bg-slate-50/30">
          <div className="text-[8px] text-slate-500 font-semibold mb-0.5">{l}</div>
          <div className="text-[14px] font-black" style={{color:c as string,fontFamily:"'Outfit',sans-serif"}}>{v}</div>
        </div>
      ))}
    </div>
    <div className="flex-1 rounded-xl p-3 border border-slate-100 flex flex-col gap-2 bg-slate-50/10">
      <div className="text-[10px] text-slate-700 font-bold">Rendimiento por área</div>
      {[["Ventas",87],["Operaciones",92],["Logística",74]].map(([d,p])=>(
        <div key={d} className="flex items-center gap-2">
          <span className="text-[10px] text-slate-600 font-medium w-20">{d}</span>
          <div className="flex-1 h-1.5 rounded-full bg-slate-100">
            <div className="h-full rounded-full" style={{width:`${p}%`,background:"linear-gradient(90deg,#0D9488,#4F46E5)"}} />
          </div>
          <span className="text-[10px] text-slate-700 font-bold w-8 text-right">{p}%</span>
        </div>
      ))}
    </div>
  </div>
);

const PreviewLanding = ({ color }: PreviewProps) => (
  <div className="h-full flex flex-col gap-3 p-4 text-slate-800" style={{ background: "#FFFFFF" }}>
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 rounded-xl p-4 border border-amber-500/10 bg-amber-500/[0.02]">
      <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-xl shadow-sm">🏠</div>
      <div className="text-[12px] font-black text-slate-800">Departamentos en Miraflores</div>
      <div className="text-[10px] text-slate-500 font-medium">Desde S/280,000 · Entrega inmediata</div>
      <div className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-white shadow-md bg-gradient-to-r from-amber-500 to-amber-600">
        Solicitar información →
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[["48","Leads/mes"],["12%","Conversión"],["S/290K","Ticket prom."]].map(([v,l])=>(
        <div key={l} className="rounded-xl p-2 text-center border border-slate-100 bg-slate-50/30">
          <div className="text-[13px] font-black text-amber-600" style={{fontFamily:"'Outfit',sans-serif"}}>{v}</div>
          <div className="text-[8px] text-slate-500 font-semibold mt-0.5">{l}</div>
        </div>
      ))}
    </div>
  </div>
);

const previews = {
  pos: PreviewPOS,
  ecommerce: PreviewEcommerce,
  erp: PreviewERP,
  landing: PreviewLanding,
} as const;

export default function Portfolio() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const p = projects[active];
  const PreviewComponent = previews[p.preview];

  return (
    <section id="portafolio" ref={ref} className="section relative overflow-hidden noise-overlay" style={{ background: "var(--bg)" }}>
      <div className="glow-orb glow-indigo" style={{ width: 600, height: 600, bottom: -100, left: -100, opacity: 0.12 }} />

      <div className="container relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--primary-soft)] text-[12px] text-[var(--primary)] font-bold uppercase tracking-wider mb-6">
            <BarChart3 className="w-3.5 h-3.5 text-[#B48A1D]" />
            Casos de Éxito
          </span>
          <h2 className="font-display font-black text-[var(--text)] leading-[1.1] mb-5 tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
            Interfaces premium que
            <br />
            <span className="text-gradient-gold">generan resultados reales</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[17px] leading-relaxed">
            Cada proyecto es una solución real diseñada para el negocio de nuestros clientes en Perú.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {projects.map((proj, i) => (
            <button
              key={proj.id}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 border cursor-pointer"
              style={
                active === i
                  ? { background: `${proj.color}15`, color: proj.textColor, borderColor: `${proj.color}50`, boxShadow: `0 4px 12px ${proj.color}15` }
                  : { background: "rgba(15, 23, 42, 0.03)", color: "var(--text-light)", borderColor: "rgba(15, 23, 42, 0.06)" }
              }
            >
              {proj.name}
            </button>
          ))}
        </motion.div>

        {/* Project display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Info */}
            <div className="flex flex-col gap-6">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold w-fit"
                style={{ background: `${p.color}15`, color: p.textColor, border: `1px solid ${p.color}35` }}
              >
                {React.createElement(p.icon, { className: "w-3.5 h-3.5" })}
                {p.category}
              </div>
              <h3 className="font-display font-black text-[var(--text)] leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                {p.name}
              </h3>
              <p className="text-[var(--text-muted)] text-[16px] leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-3.5 py-1.5 text-[12px] font-bold rounded-xl"
                    style={{ background: `${p.color}10`, color: p.textColor, border: `1px solid ${p.color}25` }}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://wa.me/51916175738?text=Hola,%20me%20interesa%20un%20proyecto%20similar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-bold transition-all duration-200 w-fit hover:translate-x-1"
                style={{ color: p.textColor }}
              >
                Quiero algo así para mi negocio
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Preview */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                height: 340,
                borderColor: `${p.color}25`,
                boxShadow: `0 10px 40px rgba(15, 23, 42, 0.08), 0 0 40px ${p.color}12`,
              }}
            >
              <PreviewComponent color={p.color} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
