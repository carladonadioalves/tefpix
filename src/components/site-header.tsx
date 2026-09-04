import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import logoAsset from "@/assets/tefpix-logo-v2.png.asset.json";
import { Button } from "@/components/ui/button";

const links = [
  ["Início", "#inicio"],
  ["Empresa", "#empresa"],
  ["Soluções", "#solucoes"],
  ["Serviços", "#servicos"],
  ["Contato", "#contato"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-[220px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="TEFPIX — página inicial" className="flex shrink-0 items-center">
          <img src={logoAsset.url} alt="TEFPIX" className="h-[200px] w-auto object-contain" width={1200} height={400} />
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary">{label}</a>)}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          <Menu className="size-6" />
        </Button>
      </div>
      {open && <nav aria-label="Navegação móvel" className="border-t border-border bg-background px-5 py-3 md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-border/70 py-3 text-sm font-semibold last:border-0">{label}</a>)}</nav>}
    </header>
  );
}