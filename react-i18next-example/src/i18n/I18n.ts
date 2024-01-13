import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationDefault from "./message/messages.json";
import translationEnglish from "./message/messages_en.json";
import translationBangla from "./message/messages_bn.json";

//---Using translation
// const resources = {
//     en: {
//         translation: translationEnglish,
//     },
//     es: {
//         translation: translationSpanish,
//     },
//     fr: {
//         translation: translationFrench,
//     },
// }

//---Using different namespaces
// const resources = {
//     en: {
//         home: translationEnglish,
//         main: translationEnglishSecondFile,
//     },
//     es: {
//         home: translationSpanish,
//     },
//     fr: {
//         home: translationFrench,
//     },
// }


const resources = {
    default: {translation: translationDefault},
    en: {translation: translationEnglish},
    bn: {translation: translationBangla},
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;