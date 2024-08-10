import React from "react";
import styles from "./main.module.scss";
import Image from "next/image";

export const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.heading}>
        Olá, eu sou <span className={styles.nameHighlight}>Laryssa Gomes</span>
      </h1>
      <Image
        priority
        src="/imagens/tree.svg"
        layout="responsive"
        width={1920}
        height={702}
        sizes="100vw"
        alt="Tree illustration"
        className={styles.image}
      />
    </main>
  );
};
