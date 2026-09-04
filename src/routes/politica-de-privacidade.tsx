import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({ meta: [
    { title: "Política de Privacidade | TEFPIX" },
    { name: "description", content: "Conheça a política de privacidade e proteção de dados da TEFPIX." },
    { property: "og:title", content: "Política de Privacidade | TEFPIX" },
    { property: "og:description", content: "Informações sobre privacidade e proteção de dados na TEFPIX." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <div className="min-h-screen bg-background"><SiteHeader /><main className="mx-auto max-w-3xl px-5 pb-24 pt-64 sm:px-8"><a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft className="size-4"/>Voltar ao início</a><p className="mt-10 text-sm font-bold uppercase text-primary">TEFPIX</p><h1 className="mt-3 text-4xl font-extrabold text-navy">Política de Privacidade</h1><p className="mt-4 text-sm text-muted-foreground">Última atualização: setembro de 2026.</p><div className="mt-10 space-y-8 leading-7 text-muted-foreground"><section><h2 className="text-xl font-bold text-foreground">Nosso compromisso</h2><p className="mt-3">A TEFPIX respeita sua privacidade e trata dados pessoais com responsabilidade, segurança e transparência.</p></section><section><h2 className="text-xl font-bold text-foreground">Dados de navegação</h2><p className="mt-3">Podemos coletar informações técnicas básicas, como tipo de dispositivo, navegador e páginas acessadas, para entender o desempenho do site e melhorar sua experiência.</p></section><section><h2 className="text-xl font-bold text-foreground">Contato pelo WhatsApp e e-mail</h2><p className="mt-3">Ao entrar em contato, os dados enviados são usados apenas para responder à sua solicitação, prestar atendimento e apresentar soluções relacionadas ao seu interesse.</p></section><section><h2 className="text-xl font-bold text-foreground">Compartilhamento e segurança</h2><p className="mt-3">Não comercializamos seus dados. Informações poderão ser tratadas por fornecedores essenciais ao funcionamento do atendimento, sempre com medidas adequadas de proteção.</p></section><section><h2 className="text-xl font-bold text-foreground">Seus direitos</h2><p className="mt-3">Você pode solicitar informações, correção ou exclusão de dados pessoais entrando em contato pelo e-mail <a className="font-semibold text-primary" href="mailto:moises@tefpix.com.br">moises@tefpix.com.br</a>.</p></section></div></main><SiteFooter/><WhatsAppButton/></div>;
}