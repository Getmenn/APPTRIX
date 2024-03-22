import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export type langs = 'ru' | 'en'
 

const resources = {
  en: {
    translation: {
      "Русский": "English",
      "Войти": "Login",
      "Ошибка авторизации": "Authorization error",
      "Выход": "Exit",
      "Имя": "Name:",
      "Почта": "Email:",
      "Купить": "Buy",
      "Адрес доставки": "Delivery address",
      "Наличные": "Cash",
      "Карта": "Сard",
    },
  },
  ru: {
    translation: {
      "Русский": "Русский",
      "Войти": "Войти",
      "Ошибка авторизации": "Ошибка авторизаци",
      "Выход": "Выход",
      "Имя": "Имя:",
      "Почта": "Почта:",
      "Купить": "Купить",
      "Адрес доставки": "Адрес доставки",
      "Наличные": "Наличные",
      "Карта": "Карта",
    },
  },
};

i18n
    // .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        lng: "en",
        debug: !!__IS_DEV__,

        interpolation: {
            escapeValue: false,
        },
        // backend: {
        //     loadPath: 'locales/{{lng}}/translation.json',
        // },
    });

export default i18n;
