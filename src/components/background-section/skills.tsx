"use client";
import React from "react";
import styles from "./skill.module.scss";
import { useLanguage } from "@/i18n/LanguageContext";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className={styles.skillCategory}>
    <h3 className={styles.skillCategory__title}>{title}</h3>
    <ul className={styles.skillCategory__list}>
      {skills.map((skill) => (
        <li key={skill} className={styles.skillCategory__item}>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.skillsContainer} id="skills">
      <h3 className={styles.skillsContainer__title}>{t.skills.title}</h3>
      <div className={styles.skillsContainer__grid}>
        {t.skills.categories.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.items}
          />
        ))}
      </div>
    </div>
  );
};
