import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ApplicantComponent } from './applicant/applicant.component';
import { TaxInfoComponent } from './tax-info/tax-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ApplicantComponent,
        children: [{ path: 'tax-info', component: TaxInfoComponent }],
      },
    ]),
  ],
  declarations: [ApplicantComponent, TaxInfoComponent],
})
export class FinancialAssistanceApplicantModule {}
