import React from "react";
import "./project.styles.scss";
import { CardProject } from "@/components/cards/card-project";
export const Project = () => {
  return (
    <section className="project" id="projects">
      <h3>Projetos</h3>

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
          image={{ url: "/imagens/projetos/bird.png", width: 424, height: 585 }}
        />
        <CardProject
          title="Landing Page — Ponto Saber"
          description={`Este projeto é uma landing page responsiva desenvolvida com Next.js e styled-components, criada como parte de um desafio técnico. A proposta era construir uma interface clara, moderna e funcional, focada em performance e acessibilidade.

Com esse projeto, fui selecionada e ganhei 1 ano de acesso à plataforma da Rocketseat em 2023. Essa conquista marcou um passo importante no meu desenvolvimento como desenvolvedora full stack, fortalecendo ainda mais minha base em tecnologias modernas como React, Next.js e TypeScript.`}
          tags={[
            { name: "Next", color: "#81CD39" },
            { name: "Styled-components", color: "#202147" },
          ]}
          infoLink={""}
          projectLink={"https://desafio-iota.vercel.app/"}
          image={{
            url: "/imagens/projetos/lp_ponto_saber.png",
            width: 441,
            height: 797,
          }}
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
          image={{
            url: "/imagens/projetos/netlfix_clone.png",
            width: 1523,
            height: 906,
          }}
        />
      </div>
    </section>
  );
};
