import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ApplicantComponent } from './applicant/applicant.component';
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
import { LongTermCareComponent } from './long-term-care/long-term-care.component';
import { MedicalBillsComponent } from './medical-bills/medical-bills.component';
import { DisabilityComponent } from './disability/disability.component';
import { FilingTaxesComponent } from './filing-taxes/filing-taxes.component';
import { TaxDependentComponent } from './tax-dependent/tax-dependent.component';
import { FosterCareComponent } from './foster-care/foster-care.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ApplicantComponent,
        children: [
          {
            path: 'tax-info/filing-taxes',
            component: FilingTaxesComponent,
          },
          {
            path: 'tax-info/tax-dependent',
            component: TaxDependentComponent,
          },
          { path: 'tax-info', redirectTo: 'tax-info/filing-taxes' },
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
            path: 'other-questions/foster-care',
            component: FosterCareComponent,
          },
          {
            path: 'other-questions/blind',
            component: BlindComponent,
          },
          {
            path: 'other-questions/daily-assistance',
            component: LongTermCareComponent,
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
    LongTermCareComponent,
    MedicalBillsComponent,
    DisabilityComponent,
    FilingTaxesComponent,
    TaxDependentComponent,
    FosterCareComponent,
  ],
})
export class FinancialAssistanceApplicantModule {}
