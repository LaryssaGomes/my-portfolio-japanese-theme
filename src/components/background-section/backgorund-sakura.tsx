import React from "react";
import "./backgorund-sakura.scss";
import Image from "next/image";
import { Contact } from "../forms/contact";
import { Project } from "./project";

export const SectionSakura = () => {
  return (
    <section className="project-contato-section">
      <Project />
      <Contact />
      <Image
        priority
        src="/imagens/background/sakura-tree-01.svg"
        width={296}
        height={868}
        alt="Tree Sakura"
      />
      <Image
        priority
        src="/imagens/background/sakura-tree.svg"
        width={444}
        height={362}
        alt="Tree Sakura"
      />
      <Image
        priority
        src="/imagens/background/sakura.svg"
        width={330}
        height={218}
        alt="Tree Sakura"
      />
      <Image
        priority
        src="/imagens/background/sakura-tree-02.svg"
        width={522}
        height={319}
        alt="Tree Sakura"
      />
    </section>
  );
};
