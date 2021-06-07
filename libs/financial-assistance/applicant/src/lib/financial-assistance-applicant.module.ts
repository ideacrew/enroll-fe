import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantRoutingModule } from './applicant-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicantRoutingModule,
  ],
  declarations: [ApplicantComponent],
})
export class FinancialAssistanceApplicantModule {}
