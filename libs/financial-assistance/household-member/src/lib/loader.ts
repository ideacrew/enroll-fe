export const loader = ['en', 'es'].reduce(
  (acc: { [language: string]: unknown }, lang: string) => {
    acc[lang] = () => import(`./i18n/${lang}.json`);
    return acc;
  },
  {}
);
