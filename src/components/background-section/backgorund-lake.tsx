"use client";
import React from "react";
import styles from "./backgorund-lake.module.scss";
import BackgroundImages from "./BackgroundImages";
import { Skills } from "./skills";
import AboutMe from "./about-me";

export const SectionLake = () => {
  return (
    <div className={styles.section}>
      <BackgroundImages />

      <div className={styles.conteudo}>
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
};
