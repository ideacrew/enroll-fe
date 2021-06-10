import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UiBaseShellModule } from '@enroll/ui/base/shell';
import { RootStoreModule } from '@enroll/shared/state/root-store';
import { I18nDchbxModule } from '@enroll/i18n/dchbx';
import { I18nSharedModule } from '@enroll/i18n/shared';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [AppComponent, WelcomePageComponent],
  imports: [
    BrowserModule,
    I18nSharedModule,
    I18nDchbxModule,
    RouterModule.forRoot([
      {
        path: 'welcome',
        component: WelcomePageComponent,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
