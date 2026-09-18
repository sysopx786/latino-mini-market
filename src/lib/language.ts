import { useSyncExternalStore } from "react";

export type Lang = "en" | "es" | "pt";

export const LANGS = [
  { code: "en" as const, label: "English" },
  { code: "es" as const, label: "Español" },
  { code: "pt" as const, label: "Português" },
];

export const LANG_NAME: Record<Lang, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
};

export const LANG_SHORT: Record<Lang, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
};

const OTHER: Record<Lang, Lang[]> = {
  en: ["pt", "es"],
  es: ["pt", "en"],
  pt: ["en", "es"],
};

export function otherLangs(lang: Lang): Lang[] {
  return OTHER[lang];
}

const KEY = "lmm-lang-v2";
const EVENT = "lmm-lang";

function readLang(): Lang {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === "en" || stored === "es" || stored === "pt") return stored;
  } catch {
    /* ignore */
  }
  return "es";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribe, readLang, () => "es");
}

export function setLang(lang: Lang) {
  localStorage.setItem(KEY, lang);
  document.documentElement.lang = lang;
  window.dispatchEvent(new Event(EVENT));
}
