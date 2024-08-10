import React from "react";
import Image from "next/image";
import styles from "./backgroundimages.module.scss";

const BackgroundImages = () => {
  return (
    <div className={styles.backgroundImages}>
      <div className={styles.details}>
        <Image
          priority
          src="/imagens/background/cloud-01.svg"
          width={500}
          height={500}
          alt="Cloud"
        />
        <Image
          priority
          src="/imagens/background/cloud-02.svg"
          width={500}
          height={500}
          alt="Cloud"
        />
        <Image
          priority
          src="/imagens/background/cloud-02.svg"
          width={500}
          height={500}
          alt="Cloud"
        />
        <Image
          priority
          src="/imagens/background/cloud-03.svg"
          width={500}
          height={500}
          alt="Cloud"
        />
        <Image
          priority
          src="/imagens/background/cloud-03.svg"
          width={500}
          height={500}
          alt="Cloud"
        />
        <Image
          priority
          src="/imagens/background/cloud-03.svg"
          width={500}
          height={500}
          alt="Cloud"
        />
        <Image
          priority
          src="/imagens/background/cloud-04.svg"
          width={194}
          height={105}
          alt="Cloud"
        />
        <div className={styles.details_mobile}>
          <Image
            priority
            src="/imagens/background/cloud-03.svg"
            width={500}
            height={500}
            alt="Cloud"
          />
          <Image
            priority
            src="/imagens/background/cloud-03.svg"
            width={500}
            height={500}
            alt="Cloud"
          />
          <Image
            priority
            src="/imagens/background/cloud-03.svg"
            width={500}
            height={500}
            alt="Cloud"
          />
          <Image
            priority
            src="/imagens/background/cloud-04.svg"
            width={194}
            height={105}
            alt="Cloud"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundImages;
