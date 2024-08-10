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
            "Next.js / React",
            "Styled Components",
            "Sass / Less",
            "Micro Frontend Architecture",
          ]}
        />
        <SkillCategory
          title="Back-end"
          skills={["Nest.js", "Node.js", "Python"]}
        />
        <SkillCategory
          title="Web Design"
          skills={["Web Design", "Illustrations", "Figma"]}
        />
        <SkillCategory
          title="SEO and Testing"
          skills={["SEO Optimization", "Testing", "WordPress"]}
        />
        <SkillCategory
          title="Soft Skills"
          skills={[
            "Trabalho em equipe",
            "Resolução de problemas",
            "Adaptabilidade",
            "Gestão do tempo",
            "Criatividade",
          ]}
        />
      </div>
    </div>
  );
};
