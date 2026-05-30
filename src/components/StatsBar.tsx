const stats = [
  { value: "100%", label: "Precios transparentes", desc: "Sabes cuánto pagas desde el inicio" },
  { value: "24h", label: "Tiempo de respuesta", desc: "Te contestamos el mismo día" },
  { value: "1 a 1", label: "Atención directa", desc: "Hablas con quien desarrolla tu proyecto" },
  { value: "Perú", label: "Hecho en Lima", desc: "Entendemos tu mercado y tus clientes" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-[var(--border-soft)] bg-[var(--bg-muted)]/60 backdrop-blur-md py-12 relative overflow-hidden noise-overlay">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left group">
              <div className="font-display font-black text-[32px] text-gradient-gold mb-1.5 transition-transform duration-300 group-hover:scale-105 inline-block">
                {s.value}
              </div>
              <div className="font-bold text-[14px] text-[var(--text)] mb-1 tracking-wide">{s.label}</div>
              <div className="text-[12px] text-[var(--text-muted)] leading-snug font-medium">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
