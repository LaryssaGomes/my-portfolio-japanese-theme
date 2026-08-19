"use client";
import Image from "next/image";
import styles from "./footer.module.scss";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.footer}>
      <Image
        src="/imagens/footer.svg"
        layout="responsive"
        width={1920}
        height={470}
        alt="Cloud"
      />
      <footer className={styles.footer__container}>
        <div className={styles.footer__grid}>
          <div className={styles.footer__social_links}>
            <div>Linkedin</div>
            <div>Pinterest</div>
          </div>
          <div className={styles.footer__content}>
            <div>{t.footer.catOwner}</div>
            {t.footer.catNames.map((name) => (
              <div key={name}>{name}</div>
            ))}
          </div>
          <div className={styles.footer__content}>
            <div>{t.footer.frontendTitle}</div>
            {t.footer.frontendItems.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
          <div className={styles.footer__content}>
            <div>{t.footer.backendTitle}</div>
            {t.footer.backendItems.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div>{t.footer.rights}</div>
          <div className={styles.footer__bottom_links}></div>
        </div>
      </footer>
    </div>
  );
};
