export * from './lib/i18n-coverme.module';

// Translations in POJO format
// cf.https://stackoverflow.com/questions/41892470/how-to-reexport-from-a-module-that-uses-export
import * as en from './lib/assets/i18n/en.json';
import * as es from './lib/assets/i18n/es.json';
export { en, es };
