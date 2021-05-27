import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UiBaseShellModule } from '@enroll/ui/base/shell';

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
        path: '**',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
    ]),
    TranslocoRootModule,
    UiBaseShellModule,
  ],
  declarations: [AppComponent, WelcomePageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
