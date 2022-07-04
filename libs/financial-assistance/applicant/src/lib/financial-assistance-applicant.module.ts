import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantRoutingModule } from './applicant-routing.module';
import { loader } from './loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicantRoutingModule,
    TranslocoModule,
  ],
  declarations: [ApplicantComponent],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'applicant',
        loader,
      },
    },
  ],
})
export class FinancialAssistanceApplicantModule {}
