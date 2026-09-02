import { MapPin, Phone, Clock } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer id="contato" className="bg-foreground text-background/90">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-3">
              <img src={logoAsset.url} alt="Gustavo Souza" className="h-16" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-background/70 max-w-sm">
              Nutrição esportiva séria, humana e estratégica. Acompanhamento
              individualizado em Caucaia/CE e online.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-primary" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-background/70">
                <Clock className="h-4 w-4 mt-0.5 text-primary" />
                Seg — Sáb • 08h às 19h
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Endereço
            </h3>
            <address className="mt-5 not-italic text-sm text-background/80 leading-relaxed">
              <span className="inline-flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                R. Pedro Gomes da Rocha, 394 — Altos
                <br />
                Centro • Caucaia / CE
              </span>
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=R.+Pedro+Gomes+da+Rocha,+394+-+Centro,+Caucaia+-+CE"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:brightness-125 transition"
            >
              Abrir no Google Maps →
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Localização
            </h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-background/10">
              <iframe
                title="Mapa do consultório"
                src="https://www.google.com/maps?q=R.+Pedro+Gomes+da+Rocha,+394+-+Centro,+Caucaia+-+CE&output=embed"
                width="100%"
                height="180"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/60">
          <p>
            © {new Date().getFullYear()} Gustavo Souza • Nutricionista
            Esportivo. Todos os direitos reservados.
          </p>
          <p>CRN-6 • Caucaia / CE</p>
        </div>
      </div>
    </footer>
  );
}
