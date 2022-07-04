import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeductionsRoutingModule } from './deductions-routing.module';
import { IncomeAdjustmentsComponent } from './income-adjustments/income-adjustments.component';

@NgModule({
  imports: [CommonModule, DeductionsRoutingModule, FormsModule],
  declarations: [IncomeAdjustmentsComponent],
})
export class DeductionsModule {}
