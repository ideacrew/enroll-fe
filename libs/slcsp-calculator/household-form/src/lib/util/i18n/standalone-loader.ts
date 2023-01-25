import { Translation } from '@ngneat/transloco';

const availableLangs = ['en', 'es'];

type Importer = (lang: string, root: string) => Promise<Translation>;

export const scopeLoader = (importer: Importer, root = 'i18n') =>
  // eslint-disable-next-line unicorn/no-array-reduce
  availableLangs.reduce((accumulator, language) => {
    accumulator[language] = () => importer(language, root);
    return accumulator;
  }, {} as Translation);
