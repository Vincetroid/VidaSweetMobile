import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import { english, spanish } from './src/translations';

let locale = '';
if (Platform.OS === 'ios') {
  locale =
    NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0];
} else {
  locale = NativeModules.I18nManager.localeIdentifier;
}

console.log('english');
console.log(english, spanish);

const resources = {
  en: {
    translation: english,
  },
  es: {
    translation: spanish,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: locale,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
