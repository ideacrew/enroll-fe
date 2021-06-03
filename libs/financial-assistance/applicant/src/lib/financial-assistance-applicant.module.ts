import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ApplicantComponent } from './applicant/applicant.component';
import { TaxInfoComponent } from './tax-info/tax-info.component';
import { JobIncomeComponent } from './job-income/job-income.component';
import { OtherIncomeComponent } from './other-income/other-income.component';
import { IncomeAdjustmentsComponent } from './income-adjustments/income-adjustments.component';
import { HealthCoverageComponent } from './health-coverage/health-coverage.component';
import { OtherQuestionsComponent } from './other-questions/other-questions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ApplicantComponent,
        children: [
          { path: 'tax-info', component: TaxInfoComponent },
          { path: 'job-income', component: JobIncomeComponent },
          { path: 'other-income', component: OtherIncomeComponent },
          { path: 'income-adjustments', component: IncomeAdjustmentsComponent },
          { path: 'health-coverage', component: HealthCoverageComponent },
          { path: 'other-questions', component: OtherQuestionsComponent },
        ],
      },
    ]),
  ],
  declarations: [
    ApplicantComponent,
    TaxInfoComponent,
    JobIncomeComponent,
    OtherIncomeComponent,
    IncomeAdjustmentsComponent,
    HealthCoverageComponent,
    OtherQuestionsComponent,
  ],
})
export class FinancialAssistanceApplicantModule {}
