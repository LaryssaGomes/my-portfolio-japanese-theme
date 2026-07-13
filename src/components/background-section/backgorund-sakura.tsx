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
        src="/imagens/sakura.svg"
        width={1212}
        height={1062}
        alt="Tree Sakura"
      />
      <Image
        priority
        src="/imagens/arvoredafrente.svg"
        width={602}
        height={372}
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
        src="/imagens/arvoreescada.svg"
        width={305}
        height={238}
        alt="Tree Sakura"
      />
    </section>
  );
};
