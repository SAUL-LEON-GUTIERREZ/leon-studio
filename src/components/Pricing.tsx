"use client";

import { Check, Star, ArrowRight, Rocket, Globe, ShoppingCart, BarChart3, ShieldCheck, Flame, Award, HeartHandshake, Eye } from "lucide-react";

const plans = [
  {
    name: "LANDING PAGE",
    price: "500",
    desc: "Ideal para captar clientes y presentar tu negocio con impacto.",
    features: [
      "1 Sección",
      "Diseño moderno",
      "Entrega rápida"
    ],
    icon: Rocket,
    glowClass: "border-purple-500/40 shadow-purple-500/10 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    textClass: "text-[#C084FC]",
    btnClass: "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white hover:shadow-[0_8px_20px_rgba(124,58,237,0.4)]",
    bulletBg: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    name: "PÁGINA WEB CORPORATIVA",
    price: "1200",
    desc: "Presencia digital profesional con varias secciones y formulario.",
    features: [
      "Hasta 5 páginas",
      "Diseño profesional",
      "Formulario de contacto",
      "SEO básico"
    ],
    icon: Globe,
    popular: true,
    glowClass: "border-sky-500/50 shadow-sky-500/10 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] ring-2 ring-sky-500/20",
    textClass: "text-[#38BDF8]",
    btnClass: "bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] text-white hover:shadow-[0_8px_20px_rgba(14,165,233,0.4)]",
    bulletBg: "bg-sky-500/10 text-sky-400 border-sky-500/20"
  },
  {
    name: "TIENDA ONLINE E-COMMERCE",
    price: "1800",
    desc: "Vende tus productos las 24 horas con carrito y pasarela de pago.",
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Pasarela de pago",
      "Panel administrable"
    ],
    icon: ShoppingCart,
    glowClass: "border-pink-500/40 shadow-pink-500/10 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    textClass: "text-[#F472B6]",
    btnClass: "bg-gradient-to-r from-[#EC4899] to-[#D946EF] text-white hover:shadow-[0_8px_20px_rgba(236,72,153,0.4)]",
    bulletBg: "bg-pink-500/10 text-pink-400 border-pink-500/20"
  },
  {
    name: "SISTEMA POS Y SOFTWARE",
    price: "3000",
    desc: "Automatiza inventario, ventas y reportes en tiempo real.",
    features: [
      "Ventas e inventario",
      "Reportes en tiempo real",
      "Control de productos",
      "Multiusuarios"
    ],
    icon: BarChart3,
    glowClass: "border-amber-500/40 shadow-amber-500/10 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]",
    textClass: "text-[#FBBF24]",
    btnClass: "bg-gradient-to-r from-[#EAB308] to-[#D4AF37] text-slate-950 hover:shadow-[0_8px_20px_rgba(212,175,55,0.4)]",
    bulletBg: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  }
];

const flyerGuarantees = [
  {
    icon: Award,
    title: "DISEÑO PREMIUM",
    desc: "Experiencia de usuario única y profesional"
  },
  {
    icon: Eye,
    title: "OPTIMIZACIÓN SEO",
    desc: "Mejor posicionamiento en buscadores"
  },
  {
    icon: ShieldCheck,
    title: "SEGURIDAD",
    desc: "Protegemos tu información y la de tus clientes"
  },
  {
    icon: HeartHandshake,
    title: "SOPORTE CONTINUO",
    desc: "Te acompañamos en cada paso de tu proyecto"
  }
];

export default function Pricing() {
  return (
    <section id="precios" className="section bg-[var(--bg)] noise-overlay">
      
      {/* Cinematic radial lights */}
      <div className="glow-orb glow-indigo w-[600px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 opacity-20 -z-10" />
      
      <div className="container">
        
        {/* Header Block matching the flyer aesthetic */}
        <div className="section-header center mb-8">
          <p className="section-label">
            <span className="text-[#D4AF37]">★</span> Inversión Inteligente
          </p>
          
          {/* Animated Specials Banner from Flyer */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600/10 border border-red-500/30 text-[#FFF59D] text-[13px] font-black uppercase tracking-wider mb-6 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.15)]">
            <Flame className="w-5 h-5 text-red-500 fill-current shrink-0 animate-bounce" />
            ¡OFERTAS ESPECIALES!
          </div>

          <h2 className="section-title text-white">Planes flexibles, <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">inversión clara</span></h2>
          <p className="section-desc">
            Precios transparentes de referencia. Sin mensualidades ocultas, un único pago
            que incluye código de alta velocidad, optimización y soporte garantizado.
          </p>
        </div>

        {/* 4 Cards Grid mirroring the flyer cards exactly */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => {
            const ButtonIcon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`card flex flex-col relative group overflow-hidden transition-all duration-300 p-8 rounded-2xl bg-[#0C081F]/60 backdrop-blur-xl border ${plan.glowClass} hover:-translate-y-2`}
              >
                {/* Tech background pattern for pricing cards */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10">
                  <svg className="w-full h-full text-purple-500/[0.02]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                      <pattern id={`pricing-dots-${plan.name.replace(/\s+/g, "-")}`} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pricing-dots-${plan.name.replace(/\s+/g, "-")})`} />
                  </svg>
                </div>

                {/* Popular card badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-6 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white text-[10px] font-black shadow-lg shadow-sky-500/20 tracking-wider">
                    <Star className="w-3 h-3 fill-current text-white" />
                    MÁS SOLICITADO
                  </div>
                )}

                {/* Single Payment Guarantee Badge */}
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/5 text-slate-400 text-[9px] font-bold uppercase tracking-wider">
                  Pago Único
                </div>

                <h3 className="font-display font-black text-[15px] tracking-widest text-white mb-4 mt-2 uppercase">
                  {plan.name}
                </h3>

                <div className="flex items-end gap-1.5 mb-6">
                  <span className="text-[12px] text-slate-400 font-bold mb-1">Desde S/</span>
                  <span className={`font-display font-black text-[42px] leading-none tracking-tight ${plan.textClass}`}>
                    {plan.price}
                  </span>
                </div>

                <p className="text-[13px] text-slate-400 mb-6 leading-relaxed flex-1">{plan.desc}</p>

                {/* Feature checklist matching flyer features */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[13.5px] font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${plan.bulletBg}`}>
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="pt-[1px]">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/51916175738?text=Hola,%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl flex items-center justify-center gap-2 font-black text-[13.5px] uppercase tracking-wider shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.03] ${plan.btnClass}`}
                >
                  <ButtonIcon className="w-4.5 h-4.5 shrink-0" />
                  Cotizar este plan
                </a>
              </div>
            );
          })}
        </div>

        {/* ── Flyer Horizontal Guarantees Bar ── */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#080514]/80 border border-purple-500/10 shadow-xl mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {flyerGuarantees.map((g, i) => {
              const GuaranteeIcon = g.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#C084FC] flex items-center justify-center mb-3 shadow-inner shadow-purple-500/5 hover:scale-105 transition-transform duration-300">
                    <GuaranteeIcon className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="text-[11px] font-black text-white uppercase tracking-wider mb-1">
                    {g.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-normal max-w-[160px]">
                    {g.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-[14px] text-slate-400 font-medium">
          ¿Necesitas algo a medida?{" "}
          <a
            href="https://wa.me/51916175738?text=Hola,%20necesito%20una%20cotización%20personalizada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] font-black hover:underline inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
          >
            Escríbenos y diseñamos tu propuesta personalizada <ArrowRight className="w-4 h-4 inline" />
          </a>
        </p>
      </div>
    </section>
  );
}
