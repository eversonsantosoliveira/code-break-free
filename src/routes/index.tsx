import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  Smartphone,
  Search,
  Compass,
  ListChecks,
  RefreshCcw,
  Sparkles,
  Check,
  X,
} from "lucide-react";

import ebookMockup from "@/assets/ebook-mockup.png";
import { CheckoutButton } from "@/components/landing/CheckoutButton";
import { Reveal } from "@/components/landing/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O Código da Procrastinação | Pare de Adiar e Comece a Agir" },
      {
        name: "description",
        content:
          "Descubra um método prático para entender o ciclo da procrastinação, organizar suas tarefas e começar a agir. Acesso por apenas R$9,90.",
      },
      {
        property: "og:title",
        content: "O Código da Procrastinação | Pare de Adiar e Comece a Agir",
      },
      {
        property: "og:description",
        content:
          "Descubra um método prático para entender o ciclo da procrastinação, organizar suas tarefas e começar a agir. Acesso por apenas R$9,90.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const painPoints = [
  "Você deixa tarefas importantes para depois.",
  "Passa mais tempo no celular do que gostaria.",
  "Sente culpa por não fazer o que tinha planejado.",
  "Fica sobrecarregado sem saber por onde começar.",
  "Promete que vai mudar… e acaba voltando ao mesmo ciclo.",
];

const learnCards = [
  {
    icon: Search,
    title: "Identificar o que está fazendo você procrastinar",
    text: "Entenda os padrões que fazem você adiar tarefas mesmo sabendo que precisa realizá-las.",
  },
  {
    icon: Compass,
    title: "Saber exatamente por onde começar",
    text: "Pare de olhar para uma lista enorme de coisas e não saber qual delas fazer primeiro.",
  },
  {
    icon: ListChecks,
    title: "Organizar suas tarefas sem se sentir sobrecarregado",
    text: "Aprenda a transformar aquilo que parece complicado em ações mais claras e executáveis.",
  },
  {
    icon: RefreshCcw,
    title: "Quebrar o ciclo de adiamento",
    text: "Entenda como o ciclo funciona e como começar a interrompê-lo no seu dia a dia.",
  },
  {
    icon: Sparkles,
    title: "Ter mais clareza para agir",
    text: "Em vez de ficar apenas pensando, planeje o próximo passo e coloque em prática.",
  },
];

function TrustLine({ className = "" }: { className?: string }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <Lock className="h-4 w-4 text-safe" aria-hidden="true" />
        Compra 100% segura
      </span>
      <span aria-hidden="true" className="text-border">
        •
      </span>
      <span className="inline-flex items-center gap-1.5">
        <ShieldCheck className="h-4 w-4 text-safe" aria-hidden="true" />7 dias de garantia
      </span>
    </p>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
          />
          <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal className="order-1 flex flex-col">
              <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Ebook · Método prático
              </span>
              <h1 className="text-[2.1rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Pare de adiar o que pode{" "}
                <span className="text-gradient-gold">mudar sua vida.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Descubra como identificar o que está por trás da sua procrastinação, organizar o
                que precisa ser feito e finalmente começar — sem depender de motivação.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                O Código da Procrastinação é um método prático para você entender o ciclo que te
                prende e começar a agir de forma mais consistente.
              </p>

              <div className="order-3 mt-8 lg:order-none">
                <div className="inline-flex items-baseline gap-2 rounded-2xl border border-gold/25 bg-surface px-5 py-4 shadow-soft">
                  <span className="text-sm text-muted-foreground">Hoje por apenas</span>
                  <span className="text-3xl font-extrabold text-gold sm:text-4xl">R$9,90</span>
                </div>
                <TrustLine className="mt-4" />
              </div>

              <div className="order-4 mt-8 max-w-md lg:order-none">
                <CheckoutButton>Quero acessar o código por R$9,90</CheckoutButton>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Pagamento único • Acesso digital
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="order-2 flex justify-center lg:order-none">
              <div className="relative w-full max-w-sm">
                <div
                  aria-hidden="true"
                  className="absolute inset-6 rounded-[2rem] bg-gold/15 blur-3xl"
                />
                <img
                  src={ebookMockup}
                  width={1024}
                  height={1280}
                  alt="Mockup do ebook O Código da Procrastinação com capa preta e detalhes em dourado"
                  className="relative w-full drop-shadow-2xl"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <div aria-hidden="true" className="hairline-gold mx-auto h-px w-full max-w-[1200px] opacity-40" />

        {/* DOR */}
        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto w-full max-w-[1200px]">
            <Reveal>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Você sabe o que precisa fazer.{" "}
                <span className="text-muted-foreground">Mas continua adiando.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Você cria planos, promete que amanhã vai começar e até consegue se organizar por
                alguns dias.
              </p>
            </Reveal>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {painPoints.map((point, i) => (
                <Reveal as="li" key={point} delay={i * 70}>
                  <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-soft transition-colors duration-300 hover:border-gold/30">
                    <span
                      aria-hidden="true"
                      className="mb-4 block h-px w-8 bg-gold/70"
                    />
                    <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                      {point}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <blockquote className="mt-14 rounded-3xl border border-gold/25 bg-surface-elevated p-8 text-center shadow-soft sm:p-12">
                <p className="mx-auto max-w-3xl text-xl font-bold leading-snug sm:text-3xl">
                  O problema não é simplesmente saber o que fazer.{" "}
                  <span className="text-gradient-gold">
                    É conseguir aplicar isso no seu dia.
                  </span>
                </p>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* O QUE VOCÊ VAI APRENDER */}
        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto w-full max-w-[1200px]">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                O que você vai aprender com o ebook
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Um método para transformar confusão em clareza e intenção em ação.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {learnCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <Reveal as="article" key={card.title} delay={i * 70} className="h-full">
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 motion-reduce:hover:translate-y-0">
                      <span className="mb-5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10">
                        <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-bold leading-snug">{card.title}</h3>
                      <span aria-hidden="true" className="my-4 block h-px w-10 bg-gold/60" />
                      <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* TRANSFORMAÇÃO */}
        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto w-full max-w-[1200px]">
            <Reveal className="max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Você não precisa continuar preso nesse ciclo.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Você pode continuar tentando resolver sozinho…
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Ou pode ter acesso a um método criado para te ajudar a entender o problema e
                começar a agir de forma prática.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-3xl border border-border bg-surface/60 p-7 sm:p-9">
                  <h3 className="text-lg font-bold text-muted-foreground sm:text-xl">
                    Deixe de lado por um momento…
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Mais uma promessa de “segunda-feira eu começo”.",
                      "Mais uma lista de tarefas que você não consegue cumprir.",
                      "Mais horas se culpando por não ter feito o que precisava.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground sm:text-base">
                        <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="h-full rounded-3xl border border-gold/35 bg-surface-elevated p-7 shadow-soft sm:p-9">
                  <h3 className="text-lg font-bold text-gold sm:text-xl">E comece a ter…</h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Mais clareza sobre o que está te travando.",
                      "Um caminho para saber por onde começar.",
                      "Uma forma prática de aplicar o método durante o seu dia.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-foreground sm:text-base">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-safe" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* OFERTA */}
        <section id="oferta" className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto w-full max-w-3xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/30 bg-surface p-7 text-center shadow-soft sm:p-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-gold"
                />
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
                  O Código da Procrastinação
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
                  Um ebook prático para quem está cansado de adiar e quer começar a agir.
                </p>

                <div className="mt-10">
                  <p className="text-base text-muted-foreground line-through">De R$29,90</p>
                  <p className="mt-1 text-6xl font-extrabold leading-none text-gold sm:text-7xl">
                    R$9,90
                  </p>
                  <p className="mt-3 text-sm font-semibold text-foreground/90">Pagamento único.</p>
                </div>

                <ul className="mx-auto mt-9 grid max-w-lg gap-3 sm:grid-cols-3">
                  {[
                    { icon: Lock, label: "Compra segura" },
                    { icon: Smartphone, label: "Acesso digital" },
                    { icon: ShieldCheck, label: "7 dias de garantia" },
                  ].map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-elevated px-3 py-3 text-xs font-medium text-muted-foreground sm:text-sm"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-safe" aria-hidden="true" />
                      {label}
                    </li>
                  ))}
                </ul>

                <div className="mx-auto mt-10 max-w-md">
                  <CheckoutButton>Quero meu acesso por R$9,90</CheckoutButton>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Comece hoje por apenas R$9,90.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto w-full max-w-[1200px]">
            <Reveal>
              <div className="grid items-center gap-10 rounded-3xl border border-border bg-surface p-7 shadow-soft sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-14">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-gold/40 bg-gold/5 sm:h-40 sm:w-40">
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-gold/25 sm:h-32 sm:w-32">
                    <ShieldCheck className="h-8 w-8 text-gold" aria-hidden="true" />
                    <span className="mt-1 text-lg font-extrabold text-gold">7</span>
                    <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
                      dias
                    </span>
                  </div>
                </div>
                <div className="min-w-0">
                  <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                    <span aria-hidden="true">🛡️ </span>Você tem 7 dias para testar
                  </h2>
                  <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <p>Você não precisa comprar no escuro.</p>
                    <p>
                      Depois da compra, você terá 7 dias de garantia para conhecer o conteúdo.
                    </p>
                    <p>
                      Se perceber que o método não é para você, basta solicitar o reembolso dentro
                      do prazo da garantia.
                    </p>
                  </div>
                  <p className="mt-6 text-lg font-bold text-gold sm:text-xl">
                    Você não tem nada a perder tentando.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-5 py-20 text-center sm:px-8 sm:py-28">
          <div className="mx-auto w-full max-w-3xl">
            <Reveal>
              <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                A pergunta não é se você sabe que precisa mudar.
              </h2>
              <p className="mt-5 text-base text-muted-foreground sm:text-lg">
                Você provavelmente já sabe.
              </p>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-bold leading-snug sm:text-3xl">
                A questão é:{" "}
                <span className="text-gradient-gold">
                  até quando você vai continuar adiando o primeiro passo?
                </span>
              </p>
              <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Por R$9,90, você pode ter acesso ao O Código da Procrastinação e começar a
                entender como sair desse ciclo.
              </p>

              <div className="mx-auto mt-10 max-w-md">
                <CheckoutButton>Quero o código da procrastinação — R$9,90</CheckoutButton>
                <TrustLine className="mt-4 justify-center" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-10 sm:px-8">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-bold tracking-tight">O Código da Procrastinação</p>
          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              {["Termos de Uso", "Política de Privacidade", "Suporte"].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
