import React, { ReactNode } from "react";
import styles from "./tag.module.scss";

interface TagProps {
  color: string;
  children: ReactNode;
}
export const Tag = ({ color, children }: TagProps) => {
  return (
    <div className={styles.tag} style={{ background: color }}>
      {children}
    </div>
  );
};
