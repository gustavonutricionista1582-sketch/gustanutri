import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import gustavoAsset from "@/assets/gustavo-hero.jpg.asset.json";
import { whatsappUrl } from "@/lib/whatsapp";

const BENEFITS = ["Emagrecimento", "Hipertrofia", "Performance", "Saúde"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-[100svh] md:min-h-[700px] lg:min-h-[780px] flex items-end md:items-center md:bg-foreground md:py-24 lg:py-28"
    >
      {/* Background photo for all viewports */}
      <img
        src={gustavoAsset.url}
        alt="Gustavo Souza, nutricionista esportivo"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center md:left-auto md:w-3/5 md:object-top"
        loading="eager"
      />

      {/* Mobile-only contrast overlays */}
      <div className="absolute inset-0 -z-10 md:hidden bg-[linear-gradient(to_bottom,transparent_0%,transparent_38%,color-mix(in_oklab,var(--foreground)_78%,transparent)_58%,var(--foreground)_92%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 md:hidden bg-[radial-gradient(ellipse_at_center,transparent_45%,color-mix(in_oklab,var(--foreground)_35%,transparent)_100%)]" />

      {/* Desktop-only contrast overlays */}
      <div className="absolute inset-0 -z-10 hidden md:block bg-[linear-gradient(to_right,var(--foreground)_0%,var(--foreground)_48%,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block bg-[radial-gradient(ellipse_at_left_top,color-mix(in_oklab,var(--foreground)_55%,transparent)_0%,transparent_55%)]" />

      {/* Content */}
      <div className="container-x relative z-10 pt-28 pb-14 w-full md:pt-0 md:pb-0">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground ring-1 ring-background/25 shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Nutrição Esportiva • Caucaia / CE
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-balance text-primary-foreground [text-shadow:0_2px_28px_rgba(0,0,0,0.7)] md:[text-shadow:none]">
            Nutrição personalizada para{" "}
            <span className="relative inline-block">
              <span className="relative z-10">RESULTADOS REAIS</span>
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-1 h-[10px] rounded-full bg-primary/85 -z-0"
              />
            </span>
            .
          </h1>

          <p className="mt-6 text-lg text-primary-foreground max-w-lg leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] md:[text-shadow:none] md:text-primary-foreground/90">
            Plano alimentar individualizado para emagrecer, ganhar massa
            muscular e melhorar sua performance sem dietas impossíveis.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3 max-w-md">
            {BENEFITS.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2.5 text-sm font-medium text-primary-foreground"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/25 ring-1 ring-primary/40 text-primary-foreground">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              Agendar minha consulta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background/10 backdrop-blur ring-1 ring-background/30 px-7 py-4 text-base font-semibold text-primary-foreground hover:bg-background/20 transition-colors"
            >
              Conhecer o método
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/85">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>CRN-6 • Nutrição Esportiva e Emagrecimento</span>
            </div>
            <div className="hidden sm:block h-1 w-1 rounded-full bg-primary-foreground/40" />
            <div>
              <span className="font-bold text-primary-foreground">+5 anos</span>{" "}
              atendendo atletas e pacientes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

