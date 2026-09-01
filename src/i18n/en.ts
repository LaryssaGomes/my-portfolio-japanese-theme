import { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
  },
  about: {
    title: "About me",
    text: "I'm Laryssa Gomes, a Senior Full Stack Developer focused on scalable, high-performance applications with React, Next.js, Node.js, and NestJS. I currently lead the migration from a monolith to microservices at Aposta Premia, in a high-traffic environment.",
    downloadCv: "Download Resume",
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
          "REST APIs",
        ],
      },
      {
        title: "Databases",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Redis (cache & queues)"],
      },
      {
        title: "Testing",
        items: ["Jest", "Cypress", "Testing Library"],
      },
      {
        title: "Tools & Others",
        items: ["GitHub/Git", "Linux", "WordPress", "Puppeteer", "Web Crawler", "AWS (IAM, EC2, CloudWatch, Lambda, CloudFront)", "CI/CD", "Docker"],
      },
      {
        title: "Methodologies",
        items: [
          "Agile (Scrum / Kanban)",
          "Microservices Architecture",
          "MVC",
          "Domain Modeling",
        ],
      },
      {
        title: "Languages",
        items: ["Portuguese — Native", "English — Intermediate (B1)"],
      },
    ],
  },
  experience: {
    title: "Professional Journey",
    items: [
      {
        role: "Senior Developer",
        company: "Aposta Premia",
        period: "Mar 2026 — Present",
        mode: "Remote",
        bullets: [
          "Lead the platform's architectural evolution, driving the migration from a Node.js monolith to a distributed microservices-based architecture.",
          "Guide the technical team on design decisions, domain modeling, and definition of contracts between services.",
          "Develop and maintain the platform's backend (Node.js, NestJS, MongoDB), focusing on critical systems such as the promotions engine, cashback, postbacks, and partner integrations.",
          "Implement conflict-sensitive business rules (e.g., resolving cashback conflicts between automatic and activated promotions, ensuring operational uniqueness of promotions per partner).",
          "Define and safely execute production data migrations.",
          "Work across the full feature lifecycle: requirements gathering, modeling, implementation, QA, and post-deploy monitoring.",
          "Configure and manage AWS infrastructure resources (IAM, EC2, CloudWatch, Lambda) and CI/CD pipelines for platform deployment and monitoring.",
        ],
      },
      {
        role: "Mid-level Full Stack Developer",
        company: "Aposta Premia",
        period: "Sep 2025 — May 2026",
        mode: "Full-time",
        bullets: [
          "Full stack development on a high-traffic platform, focusing on performance, security, and scalability.",
          "Active participation in critical product features and partner integrations.",
        ],
      },
      {
        role: "Mid-level Full Stack Developer",
        company: "Serena (Ômega Energia)",
        period: "Sep 2024 — Aug 2025",
        mode: "Full-time",
        bullets: [
          "End-to-end solution development in the renewable energy sector, using React, Next.js, Node.js, and NestJS.",
          "Implementation of automated tests and code quality practices.",
        ],
      },
      {
        role: "Junior Full Stack Developer",
        company: "Serena (Ômega Energia)",
        period: "Sep 2021 — Sep 2024",
        mode: "Full-time",
        bullets: [
          "Development of web applications using React, Next.js, NestJS, WordPress, TypeScript, and PostgreSQL.",
          "Use of libraries such as React Hook Form, Tailwind, Material UI, Mantine, and Puppeteer.",
          "Collaboration on micro-frontend architecture and agile practices.",
        ],
      },
      {
        role: "Freelance Developer",
        company: "Workana Platform",
        period: "May 2024 — Present",
        mode: null,
        bullets: [
          "Development of applications with React and page SEO optimization.",
        ],
      },
      {
        role: "Back-end Developer",
        company: "IFAL (Scholarship)",
        period: "Jan 2020 — Sep 2020",
        mode: null,
        bullets: [
          "Worked on the back-end of the Hemeroteca project, a historical documentation system, using Django, Python, and JavaScript.",
          "Participated in the development of a platform for sharing and creating research projects.",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    viewCode: "View code",
    viewSite: "View site",
    items: [
      {
        title: "Nextjs-bird",
        description:
          "Nextjs-bird is a dynamic site built with Next.js, using data scraped from two websites via Puppeteer and organized in a CMS. The project includes a gallery of historical photos, integration with external APIs, and a search tool for bird identification. The entire application design was crafted to deliver an intuitive and engaging experience.",
      },
      {
        title: "Landing Page — Ponto Saber",
        description:
          "This project is a responsive landing page built with Next.js and styled-components, created as part of a technical challenge. The goal was to build a clear, modern, and functional interface, focused on performance and accessibility.\n\nWith this project, I was selected and won 1 year of access to the Rocketseat platform in 2023. This achievement marked an important step in my growth as a full stack developer, further strengthening my foundation in modern technologies such as React, Next.js, and TypeScript.",
      },
      {
        title: "Netflix Clone",
        description:
          "Netflix Clone is a web application built with React.js that recreates the visual interface of the Netflix homepage. The project's goal is to offer a viewing experience similar to the streaming platform, using data provided by the TMDB API. The application displays a variety of movies and TV shows, organized into categories such as 'Popular' and 'Recommended'. The interface is responsive, ensuring smooth navigation across different devices, from desktops to smartphones.",
      },
      {
        title: "NestJS Ride-Hailing Microservices",
        description:
          "A ride-hailing platform built with a NestJS microservices architecture, simulating the backend of an Uber-style app. The api-gateway receives client requests and communicates asynchronously via RabbitMQ with the authentications (auth and sign-up), rider (ride data and coordinates), and logging (event auditing) services, each with its own database (PostgreSQL and MongoDB). Deployment is automated via a GitHub Actions CI/CD pipeline that updates the code and rebuilds the Docker containers on the production VM on every push to main. The project includes a live demo with real-time visualization of the message flow between services.",
      },
    ],
  },
  contact: {
    title: "Contact",
    whatsapp: "WhatsApp",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    catOwner: "Cat mom",
    catNames: ["Kirara", "Mona", "Klee"],
    frontendTitle: "FrontEnd",
    frontendItems: ["Next js", "Sass", "Figma"],
    backendTitle: "BackEnd",
    backendItems: ["Next js", "Resend", "Various libs"],
    rights: "© 2024 LaryDev. All rights reserved",
  },
};
