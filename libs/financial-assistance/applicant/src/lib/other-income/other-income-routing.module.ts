import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtherIncomeSourcesComponent } from './other-income-sources/other-income-sources.component';
import { UnemploymentIncomeComponent } from './unemployment-income/unemployment-income.component';

const routes: Routes = [
  {
    path: 'other-sources',
    component: OtherIncomeSourcesComponent,
  },
  {
    path: 'unemployment-income',
    component: UnemploymentIncomeComponent,
  },
  {
    path: '',
    redirectTo: 'unemployment-income',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherIncomeRoutingModule {}
