import { appConfig } from './app/app.config';
/* eslint-disable unicorn/prefer-top-level-await */

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((error) =>
  console.error(error)
);
