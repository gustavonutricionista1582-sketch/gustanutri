import {
  Frown,
  Utensils,
  Dumbbell,
  Activity,
  Repeat,
  Clock,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    icon: Frown,
    title: "Você tenta de tudo, mas o peso não muda",
    text: "Dietas restritivas, jejuns extremos, planilhas aleatórias — nada dá o resultado que você merece.",
  },
  {
    icon: Dumbbell,
    title: "Treina forte, mas não vê hipertrofia",
    text: "Sem uma nutrição alinhada ao treino, o esforço na academia se perde e o corpo não responde.",
  },
  {
    icon: Utensils,
    title: "Está cansado de comer sem prazer",
    text: "Planos genéricos, pouca variedade e nada saboroso. Comer bem virou uma obrigação chata.",
  },
  {
    icon: Activity,
    title: "Falta energia para treinar e trabalhar",
    text: "Fadiga constante, baixa performance e recuperação lenta comprometendo seu dia a dia.",
  },
  {
    icon: Repeat,
    title: "Já perdeu peso, mas recuperou tudo",
    text: "Efeito sanfona, ansiedade e compulsão fazem o resultado durar apenas algumas semanas.",
  },
  {
    icon: Clock,
    title: "Sua rotina corrida não deixa espaço",
    text: "Sem tempo para planejar refeições, você acaba comendo mal e sabotando seus objetivos.",
  },
];

export function Problems() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-x">
        <SectionHeader
          eyebrow="Você se identifica?"
          title={
            <>
              Se algum desses cenários é o seu,{" "}
              <span className="text-primary">está no lugar certo.</span>
            </>
          }
          description="Antes de mudar o seu corpo, é preciso entender por que os planos anteriores não funcionaram. É daí que a gente começa."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group relative rounded-2xl bg-background p-7 border border-border/70 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
