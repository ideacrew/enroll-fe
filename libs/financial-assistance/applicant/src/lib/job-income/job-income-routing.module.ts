import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerIncomeComponent } from './employer-income/employer-income.component';
import { SelfEmploymentIncomeComponent } from './self-employment-income/self-employment-income.component';

const routes: Routes = [
  {
    path: 'employer-income',
    component: EmployerIncomeComponent,
  },
  {
    path: 'self-employment-income',
    component: SelfEmploymentIncomeComponent,
  },
  {
    path: '',
    redirectTo: '/employer-income',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobIncomeRoutingModule {}
