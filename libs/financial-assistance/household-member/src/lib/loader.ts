// eslint-disable-next-line unicorn/no-array-reduce
export const loader = ['en', 'es'].reduce(
  (accumulator: { [language: string]: unknown }, lang: string) => {
    accumulator[lang] = () => import(`./i18n/${lang}.json`);
    return accumulator;
  },
  {}
);
