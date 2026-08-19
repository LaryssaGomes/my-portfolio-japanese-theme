"use client";
import React from "react";
import Image from "next/image";
import styles from "./experience-timeline.module.scss";
import { useLanguage } from "@/i18n/LanguageContext";

export const ExperienceTimeline = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.timeline} id="experience">
      <Image
        src="/imagens/arvoredafrente.svg"
        width={602}
        height={372}
        alt=""
        aria-hidden="true"
        className={styles.treeLeft}
      />
      <Image
        src="/imagens/arvoreescada.webp"
        width={900}
        height={703}
        alt=""
        aria-hidden="true"
        className={styles.treeRight}
      />
      <h3 className={styles.title}>{t.experience.title}</h3>
      <ol className={styles.steps}>
        {t.experience.items.map((exp) => (
          <li key={`${exp.company}-${exp.period}`} className={styles.step}>
            <span className={styles.marker} aria-hidden="true" />
            <div className={styles.card}>
              <h4 className={styles.role}>{exp.role}</h4>
              <p className={styles.meta}>
                {exp.company} <span className={styles.period}>· {exp.period}</span>
              </p>
              {exp.mode && <p className={styles.mode}>{exp.mode}</p>}
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
