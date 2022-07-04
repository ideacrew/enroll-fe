import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CovermeI18nModule } from '@enroll/coverme/i18n';
import { SharedI18nModule } from '@enroll/shared/i18n';
import { RootStoreModule } from '@enroll/state/root-store';
import { UiBaseShellModule } from '@enroll/ui/base/shell';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [AppComponent, WelcomePageComponent],
  imports: [
    BrowserModule,
    SharedI18nModule,
    CovermeI18nModule,
    RootStoreModule,
    UiBaseShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
