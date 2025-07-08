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
            Sou Laryssa Gomes, desenvolvedora full stack. Tenho paixão por
            transformar ideias complexas em soluções bem estruturadas, com
            código limpo, escalável e alinhado a boas práticas. Gosto de unir o
            detalhe visual ao pensamento estratégico — criando experiências que
            não só funcionam bem, mas que também contam uma história.
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
