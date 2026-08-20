import type { Locale } from "@/content";

export const EMAIL = "rodriguezalfonso20@gmail.com";
export const GITHUB_URL = "https://github.com/forirodriguez";
export const LINKEDIN_URL = "https://www.linkedin.com/in/m-alfonso-rodriguez/";
export const CV_PATH = "/docs/CV-Alfonso-Rodriguez.pdf";

const WHATSAPP_NUMBER = "59891633855";

const whatsappText: Record<Locale, string> = {
  es: "Hola Alfonso, vi tu portfolio y me gustaría hablar con vos sobre una oportunidad.",
  en: "Hi Alfonso, I saw your portfolio and I'd like to talk to you about an opportunity.",
};

export const WHATSAPP_URL: Record<Locale, string> = {
  es: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappText.es
  )}`,
  en: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappText.en
  )}`,
};

export const MAILTO_URL = `mailto:${EMAIL}`;
