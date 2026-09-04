import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";

import logoAsset from "@/assets/tefpix-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <img src={logoAsset.url} alt="TEFPIX" className="h-16 w-28 rounded-sm bg-background object-contain p-1" width={1254} height={1254} loading="lazy" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-navy-foreground/65">Tecnologia para operações mais rápidas, seguras e eficientes.</p>
        </div>
        <div>
          <p className="text-sm font-bold">Soluções</p>
          <div className="mt-4 grid gap-2 text-sm text-navy-foreground/65">
            <a href="/#solucoes" className="hover:text-navy-foreground">Sistema de Gestão</a><a href="/#solucoes" className="hover:text-navy-foreground">Automação Comercial</a><a href="/#tef" className="hover:text-navy-foreground">TEF e PIX</a><Link to="/politica-de-privacidade" className="hover:text-navy-foreground">Política de Privacidade</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold">Acompanhe a TEFPIX</p>
          <div className="mt-4 flex gap-3">
            <a href="https://www.instagram.com/tefpixoficial" target="_blank" rel="noreferrer" aria-label="Instagram da TEFPIX" className="grid size-10 place-items-center rounded-md border border-navy-foreground/20 hover:bg-navy-foreground/10"><Instagram className="size-5" /></a>
            <a href="https://www.facebook.com/Tefpix" target="_blank" rel="noreferrer" aria-label="Facebook da TEFPIX" className="grid size-10 place-items-center rounded-md border border-navy-foreground/20 hover:bg-navy-foreground/10"><Facebook className="size-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 px-5 py-5 text-center text-xs text-navy-foreground/55">© 2026 TEFPIX. Todos os direitos reservados.</div>
    </footer>
  );
}