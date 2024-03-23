import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export type langs = 'ru' | 'en'

const resources = {
    en: {
        translation: {
            Русский: 'English',
            Войти: 'Login',
            'Ошибка авторизации': 'Authorization error',
            'Ошибка на стороне сервера': 'Server side error',
            Выход: 'Exit',
            Имя: 'Name:',
            Почта: 'Email:',
            Купить: 'Buy',
            'Адрес доставки': 'Delivery address',
            Наличные: 'Cash',
            Карта: 'Сard',
            Заказать: 'Order',
            'Корзина пуста': 'Cart is empty',
            Сумма: 'Sum:',
            Заказы: 'Orders',
            Меню: 'Menu',
            'Заказ добавлен в корзину': 'Order added to cart',
            'Заказ успешно сформирован': 'The order has been successfully completed',
            'На странице возникла ошибка': 'There was an error on the page',
            'Такой страницы не существует': 'This page does not exist',
        },
    },
    ru: {
        translation: {
            Русский: 'Русский',
            Войти: 'Войти',
            'Ошибка авторизации': 'Ошибка авторизаци',
            'Ошибка на стороне сервера': 'Ошибка на стороне сервера',
            Выход: 'Выход',
            Имя: 'Имя:',
            Почта: 'Почта:',
            Купить: 'Купить',
            'Адрес доставки': 'Адрес доставки',
            Наличные: 'Наличные',
            Карта: 'Карта',
            Заказать: 'Заказать',
            'Корзина пуста': 'Корзина пуста',
            Сумма: 'Сумма:',
            Заказы: 'Заказы',
            Меню: 'Меню',
            'Заказ добавлен в корзину': 'Заказ добавлен в корзину',
            'Заказ успешно сформирован': 'Заказ успешно сформирован',
            'На странице возникла ошибка': 'На странице возникла ошибка',
            'Такой страницы не существует': 'Такой страницы не существует',
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
        debug: !!__IS_DEV__,

        interpolation: {
            escapeValue: false,
        },
        // backend: {
        //     loadPath: 'locales/{{lng}}/translation.json',
        // },
    });

export default i18n;
