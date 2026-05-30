import { MessageCircle, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contacto" className="section bg-[var(--bg)] noise-overlay border-t border-[var(--border-soft)]">
      
      {/* Layered glowing ambient orbs */}
      <div className="glow-orb glow-indigo w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 -z-10" />
      <div className="glow-orb glow-gold w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 -z-10" />

      <div className="container relative z-10">
        <div className="card max-w-4xl mx-auto p-8 sm:p-14 relative overflow-hidden text-center border-[var(--border)] shadow-2xl backdrop-blur-xl">
          
          {/* Subtle top reflection light */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.02] to-transparent pointer-events-none" />

          <p className="section-label mb-4">
            <span className="text-[#D4AF37]">★</span> Contacto
          </p>
          <h2 className="font-display font-black text-[var(--text)] text-[28px] sm:text-[38px] leading-tight mb-4 max-w-xl mx-auto tracking-tight">
            ¿Listo para construir el software que <span className="text-gradient-gold">impulse tu negocio?</span>
          </h2>
          <p className="text-[14.5px] text-[var(--text-muted)] mb-10 max-w-lg mx-auto leading-relaxed">
            Cuéntanos tu proyecto sin compromiso. Te respondemos el mismo día con un diagnóstico claro, alcance detallado y cotización transparente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto relative z-10">
            <a
              href="https://wa.me/51916175738?text=Hola,%20quiero%20cotizar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto py-3.5 px-8 flex items-center justify-center gap-2"
              style={{ borderRadius: "9999px" }}
            >
              <MessageCircle className="w-4.5 h-4.5 text-white" />
              WhatsApp Directo
            </a>
            <a
              href="mailto:saulalexleongutierrez@gmail.com"
              className="btn-secondary w-full sm:w-auto py-3.5 px-8 flex items-center justify-center gap-2 border-[var(--border)] hover:border-purple-500/30 cursor-pointer"
              style={{ borderRadius: "9999px" }}
            >
              <Mail className="w-4.5 h-4.5 text-[var(--text-light)]" />
              saulalexleongutierrez@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-[12px] font-bold text-[var(--text-muted)] tracking-wide uppercase">
            <span>✓ DIAGNÓSTICO GRATUITO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--border)]" />
            <span>✓ SIN COSTOS OCULTOS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--border)]" />
            <span>✓ SOPORTE INCLUIDO</span>
          </div>
        </div>
      </div>
    </section>
  );
}
