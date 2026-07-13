import React from "react";
import Image from "next/image";
import styles from "./mountain-divider.module.scss";

export const MountainDivider = () => {
  return (
    <div className={styles.landscape}>
      <div className={styles.fog} aria-hidden="true" />
      <Image
        src="/imagens/montanha03templo.svg"
        width={761}
        height={483}
        alt=""
        className={styles.layerTemple}
        aria-hidden="true"
      />
      <Image
        src="/imagens/arvoredafrente.svg"
        width={602}
        height={372}
        alt=""
        className={styles.layerFront}
        aria-hidden="true"
      />
      <Image
        src="/imagens/sakura.svg"
        width={1212}
        height={1062}
        alt=""
        className={styles.layerFrontRight}
        aria-hidden="true"
      />
    </div>
  );
};
