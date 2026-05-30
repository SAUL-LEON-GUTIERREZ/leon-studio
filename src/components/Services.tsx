"use client";

import {
  Globe, ShoppingCart, MonitorSmartphone, Layers, Zap, PenTool, ArrowRight, Check, Sparkles, PhoneCall
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas web",
    desc: "Landing pages y sitios corporativos rápidos, modernos y listos para captar clientes desde Google y WhatsApp.",
    includes: ["Diseño personalizado", "Mobile responsive", "SEO básico", "Formulario + WhatsApp"],
    badgeText: "Recomendado",
    badgeBg: "bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-950/20 dark:text-violet-400 dark:border-violet-900/30",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas online (Ecommerce)",
    desc: "Vende las 24 horas con catálogo, carrito, pagos con Yape/Mercado Pago y panel para gestionar pedidos.",
    includes: ["Catálogo de productos", "Checkout seguro", "Panel de pedidos", "Integración de pagos"],
    badgeText: "Alta Conversión",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30",
  },
  {
    icon: MonitorSmartphone,
    title: "Sistemas POS",
    desc: "Punto de venta en la nube con control de inventario, facturación y reportes para tu negocio físico.",
    includes: ["Ventas e inventario", "Facturación SUNAT", "Reportes en tiempo real", "Multi-sucursal"],
    badgeText: "SUNAT Homologado",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950/20 dark:text-sky-400 dark:border-sky-900/30",
  },
  {
    icon: Layers,
    title: "Software empresarial",
    desc: "ERP, CRM y sistemas internos hechos a tu medida para digitalizar procesos que hoy haces en Excel o papel.",
    includes: ["Análisis de tu operación", "Desarrollo a medida", "Panel administrativo", "Capacitación incluida"],
    badgeText: "Sistemas ERP/CRM",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30",
  },
  {
    icon: Zap,
    title: "Automatización",
    desc: "Conectamos WhatsApp, correos, formularios y herramientas para que dejes de hacer tareas repetitivas a mano.",
    includes: ["Flujos automatizados", "Integraciones API", "Notificaciones", "Ahorro de tiempo real"],
    badgeText: "AI & API",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-100 dark:bg-teal-950/20 dark:text-teal-400 dark:border-teal-900/30",
  },
  {
    icon: PenTool,
    title: "Diseño UI/UX",
    desc: "Interfaces claras y profesionales que transmiten confianza y facilitan que tus clientes compren o contacten.",
    includes: ["Wireframes", "Diseño visual", "Prototipo interactivo", "Guía de marca"],
    badgeText: "Figma Premium",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-900/30",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section bg-[var(--bg)] noise-overlay">
      
      {/* Background Glow */}
      <div className="glow-orb glow-indigo w-[500px] h-[500px] top-1/3 right-1/4 opacity-15 -z-10" />
      
      <div className="container">
        <div className="section-header center">
          <p className="section-label">
            <span className="text-[#D4AF37]">★</span> Especialidades
          </p>
          <h2 className="section-title">
            Todo lo que tu negocio necesita para <span className="text-gradient-purple">crecer online</span>
          </h2>
          <p className="section-desc">
            No usamos plantillas genéricas pesadas. Escribimos código a medida, limpio y veloz,
            enfocado 100% en la conversión de tus clientes en Perú.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="card flex flex-col group relative overflow-hidden transition-all duration-300 p-8 rounded-2xl bg-white/80 border border-[var(--border)] shadow-[var(--shadow-sm)] hover:border-purple-500/30 hover:shadow-[0_20px_50px_rgba(124,58,237,0.08)] hover:-translate-y-2"
              >
                {/* Tech background dots visible on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10">
                  <svg className="w-full h-full text-purple-500/[0.02]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                      <pattern id={`dots-${s.title.replace(/\s+/g, "-")}`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.2" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#dots-${s.title.replace(/\s+/g, "-")})`} />
                  </svg>
                </div>

                {/* Subtle colorful spotlight beam on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-purple-500/[0.03] via-transparent to-amber-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-6">
                  {/* Animated dual-ring icon container */}
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    {/* Ring outer pulse/glow */}
                    <div className="absolute inset-0 rounded-xl bg-purple-500/5 border border-purple-500/10 scale-100 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 opacity-80" />
                    
                    {/* Ring inner background */}
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-500/10 to-amber-500/10 border border-purple-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5 text-[#B48A1D] group-hover:text-[#4C1D95] transition-colors duration-300" />
                    </div>
                  </div>

                  {/* High conversion specialist badge */}
                  <span className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${s.badgeBg}`}>
                    {s.badgeText}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-[20px] text-[var(--text)] mb-3 leading-snug tracking-tight">
                  {s.title}
                </h3>
                
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-6 flex-1">
                  {s.desc}
                </p>

                {/* Custom checkmarks */}
                <ul className="space-y-3 mb-7">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] font-medium text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors duration-300">
                      <span className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-700 flex items-center justify-center shrink-0 border border-purple-500/15">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="pt-[1.5px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/51916175738?text=Hola,%20me%20interesa%20${encodeURIComponent(s.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-purple-500/20 bg-purple-500/5 text-[#4C1D95] font-bold text-[13px] hover:bg-[#4C1D95] hover:text-white hover:border-[#4C1D95] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_10px_20px_rgba(76,29,149,0.15)] group-hover:translate-y-0"
                >
                  Consultar por WhatsApp 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Premium Bento Banner */}
        <div className="mt-12 p-8 md:p-10 rounded-2xl bg-gradient-to-r from-[#2e1065] via-[#1e1b4b] to-[#0f172a] text-white relative overflow-hidden border border-purple-500/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 group">
          {/* Subtle gold spotlight in banner */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-amber-500/10 to-transparent rounded-full filter blur-[80px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full filter blur-[60px] pointer-events-none -z-10" />

          {/* Technology background patterns for banner */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10">
            <svg className="w-full h-full stroke-white" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="banner-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#banner-grid)" />
            </svg>
          </div>

          <div className="flex-1 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#FFF59D] text-[11px] font-bold uppercase tracking-wider mb-4 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Asesoría de Arquitectura 100% Gratis
            </div>
            
            <h3 className="font-display font-extrabold text-[24px] md:text-[28px] text-white leading-tight mb-3">
              ¿No sabes qué tecnología se adapta mejor a tu negocio?
            </h3>
            
            <p className="text-[14px] md:text-[15px] text-purple-200/90 leading-relaxed">
              Analizamos tus procesos actuales y te armamos una **hoja de ruta técnica** personalizada para digitalizar tu negocio en el Perú, sin compromiso y directamente por WhatsApp.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto items-center justify-center">
            <a
              href="https://wa.me/51916175738?text=Hola,%20me%20gustaría%20solicitar%20la%20asesoría%20de%20arquitectura%20gratuita%20y%20hoja%20de%20ruta%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full md:w-auto px-7 py-4 bg-gradient-to-r from-amber-500 to-[#D4AF37] text-slate-900 border-none hover:from-amber-400 hover:to-amber-300 font-extrabold text-[14px] shadow-[0_10px_30px_rgba(212,175,55,0.25)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 group/btn cursor-pointer transition-all duration-300 rounded-xl"
            >
              <PhoneCall className="w-4 h-4 text-slate-900 shrink-0" />
              Tener Asesoría Gratuita
              <ArrowRight className="w-4 h-4 text-slate-900 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
