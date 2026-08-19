import type { Metadata } from "next";
import Script from "next/script";

import { font_display, font_body } from "./fonts";
import { TimeThemeUpdater } from "@/components/time-theme/TimeThemeUpdater";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laryssa Gomes",
  description: "Portfólio de Laryssa Gomes",
};

const SET_INITIAL_DAYTIME_SCRIPT = `
(function () {
  try {
    var hour = parseInt(
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Sao_Paulo",
        hour: "numeric",
        hour12: false,
      }).format(new Date()),
      10
    );
    var period = "night";
    if (hour >= 5 && hour < 8) period = "dawn";
    else if (hour >= 8 && hour < 17) period = "day";
    else if (hour >= 17 && hour < 19) period = "dusk";
    document.documentElement.setAttribute("data-daytime", period);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font_body.className} ${font_display.variable}`}>
        <Script id="set-initial-daytime" strategy="beforeInteractive">
          {SET_INITIAL_DAYTIME_SCRIPT}
        </Script>
        <TimeThemeUpdater />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
