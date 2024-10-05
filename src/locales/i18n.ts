// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    login: 'Log In',
  },
  fr: {
    login: 'Connexion',
  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;
