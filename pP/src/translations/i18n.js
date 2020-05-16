import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import en from './en';
import ru from './ru';

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            ru:{
                translation: ru,
            }
        },
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
