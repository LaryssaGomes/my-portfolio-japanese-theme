import React from "react";
import styles from "./main.module.scss";
import Image from "next/image";
import clsx from "clsx";

export const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.stars} aria-hidden="true" />
      <h1 className={styles.heading}>
        Olá, eu sou <span className={styles.nameHighlight}>Laryssa Gomes</span>
      </h1>
      <Image
        priority
        src="/imagens/tree.webp"
        layout="responsive"
        width={2400}
        height={882}
        sizes="100vw"
        alt="Tree illustration"
        className={clsx(styles.image, styles.dayImage)}
      />
      <Image
        priority
        src="/imagens/tree-night.webp"
        layout="responsive"
        width={2400}
        height={882}
        sizes="100vw"
        alt="Tree illustration"
        className={clsx(styles.image, styles.nightImage)}
      />
    </main>
  );
};
