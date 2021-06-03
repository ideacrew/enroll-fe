import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ApplicantComponent } from './applicant/applicant.component';
import { TaxInfoComponent } from './tax-info/tax-info.component';
import { OtherIncomeComponent } from './other-income/other-income.component';
import { IncomeAdjustmentsComponent } from './income-adjustments/income-adjustments.component';
import { HealthCoverageComponent } from './health-coverage/health-coverage.component';
import { OtherQuestionsComponent } from './other-questions/other-questions.component';
import { EmployerIncomeComponent } from './employer-income/employer-income.component';
import { SelfEmploymentIncomeComponent } from './self-employment-income/self-employment-income.component';
import { UnemploymentIncomeComponent } from './unemployment-income/unemployment-income.component';
import { PotentialCoverageComponent } from './potential-coverage/potential-coverage.component';
import { PregnantComponent } from './pregnant/pregnant.component';
import { StudentComponent } from './student/student.component';
import { BlindComponent } from './blind/blind.component';
import { DailyAssistanceComponent } from './daily-assistance/daily-assistance.component';
import { MedicalBillsComponent } from './medical-bills/medical-bills.component';
import { DisabilityComponent } from './disability/disability.component';

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
          {
            path: 'job-income/employer-income',
            component: EmployerIncomeComponent,
          },
          {
            path: 'job-income/self-employment-income',
            component: SelfEmploymentIncomeComponent,
          },
          {
            path: 'job-income',
            redirectTo: 'job-income/employer-income',
          },
          {
            path: 'other-income/other-sources',
            component: OtherIncomeComponent,
          },
          {
            path: 'other-income/unemployment-income',
            component: UnemploymentIncomeComponent,
          },
          {
            path: 'other-income',
            redirectTo: 'other-income/unemployment-income',
          },
          { path: 'income-adjustments', component: IncomeAdjustmentsComponent },
          {
            path: 'health-coverage/currently-enrolled',
            component: HealthCoverageComponent,
          },
          {
            path: 'health-coverage/potential-coverage',
            component: PotentialCoverageComponent,
          },
          {
            path: 'health-coverage',
            redirectTo: 'health-coverage/currently-enrolled',
          },
          {
            path: 'other-questions/pregnant',
            component: PregnantComponent,
          },
          {
            path: 'other-questions/student',
            component: StudentComponent,
          },
          {
            path: 'other-questions/blind',
            component: BlindComponent,
          },
          {
            path: 'other-questions/daily-assistance',
            component: DailyAssistanceComponent,
          },
          {
            path: 'other-questions/medical-bills',
            component: MedicalBillsComponent,
          },
          {
            path: 'other-questions/disability',
            component: DisabilityComponent,
          },
          { path: 'other-questions', redirectTo: 'other-questions/pregnant' },
        ],
      },
    ]),
  ],
  declarations: [
    ApplicantComponent,
    TaxInfoComponent,
    OtherIncomeComponent,
    IncomeAdjustmentsComponent,
    HealthCoverageComponent,
    OtherQuestionsComponent,
    EmployerIncomeComponent,
    SelfEmploymentIncomeComponent,
    UnemploymentIncomeComponent,
    PotentialCoverageComponent,
    PregnantComponent,
    StudentComponent,
    BlindComponent,
    DailyAssistanceComponent,
    MedicalBillsComponent,
    DisabilityComponent,
  ],
})
export class FinancialAssistanceApplicantModule {}
