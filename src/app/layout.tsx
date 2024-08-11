import type { Metadata } from "next";

import { font_display, font_body } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laryssa Gomes",
  description: "Portfólio de Laryssa Gomes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font_body.className} ${font_display.variable}`}>
        {children}
      </body>
    </html>
  );
}
