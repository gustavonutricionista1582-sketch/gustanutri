import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { Method } from "@/components/landing/Method";
import { About } from "@/components/landing/About";
import { Differentials } from "@/components/landing/Differentials";
import { Results } from "@/components/landing/Results";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { FloatingActions } from "@/components/landing/FloatingActions";

const TITLE = "Gustavo Souza | Nutricionista Esportivo em Caucaia - CE";
const DESCRIPTION =
  "Nutrição esportiva personalizada para emagrecimento, hipertrofia e performance. Atendimento presencial em Caucaia/CE e online. Agende sua consulta.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "#gustavo-souza-nutri",
          name: "Gustavo Souza — Nutricionista Esportivo",
          description: DESCRIPTION,
          telephone: "+55-85-98155-3394",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Pedro Gomes da Rocha, 394 Altos",
            addressLocality: "Caucaia",
            addressRegion: "CE",
            addressCountry: "BR",
          },
          areaServed: "Caucaia, CE",
          medicalSpecialty: "Nutrition",
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Method />
        <About />
        <Differentials />
        <Results />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
