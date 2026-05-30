import { MessageSquare, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Conversamos",
    desc: "Nos cuentas qué necesitas por WhatsApp o videollamada. Sin formularios largos ni burocracia.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Te damos propuesta clara",
    desc: "Recibes alcance, plazos y precio fijo. Sin costos ocultos ni sorpresas a mitad de proyecto.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Desarrollamos",
    desc: "Trabajamos en tu proyecto y te vamos mostrando avances. Puedes dar feedback en cada etapa.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Entregamos y acompañamos",
    desc: "Lanzamos tu web o sistema, te capacitamos y te damos soporte post-entrega incluido.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="section bg-[var(--bg)] noise-overlay border-y border-white/5">
      
      {/* Background radial glow */}
      <div className="glow-orb glow-indigo w-[400px] h-[400px] bottom-10 right-10 opacity-10 -z-10" />
      
      <div className="container">
        <div className="section-header center">
          <p className="section-label">
            <span className="text-[#D4AF37]">★</span> Cómo trabajamos
          </p>
          <h2 className="section-title">Simple, directo y <span className="text-gradient-purple">sin complicaciones</span></h2>
          <p className="section-desc">
            Así es el proceso desde que nos escribes hasta que tu proyecto está en línea.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative group">
                <div className="card h-full flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle top light */}
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <span className="font-display font-black text-[22px] text-gradient-gold">
                        {s.step}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-[17px] text-[var(--text)] mb-2 relative z-10">
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-[var(--text-muted)] leading-relaxed relative z-10">{s.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://wa.me/51916175738?text=Hola,%20quiero%20empezar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ borderRadius: "9999px" }}
          >
            Empezar mi proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
