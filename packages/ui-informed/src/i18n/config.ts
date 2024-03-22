import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation from './cs/translation.json';

const defaultNS = 'translation';
const resources = {
  cs: { translation },
} as const;

// Init i18next
i18next.use(initReactI18next).init({
  lng: 'cs',
  fallbackLng: 'cs',
  defaultNS,
  resources,
});

// Enable autocomplete
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['cs'];
  }
}
