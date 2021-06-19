import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

export const loader = ['en', 'es'].reduce(
  (acc: { [language: string]: unknown }, lang: string) => {
    acc[lang] = () => import(`./i18n/${lang}.json`);
    return acc;
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
export class CovermeI18nModule {}
