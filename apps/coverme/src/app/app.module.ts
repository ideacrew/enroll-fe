import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UiBaseShellModule } from '@enroll/ui/base/shell';
import { RootStoreModule } from '@enroll/shared/state/root-store';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  imports: [
    BrowserModule,
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
    TranslocoRootModule,
    UiBaseShellModule,
  ],
  declarations: [AppComponent, WelcomePageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
