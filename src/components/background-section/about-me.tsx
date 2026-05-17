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
            Sou Laryssa Gomes, desenvolvedora Full Stack Sênior, focada em
            aplicações escaláveis e de alta performance com React, Next.js,
            Node.js e NestJS. Atualmente, na Aposta Premia, lidero a migração
            de um monolito para microsserviços em um ambiente de alto volume
            de acessos.
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
