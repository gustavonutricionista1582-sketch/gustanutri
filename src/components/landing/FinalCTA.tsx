import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground px-6 py-16 md:px-16 md:py-24 shadow-[var(--shadow-glow)]">
          {/* decorative */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.06]"
              viewBox="0 0 400 400"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">
              Pronto para começar?
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-balance">
              Sua próxima versão começa com uma decisão.
            </h2>
            <p className="mt-5 text-base md:text-lg text-primary-foreground/85 leading-relaxed">
              Agende sua consulta agora pelo WhatsApp e receba um plano
              nutricional feito para o seu corpo, seus objetivos e sua rotina.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 group inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-base font-bold text-primary shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all"
            >
              Agendar minha consulta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-5 text-xs text-primary-foreground/70">
              Resposta rápida • Atendimento em Caucaia/CE e online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
