"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingCart, DollarSign, Package, BarChart3, ArrowUpRight, Activity } from "lucide-react";

/* ── Data ── */
const kpis = [
  { icon: DollarSign, label: "Ingresos",     value: "S/142,580", change: "+23.5%", c: "#22d3ee" },
  { icon: ShoppingCart, label: "Ventas hoy", value: "284",       change: "+12.1%", c: "#6366f1" },
  { icon: Users,  label: "Clientes",         value: "1,847",     change: "+8.3%",  c: "#8b5cf6" },
  { icon: Package, label: "Productos",       value: "432",       change: "+5.7%",  c: "#f59e0b" },
];

const bars = [42, 58, 46, 72, 61, 83, 70, 90, 78, 88, 95, 100];

const orders = [
  { name: "Rest. Los Olivos",   amt: "S/1,240", status: "Completado", t: "2m" },
  { name: "Farmacia San Juan",  amt: "S/890",   status: "Procesando", t: "8m" },
  { name: "Boutique Miraflores",amt: "S/2,100", status: "Completado", t: "15m" },
  { name: "Tech Solutions SAC", amt: "S/3,500", status: "Pendiente",  t: "22m" },
];

const sideItems = [
  { e: "⬛", label: "Dashboard",    active: true },
  { e: "↗",  label: "Ventas" },
  { e: "☰",  label: "Inventario" },
  { e: "⊕",  label: "Clientes" },
  { e: "◎",  label: "Reportes" },
];

const statusStyle = (s: string) =>
  s === "Completado" ? "bg-emerald-500/15 text-emerald-400"
  : s === "Procesando" ? "bg-blue-500/15 text-blue-400"
  : "bg-amber-500/15 text-amber-400";

export default function DashboardMockup() {
  return (
    <div className="relative">

      {/* ── Big ambient glow behind mockup ── */}
      <div
        className="absolute -inset-10 rounded-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.10) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Browser chrome wrapper ── */}
      <div
        className="relative rounded-2xl overflow-hidden border border-white/[0.09] shadow-[0_40px_120px_rgba(0,0,0,0.7)] float-b"
        style={{ background: "rgba(6,6,16,0.95)" }}
      >

        {/* Browser bar */}
        <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.05]" style={{ background: "rgba(8,8,20,0.8)" }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-4 bg-white/[0.04] rounded-lg px-4 py-1.5 text-[11px] text-slate-500 font-mono tracking-wide">
            app.leongutierrez.studio/dashboard
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
            <Activity className="w-3.5 h-3.5" />
            En vivo
          </div>
        </div>

        {/* ── App body ── */}
        <div className="flex" style={{ height: 520 }}>

          {/* Sidebar */}
          <div
            className="w-52 shrink-0 border-r border-white/[0.04] p-4 flex-col gap-1 hidden sm:flex"
            style={{ background: "rgba(4,4,12,0.6)" }}
          >
            {/* App logo */}
            <div className="flex items-center gap-2.5 px-3 py-2 mb-4">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center">
                <BarChart3 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-[12px] font-bold text-white font-display">Leon POS Pro</span>
            </div>

            {sideItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[12px] font-medium transition-all cursor-pointer select-none ${
                  item.active
                    ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20"
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.04]"
                }`}
              >
                <span className="text-sm">{item.e}</span>
                {item.label}
              </div>
            ))}
          </div>

          {/* Main panel */}
          <div className="flex-1 min-w-0 p-5 flex flex-col gap-4 overflow-hidden">

            {/* Header row */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[13px] font-bold text-white font-display">Panel de Control</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Lunes, 26 Mayo · Lima, Perú</p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/15">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-400 font-semibold">Tiempo real</span>
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {kpis.map((k, i) => (
                <motion.div
                  key={k.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="rounded-xl p-3.5 border border-white/[0.05]"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-slate-500 font-medium tracking-wide">{k.label}</span>
                    <k.icon className="w-3.5 h-3.5" style={{ color: k.c }} />
                  </div>
                  <div className="text-[15px] font-bold text-white font-display">{k.value}</div>
                  <div className="flex items-center gap-1 mt-1.5">
                    <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] text-emerald-400 font-semibold">{k.change}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts row */}
            <div className="flex gap-3 flex-1 min-h-0">

              {/* Bar chart */}
              <div
                className="flex-1 rounded-xl p-4 flex flex-col border border-white/[0.05]"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[12px] font-semibold text-slate-300">Ventas mensuales</span>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +34.2%
                  </div>
                </div>
                {/* Bars */}
                <div className="flex items-end gap-1.5 flex-1 pb-2">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.9 + i * 0.04, duration: 0.5, ease: "easeOut" }}
                      className="flex-1 rounded-t-md origin-bottom"
                      style={{
                        height: `${h}%`,
                        background:
                          i === bars.length - 1
                            ? "linear-gradient(180deg,#6366f1,#8b5cf6)"
                            : i === bars.length - 2
                            ? "rgba(99,102,241,0.55)"
                            : "rgba(99,102,241,0.18)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between">
                  {["E","F","M","A","M","J","J","A","S","O","N","D"].map((m, i) => (
                    <span key={i} className="text-[9px] text-slate-600 flex-1 text-center">{m}</span>
                  ))}
                </div>
              </div>

              {/* Recent orders */}
              <div
                className="w-52 shrink-0 rounded-xl p-4 border border-white/[0.05] hidden lg:flex flex-col"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <span className="text-[12px] font-semibold text-slate-300 mb-3">Últimas ventas</span>
                <div className="flex flex-col gap-3">
                  {orders.map((o, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + i * 0.07 }}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10px] text-slate-300 font-medium truncate max-w-[95px]">{o.name}</span>
                        <span className="text-[10px] text-emerald-400 font-bold shrink-0 ml-1">{o.amt}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${statusStyle(o.status)}`}>
                          {o.status}
                        </span>
                        <span className="text-[9px] text-slate-600">hace {o.t}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating stat cards ── */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        className="absolute -left-6 top-1/3 -translate-y-1/2 hidden xl:block float"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="glass-strong rounded-2xl p-4 shadow-xl shadow-black/50 border border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-[11px] text-slate-500 font-medium">Crecimiento Q1</div>
              <div className="text-[20px] font-black text-white font-display leading-tight">+143%</div>
              <div className="text-[10px] text-emerald-400 font-semibold">vs. año anterior</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute -right-6 top-2/5 hidden xl:block float"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="glass-strong rounded-2xl p-4 shadow-xl shadow-black/50 border border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <div className="text-[11px] text-slate-500 font-medium">Clientes activos</div>
              <div className="text-[20px] font-black text-white font-display leading-tight">1,847</div>
              <div className="text-[10px] text-indigo-400 font-semibold">↑ 84 este mes</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none rounded-b-2xl"
        style={{ background: "linear-gradient(to top, #02020a, transparent)" }} />
    </div>
  );
}
