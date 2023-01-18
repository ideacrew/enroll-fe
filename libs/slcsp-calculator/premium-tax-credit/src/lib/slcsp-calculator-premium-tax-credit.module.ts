import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HouseholdFormModule } from '@enroll/slcsp-calculator/household-form';

import { premiumTaxCreditRoutes } from './library.routes';
import { FeatureShellComponent } from './feature-shell/feature-shell.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(premiumTaxCreditRoutes),
    HouseholdFormModule,
  ],
  declarations: [FeatureShellComponent],
})
export class SlcspCalculatorPremiumTaxCreditModule {}
