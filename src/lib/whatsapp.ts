export const WHATSAPP_NUMBER = "5585981553394";
export const WHATSAPP_DISPLAY = "(85) 98155-3394";
export const WHATSAPP_MESSAGE =
  "Olá Gustavo! Encontrei seu site e gostaria de agendar uma consulta.";

export function whatsappUrl(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
