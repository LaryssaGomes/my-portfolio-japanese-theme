import { Dictionary, Locale } from "./types";
import { pt } from "./pt";
import { en } from "./en";

export * from "./types";
export const dictionaries: Record<Locale, Dictionary> = {
  pt,
  en,
};
