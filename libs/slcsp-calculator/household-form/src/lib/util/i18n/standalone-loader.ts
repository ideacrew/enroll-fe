import { Translation } from '@ngneat/transloco';

const availableLangs = ['en', 'es'];

type Importer = (lang: string, root: string) => Promise<Translation>;

export const scopeLoader = (importer: Importer, root = 'i18n') =>
  availableLangs.reduce((accumulator, language) => {
    accumulator[language] = () => importer(language, root);
    return accumulator;
  }, {} as Translation);
