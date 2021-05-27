import {
  HashMap,
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from '@ngneat/transloco';

export function getTranslocoModule(
  options: TranslocoTestingOptions = {},
  langs: HashMap
) {
  return TranslocoTestingModule.forRoot({
    // langs: { en, es },
    langs: { ...langs },
    translocoConfig: {
      availableLangs: ['en', 'es'],
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options,
  });
}
