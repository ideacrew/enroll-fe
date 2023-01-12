import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { premiumTaxCreditRoutes } from './library.routes';
import { FeatureShellComponent } from './feature-shell/feature-shell.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(premiumTaxCreditRoutes),
  ],
  declarations: [FeatureShellComponent],
})
export class SlcspCalculatorPremiumTaxCreditModule {}
