"use client";
import React from "react";
import "./project.styles.scss";
import { CardProject } from "@/components/cards/card-project";
import { useLanguage } from "@/i18n/LanguageContext";

const PROJECT_META = [
  {
    tags: [
      { name: "Next", color: "#81CD39" },
      { name: "Styles-component", color: "#202147" },
      { name: "Figma", color: "#f35c5c" },
      { name: "Puppeteer", color: "#5415ac" },
    ],
    infoLink: "https://github.com/LaryssaGomes/Nextjs-bird",
    projectLink: "https://nextjs-bird-exfhmmgon-laryssagomes.vercel.app/",
    image: { url: "/imagens/projetos/bird.png", width: 424, height: 585 },
  },
  {
    tags: [
      { name: "Next", color: "#81CD39" },
      { name: "Styled-components", color: "#202147" },
    ],
    infoLink: "",
    projectLink: "https://desafio-iota.vercel.app/",
    image: {
      url: "/imagens/projetos/lp_ponto_saber.png",
      width: 441,
      height: 797,
    },
  },
  {
    tags: [
      { name: "NestJS", color: "#E0234E" },
      { name: "RabbitMQ", color: "#FF6600" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Docker", color: "#0db7ed" },
      { name: "CI/CD", color: "#2088FF" },
    ],
    infoLink: "https://github.com/LaryssaGomes/nestjs-ride-hailing-microservices",
    projectLink: "https://rides.catverse.com.br/demo",
    image: {
      url: "/imagens/projetos/ride_hailing.webp",
      width: 900,
      height: 578,
    },
  },
];

export const Project = () => {
  const { t } = useLanguage();

  return (
    <section className="project" id="projects">
      <h3>{t.projects.title}</h3>

      <div className="cards">
        {t.projects.items.map((item, index) => {
          const meta = PROJECT_META[index];
          return (
            <CardProject
              key={item.title}
              title={item.title}
              description={item.description}
              tags={meta.tags}
              infoLink={meta.infoLink}
              projectLink={meta.projectLink}
              image={meta.image}
              viewCodeLabel={t.projects.viewCode}
              viewSiteLabel={t.projects.viewSite}
            />
          );
        })}
      </div>
    </section>
  );
};
