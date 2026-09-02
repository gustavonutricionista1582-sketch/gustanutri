import { ClipboardList, Salad, MessagesSquare, TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { whatsappUrl } from "@/lib/whatsapp";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Avaliação completa",
    text: "Anamnese detalhada, histórico clínico, rotina, treinos e exames\u00A0 para entender exatamente onde você está.",
  },
  {
    icon: Salad,
    title: "Plano alimentar personalizado",
    text: "Um cardápio construído para o seu objetivo com praticidade e alimentos que você gosta em horários que cabem na sua rotina real.",
  },
  {
    icon: MessagesSquare,
    title: "Acompanhamento próximo",
    text: "Suporte contínuo por WhatsApp, ajustes semanais e retornos programados para manter você sempre no caminho certo.",
  },
  {
    icon: TrendingUp,
    title: "Resultados consistentes",
    text: "Mudanças reais no corpo, no desempenho e na sua relação com a comida — para durar muito além do plano.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Meu método"
          title={
            <>
              4 etapas para transformar sua nutrição{" "}
              <span className="text-primary">de forma definitiva.</span>
            </>
          }
          description="Um processo claro, estruturado e testado com dezenas de pacientes — do primeiro contato aos resultados que se mantêm."
        />

        <div className="mt-16 relative">
          {/* connecting line desktop */}
          <div className="hidden lg:block absolute top-14 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <ol className="grid gap-6 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="relative rounded-2xl bg-background border border-border/70 p-7 shadow-[var(--shadow-card)] hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <span className="text-5xl font-extrabold text-primary/10 leading-none">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 hover:-translate-y-0.5 transition-all"
          >
            Começar minha jornada
          </a>
        </div>
      </div>
    </section>
  );
}
