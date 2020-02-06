import en from './en'
import languages from "./language";

export var globalState = {language: "en"}

export function __t(w) {
    let l = getLanguage(globalState.language)
    return l[w] ? l[w] : en[w] ? en[w] : w

}

export function getLanguage(lang = 'en') {
    if (languages[lang]) {
        return languages[lang]
    }
    return languages['en']
}