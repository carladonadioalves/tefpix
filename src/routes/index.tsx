import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Boxes, Building2, Check, Clock3, CreditCard, FileBadge2, Mail, MapPin, Phone, QrCode, ShieldCheck, TrendingUp } from "lucide-react";

import heroImage from "@/assets/tefpix-hero.jpg";
import teamImage from "@/assets/tefpix-team.jpg";
import terminalImage from "@/assets/tefpix-terminal.jpg";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "TEFPIX | Automação, Gestão e Pagamentos" },
    { name: "description", content: "Soluções em automação comercial, sistemas de gestão, TEF e PIX integrado para empresas." },
    { property: "og:title", content: "TEFPIX | Tecnologia que simplifica seu negócio" },
    { property: "og:description", content: "Gestão, automação comercial e pagamentos integrados para sua empresa crescer." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const solutions = [
  { icon: CreditCard, title: "TEF", text: "Pagamentos conectados diretamente ao seu sistema de vendas." },
  { icon: QrCode, title: "PIX integrado", text: "Recebimentos via PIX com agilidade, segurança e conciliação." },
  { icon: Boxes, title: "Automação Comercial", text: "Atendimento mais rápido, eficiente e totalmente integrado." },
  { icon: TrendingUp, title: "Sistema de Gestão", text: "Vendas, estoque, financeiro e operações em um único sistema." },
];

const tefItems = ["Multiadquirente", "Diversas bandeiras", "PIX", "QR Code", "Conciliação", "Integração com ERP"];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section id="inicio" className="relative flex min-h-[720px] items-center overflow-hidden pt-56 text-navy-foreground md:min-h-[760px]">
          <img src={heroImage} alt="Pagamento integrado em um ponto de venda" className="absolute inset-0 h-full w-full object-cover object-center" width={1920} height={1088} fetchPriority="high" />
          <div className="absolute inset-0 bg-navy/80 md:bg-navy/55" />
          <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-bold uppercase text-sky">Tecnologia para empresas</p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">Tecnologia que simplifica o seu negócio</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-navy-foreground/80">Soluções completas em automação comercial, sistemas de gestão e meios de pagamento para tornar sua empresa mais eficiente.</p>
              <div className="mt-9"><WhatsAppButton label /></div>
            </div>
          </div>
        </section>

        <section id="solucoes" className="scroll-mt-20 bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl"><p className="text-sm font-bold uppercase text-primary">Nossas soluções</p><h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">Tudo conectado. Tudo mais simples.</h2><p className="mt-4 leading-7 text-muted-foreground">Tecnologia confiável para organizar sua operação e facilitar cada venda.</p></div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {solutions.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm"><div className="grid size-11 place-items-center rounded-md bg-secondary text-primary"><Icon className="size-5" /></div><h3 className="mt-6 font-bold text-navy">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="tef" className="scroll-mt-20 bg-secondary py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
            <div className="overflow-hidden rounded-lg shadow-xl"><img src={terminalImage} alt="PIN Pad integrado ao sistema de vendas" className="aspect-[6/5] h-full w-full object-cover" width={1200} height={1008} loading="lazy" /></div>
            <div><p className="text-sm font-bold uppercase text-primary">Pagamentos sem complicação</p><h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">TEF integrado ao seu sistema</h2><p className="mt-5 leading-7 text-muted-foreground">Trabalhe com diferentes adquirentes e bandeiras usando o mesmo PIN Pad. Mais controle para sua empresa e uma experiência ágil para o cliente.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{tefItems.map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-foreground"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-4" /></span>{item}</div>)}</div></div>
          </div>
        </section>

        <section id="servicos" className="scroll-mt-20 bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="max-w-2xl"><p className="text-sm font-bold uppercase text-primary">Serviços</p><h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">Suporte para o seu dia a dia</h2></div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-border bg-card p-8 shadow-sm"><Clock3 className="size-8 text-primary" /><h3 className="mt-6 text-xl font-bold text-navy">Sistema RH Fazendo Hora</h3><p className="mt-4 leading-7 text-muted-foreground">Uma solução preparada para cuidar do que sua empresa precisa agora e no futuro: tecnologia, segurança, alto desempenho, armazenamento de arquivos, backup, atualizações e servidores disponíveis 24 horas.</p></article>
              <article className="rounded-lg border border-border bg-card p-8 shadow-sm"><FileBadge2 className="size-8 text-primary" /><h3 className="mt-6 text-xl font-bold text-navy">Certificado digital</h3><p className="mt-4 leading-7 text-muted-foreground">Praticidade e segurança para sua empresa. Faça seu certificado digital por vídeo, com atendimento simples e sem deslocamentos.</p></article>
            </div>
          </div>
        </section>

        <section id="empresa" className="scroll-mt-20 overflow-hidden bg-navy text-navy-foreground">
          <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
            <div className="px-5 py-20 sm:px-8 lg:py-28 lg:pr-20"><p className="text-sm font-bold uppercase text-sky">Sobre a TEFPIX</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Tecnologia para fazer sua empresa crescer</h2><p className="mt-6 leading-8 text-navy-foreground/70">A TEFPIX oferece soluções em tecnologia, automação comercial, meios de pagamento e sistemas de gestão, tornando as operações de seus clientes mais rápidas, seguras e eficientes.</p><div className="mt-8 flex gap-8"><div><ShieldCheck className="size-6 text-sky"/><p className="mt-2 text-sm font-bold">Segurança</p></div><div><BadgeCheck className="size-6 text-sky"/><p className="mt-2 text-sm font-bold">Confiança</p></div><div><Building2 className="size-6 text-sky"/><p className="mt-2 text-sm font-bold">Experiência</p></div></div></div>
            <img src={teamImage} alt="Equipe analisando indicadores de gestão" className="h-full min-h-[430px] w-full object-cover" width={1200} height={912} loading="lazy" />
          </div>
        </section>

        <section id="contato" className="scroll-mt-20 bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
            <div><p className="text-sm font-bold uppercase text-primary">Contato</p><h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">Precisa de ajuda? Fale com a TEFPIX</h2><p className="mt-5 leading-7 text-muted-foreground">Nossa equipe está pronta para entender seu negócio e encontrar a solução ideal.</p><div className="mt-8"><WhatsAppButton label /></div></div>
            <address className="grid gap-4 not-italic sm:grid-cols-2">
              <a href="tel:+5547991561812" className="rounded-lg border border-border bg-card p-5 hover:border-primary"><Phone className="size-5 text-primary"/><p className="mt-4 text-xs font-bold uppercase text-muted-foreground">Telefones</p><p className="mt-1 font-semibold">(47) 99156-1812</p><p className="text-sm">(47) 99243-0651</p></a>
              <a href="mailto:moises@tefpix.com.br" className="rounded-lg border border-border bg-card p-5 hover:border-primary"><Mail className="size-5 text-primary"/><p className="mt-4 text-xs font-bold uppercase text-muted-foreground">E-mails</p><p className="mt-1 text-sm font-semibold">moises@tefpix.com.br</p><p className="text-sm">andreia@tefpix.com.br</p></a>
              <a href="https://maps.google.com/?q=Rua+Jacob+Rocha+64+Ponta+Aguda+Blumenau+SC" target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-card p-5 hover:border-primary sm:col-span-2"><MapPin className="size-5 text-primary"/><p className="mt-4 text-xs font-bold uppercase text-muted-foreground">Localização</p><p className="mt-1 font-semibold">Rua Jacob Rocha, 64</p><p className="text-sm text-muted-foreground">Ponta Aguda — Blumenau, SC</p></a>
            </address>
          </div></div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
