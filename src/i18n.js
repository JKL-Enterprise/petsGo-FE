import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translationPL } from './locales/pl/translationPL.js'

const resources = {
  pl: {
    translation: translationPL,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'pl',

  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
