import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: "Modern Interface",
          subtitle: "Select your preferred language below.",
          footer: "Built with React & Tailwind"
        }
      },
      es: {
        translation: {
          title: "Interfaz Moderna",
          subtitle: "Seleccione su idioma preferido a continuación.",
          footer: "Construido con React y Tailwind"
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
