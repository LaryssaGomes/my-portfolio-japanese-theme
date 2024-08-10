import React from "react";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="/">
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#about">
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#skills">
              Skills
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#projects">
              Projects
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
