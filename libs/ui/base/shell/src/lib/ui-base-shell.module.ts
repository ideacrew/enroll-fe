import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslocoModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class UiBaseShellModule {}
