import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RootStoreModule } from '@enroll/shared/state/root-store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot([]), RootStoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
