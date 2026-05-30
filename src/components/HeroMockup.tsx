"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, ShoppingCart, BarChart3, ArrowUpRight, Activity, Crown } from "lucide-react";

const floatingKpis = [
  { icon: DollarSign,   label: "Ventas Totales",  value: "S/ 142,580", change: "+23.5%", color: "#D4AF37", glow: "shadow-amber-500/10 border-amber-500/20" },
  { icon: Users,        label: "Clientes",        value: "312",        change: "+11.3%", color: "#0EA5E9", glow: "shadow-sky-500/10 border-sky-500/20" },
  { icon: ShoppingCart, label: "Pedidos",         value: "1,246",      change: "+18.6%", color: "#EC4899", glow: "shadow-pink-500/10 border-pink-500/20" },
];

const bars = [38, 52, 44, 68, 58, 80, 66, 88, 74, 84, 92, 100];

const topProducts = [
  { name: "Producto Premium", sales: 284, rev: "S/ 14,280" },
  { name: "Producto Pro", sales: 234, rev: "S/ 8,360" },
];

// Floating UI badge component with Framer Motion
function FloatingBadge({ children, delay, className }: { children: React.ReactNode, delay: number, className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.65, type: "spring", stiffness: 90 }}
      className={`absolute z-30 bg-slate-950/90 backdrop-blur-xl border border-purple-500/25 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-300 shadow-2xl shadow-purple-500/5 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function HeroMockup() {
  return (
    <div className="relative select-none">

      {/* Ambient glowing halogen behind mockup */}
      <div className="absolute -inset-8 rounded-3xl pointer-events-none -z-10"
        style={{ 
          background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.25) 0%, rgba(236, 72, 153, 0.1) 40%, rgba(14, 165, 233, 0.05) 70%, transparent 100%)", 
          filter: "blur(50px)" 
        }} 
      />

      {/* Floating KPI chips — hidden on small screens */}
      <div className="absolute -top-6 left-6 right-6 hidden md:flex justify-between z-30 gap-4">
        {floatingKpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.5, ease: "easeOut" }}
            className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-xl border bg-slate-950/90 backdrop-blur-xl shadow-2xl ${k.glow} float-a`}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
              style={{ background: `${k.color}15`, borderColor: `${k.color}30` }}
            >
              <k.icon className="w-4.5 h-4.5" style={{ color: k.color }} />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{k.label}</div>
              <div className="text-[15px] font-black text-white leading-none mt-0.5" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                {k.value}
              </div>
            </div>
            <div className="ml-auto flex items-center gap-0.5 text-[11px] font-black text-emerald-400">
              <ArrowUpRight className="w-3.5 h-3.5" />
              {k.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Main laptop frame ── */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl overflow-hidden mt-6 sm:mt-10 float-b border border-purple-500/20 shadow-[0_40px_100px_rgba(0,0,0,0.8),_inset_0_1px_0_rgba(255,255,255,0.05)]"
      >
        {/* Browser bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 bg-[#0C081F] border-b border-purple-500/10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 bg-slate-950/50 border border-purple-500/5 rounded-md px-3 py-1 text-[10px] text-slate-500 font-mono mx-4 text-center">
            pos.leongutierrez.studio/dashboard
          </div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <Activity className="w-3 h-3 animate-pulse" />
            En vivo
          </div>
        </div>

        {/* App Dashboard */}
        <div className="flex" style={{ height: "clamp(300px, 50vw, 420px)", background: "#05020E" }}>

          {/* Sidebar */}
          <div className="w-44 shrink-0 p-4 flex flex-col gap-1.5 bg-[#080514] border-r border-purple-500/10">
            <div className="flex items-center gap-2 px-2 py-1.5 mb-4">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <BarChart3 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-[11px] font-black text-white uppercase tracking-wider font-display">LG STUDIO</span>
            </div>
            {[
              { e: "▣", l: "Dashboard", a: true },
              { e: "↗", l: "Ventas" },
              { e: "◫", l: "Productos" },
              { e: "☰", l: "Inventario" },
              { e: "⊕", l: "Clientes" },
              { e: "◎", l: "Reportes" }
            ].map(item => (
              <div 
                key={item.l} 
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[11px] font-bold transition-all ${
                  item.a 
                    ? "text-purple-300 border border-purple-500/20 bg-purple-500/10" 
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
                }`}
              >
                <span className="text-sm font-normal">{item.e}</span>
                {item.l}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0 p-5 flex flex-col gap-4 overflow-hidden relative">
            
            {/* Golden Crown overlay in top right from the flyer */}
            <div className="absolute top-4 right-4 text-[#D4AF37] flex items-center gap-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full shadow-lg">
              <Crown className="w-3.5 h-3.5 fill-current animate-bounce" />
              <span className="text-[9px] font-black tracking-widest uppercase">Premium</span>
            </div>

            {/* Header */}
            <div>
              <div className="text-[13px] font-extrabold text-white font-display">Dashboard Ejecutivo</div>
              <div className="text-[9px] text-slate-500 uppercase tracking-widest">Leon Gutierrez POS Pro</div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "Ventas Totales",  v: "S/ 142,580", pct: "+23.5%", c: "#D4AF37" },
                { l: "Clientes",        v: "312",        pct: "+11.3%", c: "#0EA5E9" },
                { l: "Pedidos",         v: "1,246",      pct: "+18.6%", c: "#EC4899" },
              ].map(k => (
                <div 
                  key={k.l} 
                  className="rounded-xl p-3.5 border border-purple-500/5 bg-white/[0.015]"
                >
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">{k.l}</div>
                  <div 
                    className="text-[16px] font-black leading-none mb-1 font-display" 
                    style={{ color: k.c }}
                  >
                    {k.v}
                  </div>
                  <div className="flex items-center gap-0.5 text-[9.5px] text-emerald-400 font-extrabold">
                    <ArrowUpRight className="w-3 h-3" />
                    {k.pct}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div className="flex gap-4 flex-1 min-h-0">

              {/* Bar chart */}
              <div className="flex-1 rounded-xl p-4 flex flex-col border border-purple-500/5 bg-white/[0.01]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-300 font-display">Ventas Semanales</span>
                  <div className="flex gap-2.5 text-[8.5px] font-bold text-slate-500">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />POS</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />Web</span>
                  </div>
                </div>
                <div className="flex items-end gap-1.5 flex-1 h-full">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.8 + i * 0.04, duration: 0.4, ease: "easeOut" }}
                      className="flex-1 rounded-t origin-bottom"
                      style={{
                        height: `${h}%`,
                        background: i >= bars.length - 2
                          ? "linear-gradient(180deg, #8B5CF6 0%, #EC4899 100%)"
                          : "rgba(139, 92, 246, 0.25)",
                        boxShadow: i >= bars.length - 2 ? "0 0 12px rgba(236, 72, 153, 0.4)" : "none"
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Top products */}
              <div className="w-52 shrink-0 rounded-xl p-4 flex flex-col border border-purple-500/5 bg-white/[0.01]">
                <div className="text-[11px] font-black uppercase tracking-wider text-slate-300 mb-2 font-display">Productos Top</div>
                
                {/* Mini donut SVG in flyer colors */}
                <div className="flex items-center justify-center my-1.5">
                  <div className="relative">
                    <svg width="68" height="68" viewBox="0 0 72 72">
                      {[
                        { pct: 60, color: "#8B5CF6", dash: 113, offset: 0 },
                        { pct: 25, color: "#EC4899", dash: 47, offset: -113 },
                        { pct: 15, color: "#D4AF37", dash: 28, offset: -160 },
                      ].map((s, i) => (
                        <circle 
                          key={i} 
                          cx="36" 
                          cy="36" 
                          r="28" 
                          fill="none" 
                          stroke={s.color} 
                          strokeWidth="8"
                          strokeDasharray={`${s.dash} 188`} 
                          strokeDashoffset={s.offset}
                          style={{ transform: "rotate(-90deg)", transformOrigin: "36px 36px" }}
                        />
                      ))}
                      <text x="36" y="40" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="900" fontFamily="Outfit">
                        S/142K
                      </text>
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mb-3">
                  {[["#8B5CF6", "POS", "60%"], ["#EC4899", "Web", "25%"], ["#D4AF37", "Deli", "15%"]].map(([c, l, p]) => (
                    <div key={l} className="flex items-center justify-between text-[9px] font-bold">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
                        <span className="text-slate-400">{l}</span>
                      </div>
                      <span className="text-slate-200">{p}</span>
                    </div>
                  ))}
                </div>

                <div className="text-[9.5px] font-black uppercase tracking-wider text-slate-400 mb-1.5 border-t border-purple-500/5 pt-2">Ventas</div>
                {topProducts.map((p, i) => (
                  <div key={i} className="flex items-center justify-between py-1 border-b border-white/[0.02] last:border-0">
                    <div>
                      <div className="text-[9px] text-slate-300 font-extrabold">{p.name}</div>
                      <div className="text-[8px] text-slate-500">{p.sales} órdenes</div>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-400">{p.rev}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Mobile phone mockup (bottom right) ── */}
      <motion.div
        initial={{ opacity: 0, x: 25, y: 25 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
        className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-10 w-32 sm:w-40 rounded-2xl overflow-hidden shadow-2xl z-30 float-a hidden sm:block border border-pink-500/30 bg-[#06030E]"
        style={{
          animationDelay: "1s",
          boxShadow: "0 20px 60px rgba(0,0,0,0.9), 0 0 30px rgba(236,72,153,0.15)"
        }}
      >
        <div className="h-2 flex items-center justify-center bg-[#0C081F] border-b border-purple-500/10">
          <div className="w-8 h-1 rounded-full bg-white/10" />
        </div>
        <div className="p-3 flex flex-col gap-2.5">
          <div className="text-[9px] font-black text-white uppercase tracking-wider font-display">Resumen Diario</div>
          {[
            { l: "Pedidos", v: "1,246", c: "#EC4899" },
            { l: "Ingresos", v: "S/ 14,280", c: "#D4AF37" },
            { l: "Clientes", v: "312", c: "#0EA5E9" }
          ].map(k => (
            <div 
              key={k.l} 
              className="rounded-lg p-2 border border-purple-500/5 bg-white/[0.015]"
            >
              <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">{k.l}</div>
              <div 
                className="text-[12.5px] font-black leading-none mt-0.5 font-display" 
                style={{ color: k.c }}
              >
                {k.v}
              </div>
            </div>
          ))}
          <div className="rounded-lg overflow-hidden border border-purple-500/10 bg-purple-500/5" style={{ height: 40 }}>
            <svg viewBox="0 0 140 40" className="w-full h-full">
              <polyline
                points="0,35 20,28 40,30 60,18 80,22 100,12 120,8 140,4"
                fill="none" stroke="#EC4899" strokeWidth="2"
              />
              <polyline
                points="0,35 20,28 40,30 60,18 80,22 100,12 120,8 140,4 140,40 0,40"
                fill="url(#sparkGrad)" stroke="none"
              />
              <defs>
                <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="h-4 flex items-center justify-center bg-[#0C081F] border-t border-purple-500/10">
          <div className="w-8 h-1 rounded-full bg-white/15" />
        </div>
      </motion.div>

      {/* ── Floating UI badges from user code ── */}
      <FloatingBadge delay={1.1} className="-top-4 left-8 sm:left-16 hidden lg:block">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          <span>Proyecto entregado</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.3} className="-top-4 right-8 sm:right-16 hidden lg:block">
        <div className="flex items-center gap-2">
          <span className="text-[#D4AF37] font-black font-display">+143%</span>
          <span>ventas del cliente</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.5} className="-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap hidden lg:block">
        <div className="flex items-center gap-2 text-[10px] tracking-wide font-extrabold uppercase">
          <span>React</span>
          <span className="text-purple-500/30">·</span>
          <span>Next.js</span>
          <span className="text-purple-500/30">·</span>
          <span>Node.js</span>
          <span className="text-purple-500/30">·</span>
          <span>Cloud</span>
        </div>
      </FloatingBadge>

    </div>
  );
}
