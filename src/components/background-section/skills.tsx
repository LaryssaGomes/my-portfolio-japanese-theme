import React from "react";
import styles from "./skill.module.scss";
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
  return (
    <div className={styles.skillsContainer} id="skills">
      <h3 className={styles.skillsContainer__title}>Skills</h3>
      <div className={styles.skillsContainer__grid}>
        <SkillCategory
          title="Front-end"
          skills={[
            "React.js",
            "Next.js",
            "Vue.js",
            "Styled Components",
            "Tailwind",
            "Material UI",
            "Bootstrap",
            "Micro-frontend",
          ]}
        />
        <SkillCategory
          title="Back-end"
          skills={[
            "Node.js",
            "NestJS",
            "Django",
            "Python",
            "Java",
            "Spring Boot",
            "Go",
            "APIs REST",
          ]}
        />
        <SkillCategory
          title="Banco de Dados"
          skills={["MongoDB", "PostgreSQL", "MySQL"]}
        />
        <SkillCategory
          title="Testes"
          skills={["Jest", "Cypress", "Testing Library"]}
        />
        <SkillCategory
          title="Ferramentas & Outros"
          skills={[
            "Git",
            "GitHub",
            "Linux",
            "WordPress",
            "Puppeteer",
            "Webcrawler",
            "AWS",
          ]}
        />
        <SkillCategory
          title="Metodologias"
          skills={[
            "Ágeis (Scrum / Kanban)",
            "Arquitetura de Microsserviços",
            "MVC",
            "Modelagem de Domínio",
          ]}
        />
      </div>
    </div>
  );
};
