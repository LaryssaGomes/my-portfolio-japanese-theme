import React from "react";
import "./project.styles.scss";
import projeto from "./Captura.png";
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
          projectLink={""}
          image={projeto}
        />
      </div>
    </section>
  );
};
