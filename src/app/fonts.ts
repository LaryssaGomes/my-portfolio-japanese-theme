import { Reggae_One, Nobile } from "next/font/google";

export const font_display = Reggae_One({
  weight: "400",
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-display",
});

export const font_body = Nobile({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-body",
});
