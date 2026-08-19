"use client";
import React from "react";
import styles from "./header.module.scss";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "@/components/language-toggle/language-toggle";

export const Header = () => {
  const { t } = useLanguage();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="/">
              {t.nav.home}
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#about">
              {t.nav.about}
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#skills">
              {t.nav.skills}
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#experience">
              {t.nav.experience}
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#projects">
              {t.nav.projects}
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#contact">
              {t.nav.contact}
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.langToggle}>
        <LanguageToggle />
      </div>
    </header>
  );
};
