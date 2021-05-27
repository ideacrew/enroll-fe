import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class UiBaseShellModule {}
