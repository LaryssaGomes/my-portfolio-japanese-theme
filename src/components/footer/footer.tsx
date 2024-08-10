import Image from "next/image";
import styles from "./footer.module.scss";

export const Footer = () => {
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
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Linkedin</div>
            <div>Pinterest</div>
          </div>
          <div className={styles.footer__content}>
            <div>Dateenschutz</div>
            <div>Impressum</div>
            <div>Cookie</div>
            <div>Policy AGBs</div>
          </div>
          <div className={styles.footer__content}>
            <div>Dateenschutz</div>
            <div>Impressum</div>
            <div>Cookie</div>
            <div>Policy AGBs</div>
          </div>
          <div className={styles.footer__content}>
            <div>Dateenschutz</div>
            <div>Impressum</div>
            <div>Cookie</div>
            <div>Policy AGBs</div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div>© 2020 Lift Media. All rights reserved</div>
          <div className={styles.footer__bottom_links}>
            <div>Dateenschutz</div>
            <div>Impressum</div>
            <div>Cookie</div>
            <div>Policy AGBs</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
