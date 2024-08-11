import React from "react";
import "./project.styles.scss";
import { CardProject } from "@/components/cards/card-project";
import { Tag } from "../Tag/Tags";

export const Project = () => {
  return (
    <section className="project" id="projects">
      <h3>Projetos</h3>
      <div className="tags">
        <Tag color="#81CD39"> Next</Tag>
        <Tag color="#202147"> Styles-component</Tag>
      </div>

      <div className="cards">
        <CardProject
          title={"Nextjs-bird"}
          description="Nextjs-bird é um site dinâmico desenvolvido com Next.js, usando dados extraídos de dois sites via Puppeteer e organizados em um CMS. O projeto inclui uma galeria de fotos históricas, integração com APIs externas, e uma ferramenta de pesquisa para identificação de aves. Todo o design da aplicação foi criado para oferecer uma experiência intuitiva e envolvente."
          tags={[
            { name: "Next", color: "#81CD39" },
            { name: "Styles-component", color: "#202147" },
            { name: "Figma", color: "#f35c5c" },
            { name: "Puppeteer", color: "#5415ac" },
          ]}
          infoLink={"https://github.com/LaryssaGomes/Nextjs-bird"}
          projectLink={"https://nextjs-bird-exfhmmgon-laryssagomes.vercel.app/"}
          image="/imagens/projetos/bird.png"
        />
        <CardProject
          title={"Titulo"}
          description="Sou uma desenvolvedora full stack Jr apaixonada por criar
                  soluções inovadoras e eficientes para problemas reais.
                  Atualmente, trabalho na Omega Energia, uma empresa que atua no
                  setor de energia renovável, onde utilizo React Hooks, Nest.js,
                  Next, TypeScript, Node e styled-com ...Sou uma desenvolvedora
                  full stack Jr apaixonada por criar soluções inovadoras e
                  eficientes para problemas reais. Atualmente, trabalho na Omega
                  Energia, uma empresa que atua no setor de energia"
          tags={[
            { name: "Next", color: "#81CD39" },
            { name: "Styles-component", color: "#202147" },
          ]}
          infoLink={""}
          projectLink={"https://desafio-iota.vercel.app/"}
          image="/imagens/projetos/lp_ponto_saber.png"
        />
        <CardProject
          title="Clone Netflix"
          description="Netflix Clone é uma aplicação web desenvolvida com React.js que recria a interface visual da página inicial da Netflix. O objetivo do projeto é oferecer uma experiência visual semelhante à plataforma de streaming, utilizando dados fornecidos pela API TMDB. A aplicação exibe uma variedade de filmes e séries de TV, organizados em categorias como 'Populares' e 'Recomendados'. A interface é responsiva, garantindo uma navegação fluida em diferentes dispositivos, desde desktops até smartphones."
          tags={[
            { name: "React", color: "#cc34da" },
            { name: "Css", color: "#bb5418" },
          ]}
          infoLink={"https://github.com/LaryssaGomes/clone-netflix"}
          projectLink={
            "https://clone-netflix-o0dvwzxh2-laryssagomes-projects.vercel.app/watch/239526"
          }
          image="/imagens/projetos/netlfix_clone.png"
        />
      </div>
    </section>
  );
};
