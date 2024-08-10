"use client";
import React from "react";
import styles from "./backgorund-lake.module.scss";
import Image from "next/image";
import BackgroundImages from "./BackgroundImages";
import { Skills } from "./skills";
import AboutMe from "./about-me";

export const SectionLake = () => {
  return (
    <div className={styles.section}>
      <BackgroundImages />

      <div className={styles.conteudo}>
        <Image
          priority
          src="/imagens/background/templos-moon.svg"
          width={1920}
          height={696}
          alt="Tree"
        />

        <AboutMe />
        <Skills />
      </div>
    </div>
  );
};
