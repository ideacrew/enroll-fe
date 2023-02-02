import { Injectable, isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Translation,
  translocoConfig,
  TranslocoLoader,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  TRANSLOCO_MISSING_HANDLER,
} from '@ngneat/transloco';
import { CustomHandler } from './custom-handler';

@Injectable({ providedIn: 'root' })
export class GenericTranslationsLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {
    console.log('shared i18n');
  }

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'es'],
        defaultLang: 'en',
        // Remove this option if your application
        // doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: GenericTranslationsLoader },
    { provide: TRANSLOCO_MISSING_HANDLER, useClass: CustomHandler },
  ],
  exports: [TranslocoModule],
})
export class GenericTranslationsModule {}
