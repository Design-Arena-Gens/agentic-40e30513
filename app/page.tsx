import { Suspense } from "react";
import { BackgroundGlow } from "./components/BackgroundGlow";
import { SectionHeader } from "./components/SectionHeader";
import { MetricCard } from "./components/MetricCard";
import { TimelineItem } from "./components/TimelineItem";
import { InsightCard } from "./components/InsightCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { metrics, roadmap, insights, testimonials } from "@/lib/data";

function Hero() {
  return (
    <section className="hero" id="visao-geral">
      <BackgroundGlow />
      <div className="badge">Atualizações em tempo real</div>
      <h1>
        Evoluímos sua plataforma com uma experiência sofisticada, fluida e pronta para encantar seus usuários.
      </h1>
      <p>
        Esta nova versão une estratégia de produto, design premium e dados acionáveis. Tenha visualização imediata do
        impacto das melhorias e acompanhe a execução do roadmap de forma clara.
      </p>
      <div className="hero-actions">
        <button type="button">
          Explorar Dashboard
          <span aria-hidden>↗</span>
        </button>
        <button type="button" className="secondary">
          Ver Documentação
        </button>
      </div>
      <div className="hero-metrics">
        {metrics.map((metric) => (
          <div key={metric.label} className="hero-metric">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <small>{metric.trend}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section className="section" id="roadmap">
      <SectionHeader
        eyebrow="Roadmap Ativo"
        title="Design system robusto, jornada refinada e entregas contínuas."
        description="Visualize o progresso da evolução de produto. Cada etapa combina pesquisa real com decisões de design
        orientadas a dados."
      />
      <div className="timeline">
        {roadmap.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function InsightsSection() {
  return (
    <section className="section" id="insights">
      <SectionHeader
        eyebrow="Painel de Insights"
        title="Descobertas que embasam as decisões e o sucesso das entregas."
        description="Centralizamos aprendizados de pesquisa, dados analíticos e feedback dos usuários. Acompanhe quais
        squads estão liderando cada frente."
      />
      <div className="grid cols-3">
        {insights.map((insight) => (
          <InsightCard key={insight.title} {...insight} />
        ))}
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Depoimentos"
        title="Times que escalaram produtos com DesignArena."
        description="Parcerias estratégicas que valorizam design, dados e visão de negócio. Veja como aceleramos o impacto
        em diferentes mercados."
      />
      <div className="grid cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.author} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section cta">
      <SectionHeader
        eyebrow="Próximos Passos"
        title="Vamos construir a próxima grande experiência juntos?"
        description="Explore o blueprint estratégico de produto, valide hipóteses rapidamente e mantenha stakeholders
        alinhados com dashboards claros."
      />
      <div className="hero-actions">
        <button type="button">
          Agendar Sessão de Estratégia
          <span aria-hidden>↗</span>
        </button>
        <button type="button" className="secondary">
          Baixar Relatório Completo
        </button>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="section">Carregando conteúdo atualizado…</div>}>
      <Hero />
      <RoadmapSection />
      <InsightsSection />
      <TestimonialSection />
      <CTASection />
    </Suspense>
  );
}
