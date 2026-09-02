import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.15-.174.199-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.017 2C6.485 2 2.02 6.465 2.02 12c0 1.867.545 3.68 1.556 5.24L2 22l4.867-1.523A9.955 9.955 0 0 0 12.017 22c5.532 0 9.997-4.465 9.997-10s-4.465-10-9.997-10zM12.017 20.15a8.144 8.144 0 0 1-4.148-1.135l-.297-.177-3.075.962.982-2.995-.194-.309a8.13 8.13 0 0 1-1.248-4.348c0-4.501 3.664-8.165 8.165-8.165 2.18 0 4.229.85 5.771 2.394a8.116 8.116 0 0 1 2.393 5.771c0 4.501-3.663 8.165-8.165 8.165z" />
        </svg>
      </a>

      <button
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-24 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-background border border-border text-foreground shadow-md hover:border-primary hover:text-primary transition-all ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  );
}
