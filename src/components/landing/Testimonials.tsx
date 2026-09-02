import { Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    name: "Rafaela M.",
    role: "",
    text: "Nunca fui tão bem atendida. Gustavo entendeu minha rotina e montou algo que consigo seguir de verdade. Em 4 meses ganhei massa e desempenho.",
    initials: "RM",
  },
  {
    name: "Carlos H.",
    role: "",
    text: "Já tinha tentado várias dietas. Com o Gustavo, entendi como comer bem sem sofrer. Perdi 11kg e mantive por mais de um ano.",
    initials: "CH",
  },
  {
    name: "Juliana P.",
    role: "",
    text: "O suporte no WhatsApp faz toda diferença. Ajustes rápidos, orientação em provas, cardápio saboroso. Meu tempo de prova caiu 8 minutos.",
    initials: "JP",
  },
  {
    name: "Diego S.",
    role: "",
    text: "Profissional atento aos detalhes. Explicou tudo, me mostrou exames, ajustou treino e alimentação. Hipertrofia veio junto com saúde.",
    initials: "DS",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Depoimentos"
          title={
            <>
              O que dizem quem já vive o{" "}
              <span className="text-primary">método na prática.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {ITEMS.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl bg-background border border-border/70 p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-foreground/90 leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
