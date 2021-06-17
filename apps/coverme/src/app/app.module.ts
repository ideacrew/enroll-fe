import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UiBaseShellModule } from '@enroll/ui/base/shell';
import { RootStoreModule } from '@enroll/shared/state/root-store';
import { I18nSharedModule } from '@enroll/i18n/shared';
import { I18nCovermeModule } from '@enroll/i18n/coverme';
import { TITLE_EXTENSION } from '@enroll/shared/page-title';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  imports: [
    BrowserModule,
    I18nSharedModule,
    I18nCovermeModule,
    RouterModule.forRoot([
      {
        path: 'welcome',
        component: WelcomePageComponent,
        data: {
          title: 'Welcome',
        },
      },
      {
        path: 'financial-assistance',
        loadChildren: () =>
          import('@enroll/financial-assistance/shell').then(
            (m) => m.FinancialAssistanceShellModule
          ),
      },
      {
        path: '**',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
    ]),
    RootStoreModule,
    UiBaseShellModule,
  ],
  declarations: [AppComponent, WelcomePageComponent],
  providers: [
    {
      provide: TITLE_EXTENSION,
      useValue: 'Maine Cover ME',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
