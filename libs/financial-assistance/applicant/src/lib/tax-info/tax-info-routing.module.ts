import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilingTaxesComponent } from './filing-taxes/filing-taxes.component';
import { TaxDependentComponent } from './tax-dependent/tax-dependent.component';

const routes: Routes = [
  {
    path: 'filing-taxes',
    component: FilingTaxesComponent,
  },
  {
    path: 'tax-dependent',
    component: TaxDependentComponent,
  },
  { path: '', redirectTo: 'filing-taxes' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxInfoRoutingModule {}
