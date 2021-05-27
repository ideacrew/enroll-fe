import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiBaseShellModule } from '@enroll/ui/base/shell';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TranslocoRootModule, UiBaseShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
