import {
  ClipboardCheck,
  Trophy,
  Flame,
  MessageCircle,
  HeartHandshake,
  Target,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    icon: ClipboardCheck,
    title: "Plano alimentar personalizado",
    text: "Cardápio único, montado a partir dos seus exames, rotina, preferências e objetivos.",
  },
  {
    icon: Trophy,
    title: "Nutrição esportiva de alta performance",
    text: "Estratégias específicas para pré, durante e pós-treino conforme sua modalidade.",
  },
  {
    icon: Flame,
    title: "Emagrecimento sustentável",
    text: "Sem restrições impossíveis. Uma abordagem que respeita seu metabolismo e seu prazer.",
  },
  {
    icon: MessageCircle,
    title: "Suporte próximo por WhatsApp",
    text: "Você não fica sozinho entre uma consulta e outra — ajustes rápidos sempre que precisar.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Escuta ativa, acolhimento e um plano que respeita quem você é, não um paciente qualquer.",
  },
  {
    icon: Target,
    title: "Estratégias individualizadas",
    text: "Cada corpo é único. Cada plano também. Nada de fórmulas prontas ou dietas de internet.",
  },
];

export function Differentials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Diferenciais"
          title={
            <>
              O que torna o atendimento{" "}
              <span className="text-primary">realmente diferente.</span>
            </>
          }
          description="Um cuidado profissional, próximo e estratégico — do primeiro contato até a manutenção do seu resultado."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-background p-8 border border-border/70 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/[0.04] transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
