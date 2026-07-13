import React from "react";
import styles from "./experience-timeline.module.scss";

const EXPERIENCES = [
  {
    role: "Desenvolvedora Sênior",
    company: "Aposta Premia",
    period: "mar/2026 — atual",
    mode: "Remoto",
    bullets: [
      "Lidero a evolução arquitetural da plataforma, conduzindo a migração de um monolito Node.js para uma arquitetura distribuída baseada em microsserviços.",
      "Oriento o time técnico nas decisões de design, modelagem de domínio e definição de contratos entre serviços.",
      "Desenvolvo e mantenho o backend da plataforma (Node.js, NestJS, MongoDB), com foco em sistemas críticos como motor de promoções, cashback, postbacks e integração com parceiros.",
      "Implemento regras de negócio sensíveis a conflito (ex.: resolução de cashback entre promoções automáticas e ativadas, unicidade operacional de promoções por parceiro).",
      "Defino e executo migrações de dados em produção com segurança.",
      "Atuo em todo o ciclo de uma feature: levantamento de regras, modelagem, implementação, QA e acompanhamento pós-deploy.",
    ],
  },
  {
    role: "Desenvolvedora Full Stack Pleno",
    company: "Aposta Premia",
    period: "set/2025 — mai/2026",
    mode: "Tempo integral",
    bullets: [
      "Desenvolvimento full stack em plataforma de alto volume de acessos, com foco em performance, segurança e escalabilidade.",
      "Participação ativa em features críticas do produto e integrações com parceiros.",
    ],
  },
  {
    role: "Desenvolvedora Full Stack Pleno",
    company: "Serena (Ômega Energia)",
    period: "set/2024 — ago/2025",
    mode: "Tempo integral",
    bullets: [
      "Desenvolvimento de soluções end-to-end no setor de energia renovável, utilizando React, Next.js, Node.js e NestJS.",
      "Implementação de testes automatizados e práticas de qualidade de código.",
    ],
  },
  {
    role: "Desenvolvedora Full Stack Júnior",
    company: "Serena (Ômega Energia)",
    period: "set/2021 — set/2024",
    mode: "Tempo integral",
    bullets: [
      "Desenvolvimento de aplicações web utilizando React, Next.js, NestJS, WordPress, TypeScript e PostgreSQL.",
      "Utilização de libs como React Hook Form, Tailwind, Material UI, Mantine e Puppeteer.",
      "Colaboração em arquitetura micro-frontend e práticas ágeis.",
    ],
  },
  {
    role: "Desenvolvedora Freelancer",
    company: "Plataforma Workana",
    period: "mai/2024 — atual",
    mode: null,
    bullets: ["Desenvolvimento de aplicações com React e otimização de SEO de páginas."],
  },
  {
    role: "Desenvolvedora Back-end",
    company: "Bolsista IFAL",
    period: "jan/2020 — set/2020",
    mode: null,
    bullets: [
      "Atuei no back-end do projeto Hemeroteca, um sistema de documentação histórica, utilizando Django, Python e JavaScript.",
      "Participei do desenvolvimento de uma plataforma para compartilhamento e criação de projetos de pesquisa.",
    ],
  },
];

export const ExperienceTimeline = () => {
  return (
    <section className={styles.timeline} id="experience">
      <h3 className={styles.title}>Jornada Profissional</h3>
      <ol className={styles.steps}>
        {EXPERIENCES.map((exp) => (
          <li key={`${exp.company}-${exp.period}`} className={styles.step}>
            <span className={styles.marker} aria-hidden="true" />
            <div className={styles.card}>
              <h4 className={styles.role}>{exp.role}</h4>
              <p className={styles.meta}>
                {exp.company} <span className={styles.period}>· {exp.period}</span>
              </p>
              {exp.mode && <p className={styles.mode}>{exp.mode}</p>}
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
