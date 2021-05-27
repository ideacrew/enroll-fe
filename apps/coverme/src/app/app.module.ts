import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UiBaseShellModule } from '@enroll/ui/base/shell';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    TranslocoRootModule,
    UiBaseShellModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
