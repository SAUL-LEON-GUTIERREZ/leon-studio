"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios", section: "servicios" },
  { label: "Portafolio", href: "#portafolio", section: "portafolio" },
  { label: "Cómo trabajamos", href: "#proceso", section: "proceso" },
  { label: "Precios", href: "#precios", section: "precios" },
  { label: "Contacto", href: "#contacto", section: "contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.section))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (href: string, section: string) => {
    setOpen(false);
    setActive(section);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-4 inset-x-4 z-50 max-w-[820px] mx-auto rounded-full transition-all duration-300 ${scrolled
            ? "bg-[rgba(10,6,27,0.78)] backdrop-blur-xl border border-[rgba(139,92,246,0.22)] shadow-[0_12px_40px_rgba(0,0,0,0.55),_0_0_20px_rgba(139,92,246,0.06)] py-1"
            : "bg-[rgba(10,6,27,0.48)] backdrop-blur-md border border-[rgba(139,92,246,0.12)] py-2"
          }`}
      >
        <div className="flex items-center w-full min-h-[40px] px-4 sm:px-5">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center shrink-0 mr-4 md:mr-6 lg:mr-8 group"
          >
            {/* ── Official Logo ── */}
            <img
              src="/logo-cropped.png"
              alt="Leon Gutierrez Web Studio Logo"
              className={`w-auto shrink-0 transition-all duration-300 group-hover:scale-[1.03] filter drop-shadow-[0_2px_15px_rgba(139,92,246,0.22)] hover:drop-shadow-[0_2px_25px_rgba(139,92,246,0.45)] select-none pointer-events-none ${scrolled
                  ? "h-[38px] sm:h-[42px] md:h-[45px] lg:h-[48px]"
                  : "h-[45px] sm:h-[48px] md:h-[52px] lg:h-[56px]"
                }`}
            />
          </a>

          <nav className="hidden md:flex items-center gap-1.5 shrink-0">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.href, l.section)}
                className={`nav-link font-semibold ${active === l.section ? "active" : ""}`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* ── CTA and Menu Trigger Container pushed to the right ── */}
          <div className="ml-auto flex items-center gap-3">
            <a
              href="https://wa.me/51916175738?text=Hola,%20quiero%20cotizar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[12px] font-semibold py-1.5 px-4 hidden sm:inline-flex bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#8B5CF6] hover:to-[#6D28D9] border border-purple-500/20 text-white rounded-full shadow-[0_2px_10px_rgba(124,58,237,0.15)] hover:shadow-[0_2px_15px_rgba(124,58,237,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              style={{ borderRadius: "9999px" }}
            >
              Cotizar gratis
            </a>

            <button
              className="md:hidden p-2 rounded-full text-slate-500 hover:text-[var(--text)] hover:bg-slate-200/20 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className={`fixed inset-x-4 z-40 bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border)] p-5 rounded-2xl md:hidden shadow-2xl flex flex-col gap-1.5 transition-all duration-300 ${scrolled ? "top-[74px] sm:top-[80px]" : "top-[90px] sm:top-[98px]"
            }`}
        >
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href, l.section)}
              className={`block w-full text-left px-4 py-3 text-[14px] font-semibold rounded-xl transition-all ${active === l.section
                  ? "bg-[var(--primary-soft)] text-[var(--primary)] border border-[var(--primary)]/15"
                  : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-slate-200/20"
                }`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://wa.me/51916175738?text=Hola,%20quiero%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center mt-3 py-3"
            style={{ borderRadius: "12px" }}
          >
            Cotizar gratis
          </a>
        </div>
      )}
    </>
  );
}

