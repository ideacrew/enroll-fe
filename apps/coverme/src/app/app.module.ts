import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UiBaseShellModule } from '@enroll/ui/base/shell';
import { RootStoreModule } from '@enroll/shared/state/root-store';
import { CovermeI18nModule } from '@enroll/coverme/i18n';
import { TITLE_EXTENSION } from '@enroll/shared/page-title';
import { SharedI18nModule } from '@enroll/shared/i18n';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedI18nModule,
    CovermeI18nModule,
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
