import { Award, GraduationCap, HeartPulse, Users } from "lucide-react";
import gustavoAsset from "@/assets/gustavo.jpg.asset.json";
import { whatsappUrl } from "@/lib/whatsapp";

const SPECIALTIES = [
  "Nutrição Esportiva",
  "Emagrecimento",
  "Hipertrofia",
  "Reeducação Alimentar",
  "Performance",
  "Saúde & Longevidade",
];

const HIGHLIGHTS = [
  { icon: GraduationCap, label: "Formação e especialização em Nutrição Esportiva" },
  { icon: Users, label: "Atendimento Online e Presencial em Caucaia/CE" },
  { icon: HeartPulse, label: "Foco em performance real, não em modismos" },
  { icon: Award, label: "Estratégias 100% individualizadas" },
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-surface">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative order-1 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tl from-primary/15 via-transparent to-transparent blur-2xl" />
            <div className="absolute -right-4 top-8 h-32 w-1 bg-primary rounded-full" />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-elegant)] ring-1 ring-border">
              <img
                src={gustavoAsset.url}
                alt="Gustavo Souza — retrato profissional"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="order-2">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-6 bg-primary" />
            Sobre Gustavo
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
            Nutrição séria, humana e feita para{" "}
            <span className="text-primary">o seu resultado.</span>
          </h2>

          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sou <strong className="text-foreground">Gustavo Souza</strong>,
              nutricionista esportivo em Caucaia/CE. Ajudo pessoas comuns e
              atletas a evoluírem através de uma nutrição inteligente,
              sustentável e alinhada à rotina real de cada um.
            </p>
            <p>
              Meu trabalho vai muito além de entregar um cardápio. Construo
              junto com você um processo de mudança que respeita seu histórico,
              seus objetivos e o seu tempo — sem promessas milagrosas.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {SPECIALTIES.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground/85"
              >
                {s}
              </span>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-start gap-3 rounded-xl bg-background border border-border/60 p-4"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" strokeWidth={2.4} />
                </span>
                <span className="text-sm font-medium text-foreground leading-snug">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 hover:-translate-y-0.5 transition-all"
          >
            Falar com Gustavo
          </a>
        </div>
      </div>
    </section>
  );
}
