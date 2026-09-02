import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import r1 from "@/assets/resultado-1.jpg.asset.json";
import r2 from "@/assets/resultado-2.jpg.asset.json";
import r3 from "@/assets/resultado-3.jpg.asset.json";
import r4 from "@/assets/resultado-4.jpg.asset.json";
import r5 from "@/assets/resultado-5.jpg.asset.json";

const RESULTS = [
  { src: r2.url, alt: "Antes e depois — paciente em processo de emagrecimento e performance" },
  { src: r3.url, alt: "Antes e depois — paciente com foco em definição muscular" },
  { src: r4.url, alt: "Antes e depois — paciente em recomposição corporal" },
  { src: r1.url, alt: "Antes e depois — paciente em preparação para competição", fit: "contain" as const },
  { src: r5.url, alt: "Antes e depois — paciente com redução de peso e saúde" },
];

export function Results() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
    });
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="resultados" className="py-24 md:py-32 bg-surface">
      <div className="container-x">
        <SectionHeader
          eyebrow="Antes e depois"
          title={
            <>
              Resultados reais de quem confiou no{" "}
              <span className="text-primary">processo.</span>
            </>
          }
          description="Transformações de pacientes acompanhados de perto, com nutrição individualizada e consistência."
        />

        <div className="mt-14 relative">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: false }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {RESULTS.map((r, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <figure className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="aspect-[4/5] w-full overflow-hidden bg-surface">
                      <img
                        src={r.src}
                        alt={r.alt}
                        loading="lazy"
                        draggable={false}
                        className={`h-full w-full ${r.fit === "contain" ? "object-contain" : "object-cover"} ${r.fit === "contain" ? "" : "transition-transform duration-500 group-hover:scale-[1.03]"} select-none`}
                      />
                    </div>
                    <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-sm">
                      Antes / Depois
                    </span>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex left-2 top-1/2 -translate-y-1/2 h-11 w-11 bg-background/90 backdrop-blur border-border hover:border-primary hover:text-primary" />
            <CarouselNext className="hidden md:flex right-2 top-1/2 -translate-y-1/2 h-11 w-11 bg-background/90 backdrop-blur border-border hover:border-primary hover:text-primary" />
          </Carousel>

          {count > 1 && (
            <div className="mt-8 flex items-center justify-center gap-1.5">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir para slide ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === selected ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground max-w-xl">
            Resultados individuais variam conforme adesão ao plano, rotina e histórico de cada paciente.
          </p>
          <a
            href={whatsappUrl("Olá Gustavo! Vi os resultados no site e quero conquistar o meu também.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Quero resultados como esses
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
