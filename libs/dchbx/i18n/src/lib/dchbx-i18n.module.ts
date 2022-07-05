import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

// eslint-disable-next-line unicorn/no-array-reduce
export const loader = ['en', 'es'].reduce(
  (accumulator: { [language: string]: unknown }, lang: string) => {
    accumulator[lang] = () => import(`./i18n/${lang}.json`);
    return accumulator;
  },
  {}
);

@NgModule({
  imports: [CommonModule, TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'client',
        loader,
      },
    },
  ],
})
export class DchbxI18nModule {}
