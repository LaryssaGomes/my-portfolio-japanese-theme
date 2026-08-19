"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./language-toggle.module.scss";

export const LanguageToggle = () => {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleLocale}
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para português"}
    >
      <span className={locale === "pt" ? styles.active : undefined}>PT</span>
      <span className={styles.divider}>/</span>
      <span className={locale === "en" ? styles.active : undefined}>EN</span>
    </button>
  );
};
