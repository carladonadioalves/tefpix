import { MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/5547991561812?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es%20da%20TEFPIX.";

export function WhatsAppButton({ label = false }: { label?: boolean }) {
  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a TEFPIX pelo WhatsApp" className={label ? "inline-flex h-12 items-center gap-2 rounded-md bg-success px-6 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5" : "fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-success text-primary-foreground shadow-xl transition-transform hover:scale-105 sm:bottom-7 sm:right-7"}>
      <MessageCircle className={label ? "size-5" : "size-7"} aria-hidden="true" />
      {label && <span>Falar pelo WhatsApp</span>}
    </a>
  );
}