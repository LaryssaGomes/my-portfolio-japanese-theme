"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/forms/button";
import styles from "./about-me.module.scss";

const AboutMe = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/curriculo.pdf"; // Caminho do seu arquivo PDF na pasta public
    link.download = "Laryssa_Gomes_Curriculo.pdf"; // Nome do arquivo baixado
    document.body.appendChild(link); // Necessário para Firefox
    link.click();
    document.body.removeChild(link); // Limpar o elemento após o clique
  };

  return (
    <div className={styles.aboutMeContainer} id="about">
      <h3>Sobre mim</h3>
      <div className={styles.aboutMeContent}>
        <Image
          priority
          src="/imagens/myPhoto.jpeg"
          width={250}
          height={250}
          alt="My Photo"
          className={styles.profilePhoto}
        />
        <div className={styles.aboutMeText}>
          <p>
            Sou uma desenvolvedora full stack Jr apaixonada por criar soluções
            inovadoras e eficientes para problemas reais. Atualmente, trabalho
            na Omega Energia, uma empresa que atua no setor de energia renovável
            de um sistema de documentação histórica, usando Django, Python e JS.
            Nesses projetos, adquiri competências em MVC, CSS-in-JS, banco de
            dados, API e testes automatizados.
          </p>
          <Button onClick={handleDownload} color="#E13A4B">
            Baixar Curriculo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
