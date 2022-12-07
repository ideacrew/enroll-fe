import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RootStoreModule } from '@enroll/shared/state/root-store';
import { UiBaseShellModule } from '@enroll/ui/base/shell';

import { AppComponent } from './app.component';
import { SlcspI18nModule } from './i18n.module';
import { JsonFileLoaderService } from './json-file-loader.service';
import { configFactory, TenantConfigService } from './tenant-config.service';

export function initializeJsonFile(jsonFileLoader: JsonFileLoaderService) {
  return () => jsonFileLoader.loadJson('/tenant-config/me-colors.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    RootStoreModule,
    UiBaseShellModule,
    HttpClientModule,
    SlcspI18nModule,
  ],
  providers: [
    JsonFileLoaderService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [TenantConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
