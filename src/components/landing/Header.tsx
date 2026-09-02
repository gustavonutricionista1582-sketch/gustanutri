import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { whatsappUrl } from "@/lib/whatsapp";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#metodo", label: "Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/15 backdrop-blur-md md:bg-[#0F0F0F]/95 md:backdrop-blur-xl md:border-b md:border-white/10 md:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)]"
          : "bg-black/15 backdrop-blur-md md:bg-[#0F0F0F]/90 md:backdrop-blur-xl"
      }`}
    >
      <div
        className={`container-x grid grid-cols-[minmax(0,1fr)_auto] items-center transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 min-w-0">
          <img
            src={logoAsset.url}
            alt="Gustavo Souza — Nutricionista Esportivo"
            className={`shrink-0 w-auto transition-all duration-300 ${
              scrolled ? "h-10" : "h-12"
            }`}
          />
        </a>

        <div className="flex items-center gap-2 md:gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 hover:-translate-y-0.5 transition-all"
          >
            Agendar consulta
          </a>

          <button
            aria-label="Abrir menu"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[60] h-[100dvh] transition-all duration-300 ease-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-[#0F0F0F] shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <img src={logoAsset.url} alt="Logo" className="h-10" />
            <button
              aria-label="Fechar menu"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-2">
            {NAV.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium py-3 border-b border-white/10 text-white hover:text-primary transition-all duration-300 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${120 + index * 40}ms` : "0ms" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 transition-all"
          >
            Agendar consulta
          </a>
        </aside>
      </div>
    </header>
  );
}
