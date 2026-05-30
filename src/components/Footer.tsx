const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Páginas web",
  "Ecommerce",
  "Sistemas POS",
  "Software a medida",
  "Automatización",
  "Diseño UI/UX",
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-16 relative overflow-hidden noise-overlay">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div>
            {/* ── Official Logo ── */}
            <div className="mb-5 group">
              <img
                src="/logo-transparent.png"
                alt="Leon Gutierrez Web Studio Logo"
                className="h-14 sm:h-16 w-auto shrink-0 transition-all duration-300 group-hover:scale-[1.03] filter drop-shadow-[0_2px_15px_rgba(139,92,246,0.18)] select-none pointer-events-none"
              />
            </div>
            <p className="text-[13.5px] text-[var(--text-muted)] leading-relaxed max-w-xs mb-5">
              Desarrollo de páginas web y software a medida para empresas en crecimiento.
              Garantizamos velocidad, conversión y soporte técnico real.
            </p>
            <a
              href="https://wa.me/51916175738"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] text-[#8B5CF6] font-bold hover:text-[var(--text)] transition-colors"
            >
              +51 916 175 738
            </a>
          </div>

          <div>
            <h4 className="text-[12px] font-bold text-[var(--text)] uppercase tracking-widest mb-4">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13.5px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-bold text-[var(--text)] uppercase tracking-widest mb-4">Servicios</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-[13.5px] text-[var(--text-muted)]">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border-soft)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[var(--text-light)] font-medium">
            © {new Date().getFullYear()} Leon Gutierrez Studio · Lima, Perú · Hecho con orgullo en el Perú
          </p>
          <a
            href="mailto:saulalexleongutierrez@gmail.com"
            className="text-[12.5px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            saulalexleongutierrez@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
