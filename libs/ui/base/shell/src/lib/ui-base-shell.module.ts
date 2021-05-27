import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslocoModule],
  declarations: [FooterComponent, HeaderComponent, WelcomeComponent],
  exports: [FooterComponent, HeaderComponent, WelcomeComponent],
})
export class UiBaseShellModule {}
