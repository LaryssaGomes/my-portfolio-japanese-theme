import { Dictionary } from "./types";

export const pt: Dictionary = {
  nav: {
    home: "Início",
    about: "Sobre",
    skills: "Habilidades",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    greeting: "Olá, eu sou",
  },
  about: {
    title: "Sobre mim",
    text: "Sou Laryssa Gomes, desenvolvedora Full Stack Sênior, focada em aplicações escaláveis e de alta performance com React, Next.js, Node.js e NestJS. Atualmente, na Aposta Premia, lidero a migração de um monolito para microsserviços em um ambiente de alto volume de acessos.",
    downloadCv: "Baixar Curriculo",
  },
  skills: {
    title: "Skills",
    categories: [
      {
        title: "Front-end",
        items: [
          "Next.js/React.js",
          "Vue.js",
          "Styled Components",
          "Material UI/Tailwind",
          "Bootstrap",
          "Micro-frontend",
        ],
      },
      {
        title: "Back-end",
        items: [
          "NestJS/TypeScript",
          "Django/Python",
          "Java/Spring Boot",
          "Go",
          "APIs REST",
        ],
      },
      {
        title: "Banco de Dados",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Redis (cache e filas)"],
      },
      {
        title: "Testes",
        items: ["Jest", "Cypress", "Testing Library"],
      },
      {
        title: "Ferramentas & Outros",
        items: ["GitHub/Git", "Linux", "WordPress", "Puppeteer", "Webcrawler", "AWS (IAM, EC2, CloudWatch, Lambda, CloudFront)", "CI/CD", "Docker"],
      },
      {
        title: "Metodologias",
        items: [
          "Ágeis (Scrum / Kanban)",
          "Arquitetura de Microsserviços",
          "MVC",
          "Modelagem de Domínio",
        ],
      },
      {
        title: "Idiomas",
        items: ["Português — Nativo", "Inglês — Intermediário (B1)"],
      },
    ],
  },
  experience: {
    title: "Jornada Profissional",
    items: [
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
          "Configuro e gerencio recursos de infraestrutura na AWS (IAM, EC2, CloudWatch, Lambda, CloudFront) e pipelines de CI/CD para deploy e monitoramento da plataforma.",
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
        bullets: [
          "Desenvolvimento de aplicações com React e otimização de SEO de páginas.",
        ],
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
    ],
  },
  projects: {
    title: "Projetos",
    viewCode: "Ver código",
    viewSite: "Ver site",
    items: [
      {
        title: "Nextjs-bird",
        description:
          "Nextjs-bird é um site dinâmico desenvolvido com Next.js, usando dados extraídos de dois sites via Puppeteer e organizados em um CMS. O projeto inclui uma galeria de fotos históricas, integração com APIs externas, e uma ferramenta de pesquisa para identificação de aves. Todo o design da aplicação foi criado para oferecer uma experiência intuitiva e envolvente.",
      },
      {
        title: "Landing Page — Ponto Saber",
        description:
          "Este projeto é uma landing page responsiva desenvolvida com Next.js e styled-components, criada como parte de um desafio técnico. A proposta era construir uma interface clara, moderna e funcional, focada em performance e acessibilidade.\n\nCom esse projeto, fui selecionada e ganhei 1 ano de acesso à plataforma da Rocketseat em 2023. Essa conquista marcou um passo importante no meu desenvolvimento como desenvolvedora full stack, fortalecendo ainda mais minha base em tecnologias modernas como React, Next.js e TypeScript.",
      },
      {
        title: "Clone Netflix",
        description:
          "Netflix Clone é uma aplicação web desenvolvida com React.js que recria a interface visual da página inicial da Netflix. O objetivo do projeto é oferecer uma experiência visual semelhante à plataforma de streaming, utilizando dados fornecidos pela API TMDB. A aplicação exibe uma variedade de filmes e séries de TV, organizados em categorias como 'Populares' e 'Recomendados'. A interface é responsiva, garantindo uma navegação fluida em diferentes dispositivos, desde desktops até smartphones.",
      },
      {
        title: "NestJS Ride-Hailing Microservices",
        description:
          "Plataforma de caronas construída com arquitetura de microsserviços em NestJS, simulando o backend de um app estilo Uber. O api-gateway recebe as requisições do cliente e se comunica de forma assíncrona via RabbitMQ com os serviços de authentications (autenticação e cadastro), rider (dados de corridas e coordenadas) e logging (auditoria de eventos), cada um com seu próprio banco (PostgreSQL e MongoDB). O deploy é automatizado via CI/CD com GitHub Actions, que a cada push na main atualiza o código e sobe os containers Docker na VM de produção. O projeto inclui uma demo ao vivo com visualização em tempo real do fluxo de mensagens entre os serviços.",
      },
    ],
  },
  contact: {
    title: "Contatos",
    whatsapp: "WhatsApp",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    catOwner: "Dona das gatinhas",
    catNames: ["Kirara", "Mona", "Klee"],
    frontendTitle: "FrontEnd",
    frontendItems: ["Next js", "Sass", "Figma"],
    backendTitle: "BackEnd",
    backendItems: ["Next js", "Resend", "Libs diversas"],
    rights: "© 2024 LaryDev. All rights reserved",
  },
};
