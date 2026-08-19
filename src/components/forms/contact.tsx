"use client";
import { Box } from "../BoxProject/Box";
import styles from "./form-contact.module.scss";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_NUMBER = "5511998832644";
const EMAIL = "laryssag533@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/laryssa-gomes-030339198";
const GITHUB_URL = "https://github.com/LaryssaGomes";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 448 512" width="40" height="40" fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 224.1 32c-122.6 0-222 99.4-222 222 0 39.2 10.3 77.6 29.8 111.1L4.1 480l117.9-30.9c32.1 17.6 68.3 26.9 105.2 26.9h.1c122.6 0 222-99.4 222-222 0-59.2-23.1-115-65-157.9zM224.1 448.9h-.1c-32.6 0-64.6-8.7-92.5-25.3l-6.6-3.9-68.9 18.1 18.4-67.2-4.3-6.9c-18.3-29.1-28-62.7-28-97.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.9 34.9 54.7 81.2 54.6 130.5 0 101.8-82.8 184.6-184.6 184.6zm101.2-138.3c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 18-17.6 21.7-3.2 3.7-6.5 4.2-12 1.4-32.4-16.2-53.6-28.9-75-65.6-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.6-9.7-1.5-2.8-13.4-32.3-18.4-44.2-4.8-11.6-9.7-10-13.4-10.2-3.5-.2-7.5-.2-11.5-.2-4 0-10.4 1.5-15.9 7.4-5.5 5.9-21 20.5-21 50 0 29.5 21.5 58 24.4 62 2.9 4 41 62.5 100.4 87.9 50.4 21.7 60.7 17.4 71.7 16.3 11-1.1 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.2-5.4-3.5-10.9-6.3z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
    <path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 448 512" width="40" height="40" fill="currentColor">
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338a53.94 53.94 0 1 1 53.94-53.94A53.94 53.94 0 0 1 53.84 110zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.28 61.9 111.28 142.3z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 16 16" width="40" height="40" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

export const Contact = () => {
  const { t } = useLanguage();

  const contactLinks = [
    { label: t.contact.whatsapp, href: `https://wa.me/${WHATSAPP_NUMBER}`, Icon: WhatsAppIcon },
    { label: t.contact.email, href: `mailto:${EMAIL}`, Icon: EmailIcon },
    { label: t.contact.linkedin, href: LINKEDIN_URL, Icon: LinkedInIcon },
    { label: t.contact.github, href: GITHUB_URL, Icon: GitHubIcon },
  ];

  return (
    <section className={styles.contact} id="contact">
      <h3>{t.contact.title}</h3>
      <div className={styles.contactGrid}>
        {contactLinks.map(({ label, href, Icon }) => (
          <div className={styles.stamp} key={label}>
            <Box>
              <a
                className={styles.contactCard}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
                <span>{label}</span>
              </a>
            </Box>
          </div>
        ))}
      </div>
    </section>
  );
};
