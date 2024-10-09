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
            <div>Linkedin</div>
            <div>Pinterest</div>
          </div>
          <div className={styles.footer__content}>
            <div>Dona das gatinhas</div>
            <div>Kirara</div>
            <div>Mona</div>
            <div>Klee</div>
          </div>
          <div className={styles.footer__content}>
            <div>FrontEnd</div>
            <div>Next js</div>
            <div>Sass</div>
            <div>Figma</div>
          </div>
          <div className={styles.footer__content}>
            <div>BackEnd</div>
            <div>Next js</div>
            <div>Resend</div>
            <div>Libs diversas</div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div>© 2024 LaryDev. All rights reserved</div>
          <div className={styles.footer__bottom_links}>
          </div>
        </div>
      </footer>
    </div>
  );
};
