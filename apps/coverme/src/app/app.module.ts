import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CovermeI18nModule } from '@enroll/coverme/i18n';
import { SharedI18nModule } from '@enroll/shared/i18n';
import { UiBaseShellModule } from '@enroll/ui/base/shell';
import { TITLE_EXTENSION } from '@enroll/shared/page-title';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedI18nModule,
    CovermeI18nModule,
    UiBaseShellModule,
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
