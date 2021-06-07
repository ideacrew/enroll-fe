import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IncomeAdjustmentsComponent } from './income-adjustments/income-adjustments.component';

const routes: Routes = [{ path: '', component: IncomeAdjustmentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeductionsRoutingModule {}
