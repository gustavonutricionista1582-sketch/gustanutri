import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    q: "Como funciona o atendimento?",
    a: "A primeira consulta é uma avaliação completa: anamnese, exames, rotina e objetivos. Em seguida você recebe um plano alimentar personalizado e passa a contar com suporte contínuo até o próximo retorno.",
  },
  {
    q: "O atendimento é presencial ou online?",
    a: "Ambos. Atendo presencialmente em Caucaia/CE e também online, com a mesma qualidade e proximidade, para pacientes de qualquer lugar do Brasil.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "As primeiras mudanças de energia, sono e composição corporal costumam aparecer entre 4 e 6 semanas. Resultados consistentes são construídos ao longo do acompanhamento.",
  },
  {
    q: "Preciso levar exames?",
    a: "É recomendado, mas não é obrigatório. Exames recentes ajudam a montar um plano mais preciso e seguro. Caso não tenha, oriento quais exames solicitar.",
  },
  {
    q: "Posso continuar comendo o que gosto?",
    a: "Sim. O plano é feito considerando suas preferências, cultura alimentar e rotina. Nutrição de verdade não é sobre proibir — é sobre estratégia.",
  },
  {
    q: "Como funciona o suporte entre consultas?",
    a: "Você tem acesso 24h de domingo a domingo direto por WhatsApp para dúvidas rápidas, ajustes pontuais e orientações em situações específicas (viagens, eventos, treinos importantes).",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-x">
        <SectionHeader
          eyebrow="Perguntas frequentes"
          title={
            <>
              Tire suas dúvidas antes de{" "}
              <span className="text-primary">agendar.</span>
            </>
          }
        />

        <div className="mt-14 max-w-3xl mx-auto space-y-3">
          {ITEMS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={item.q}
                className={`rounded-2xl bg-background border transition-all ${
                  isOpen
                    ? "border-primary/30 shadow-[var(--shadow-card)]"
                    : "border-border/70"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground text-base md:text-lg leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 grid h-9 w-9 place-items-center rounded-full border transition-all ${
                      isOpen
                        ? "bg-primary border-primary text-primary-foreground rotate-45"
                        : "border-border text-foreground"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-6 text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
