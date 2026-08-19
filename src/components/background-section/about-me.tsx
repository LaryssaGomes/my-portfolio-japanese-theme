"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/forms/button";
import styles from "./about-me.module.scss";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutMe = () => {
  const { t, locale } = useLanguage();

  const handleDownload = () => {
    const isEnglish = locale === "en";
    const link = document.createElement("a");
    link.href = isEnglish ? "/curriculo-en.pdf" : "/curriculo.pdf";
    link.download = isEnglish
      ? "Laryssa_Gomes_Resume.pdf"
      : "Laryssa_Gomes_Curriculo.pdf";
    document.body.appendChild(link); // Necessário para Firefox
    link.click();
    document.body.removeChild(link); // Limpar o elemento após o clique
  };

  return (
    <div className={styles.aboutMeContainer} id="about">
      <h3>{t.about.title}</h3>
      <div className={styles.aboutMeContent}>
        <Image
          src="/imagens/myPhoto.jpeg"
          width={250}
          height={250}
          alt="My Photo"
          className={styles.profilePhoto}
        />
        <div className={styles.aboutMeText}>
          <p>{t.about.text}</p>
          <Button onClick={handleDownload} color="var(--accent-button)">
            {t.about.downloadCv}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
