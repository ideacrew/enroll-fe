import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicantComponent } from './applicant/applicant.component';
import { OtherQuestionsComponent } from './other-questions/other-questions.component';
import { PregnantComponent } from './pregnant/pregnant.component';
import { StudentComponent } from './student/student.component';
import { BlindComponent } from './blind/blind.component';
import { LongTermCareComponent } from './long-term-care/long-term-care.component';
import { MedicalBillsComponent } from './medical-bills/medical-bills.component';
import { DisabilityComponent } from './disability/disability.component';
import { FosterCareComponent } from './foster-care/foster-care.component';
import { TaxInfoModule } from './tax-info/tax-info.module';
import { JobIncomeModule } from './job-income/job-income.module';
import { OtherIncomeModule } from './other-income/other-income.module';
import { DeductionsModule } from './deductions/deductions.module';
import { BenefitsModule } from './benefits/benefits.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ApplicantComponent,
        children: [
          { path: 'tax-info', loadChildren: () => TaxInfoModule },
          { path: 'job-income', loadChildren: () => JobIncomeModule },
          {
            path: 'other-income',
            loadChildren: () => OtherIncomeModule,
          },

          { path: 'income-adjustments', loadChildren: () => DeductionsModule },
          { path: 'health-coverage', loadChildren: () => BenefitsModule },

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
    BenefitsModule,
  ],
  declarations: [
    ApplicantComponent,
    OtherQuestionsComponent,
    PregnantComponent,
    StudentComponent,
    BlindComponent,
    LongTermCareComponent,
    MedicalBillsComponent,
    DisabilityComponent,
    FosterCareComponent,
  ],
})
export class FinancialAssistanceApplicantModule {}
