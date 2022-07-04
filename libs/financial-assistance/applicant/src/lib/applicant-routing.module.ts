import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantComponent } from './applicant/applicant.component';
import { BenefitsModule } from './benefits/benefits.module';
import { DeductionsModule } from './deductions/deductions.module';
import { JobIncomeModule } from './job-income/job-income.module';
import { OtherIncomeModule } from './other-income/other-income.module';
import { OtherQuestionsModule } from './other-questions/other-questions.module';
import { TaxInfoModule } from './tax-info/tax-info.module';

const routes: Routes = [
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

      { path: 'other-questions', loadChildren: () => OtherQuestionsModule },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicantRoutingModule {}
