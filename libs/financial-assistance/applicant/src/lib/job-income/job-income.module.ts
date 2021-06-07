import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JobIncomeRoutingModule } from './job-income-routing.module';
import { EmployerIncomeComponent } from './employer-income/employer-income.component';
import { SelfEmploymentIncomeComponent } from './self-employment-income/self-employment-income.component';

@NgModule({
  imports: [CommonModule, JobIncomeRoutingModule, FormsModule],
  declarations: [EmployerIncomeComponent, SelfEmploymentIncomeComponent],
})
export class JobIncomeModule {}
