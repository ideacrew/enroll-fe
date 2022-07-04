import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaxInfoRoutingModule } from './tax-info-routing.module';
import { TaxDependentComponent } from './tax-dependent/tax-dependent.component';
import { FilingTaxesComponent } from './filing-taxes/filing-taxes.component';

@NgModule({
  imports: [CommonModule, TaxInfoRoutingModule, FormsModule],
  declarations: [FilingTaxesComponent, TaxDependentComponent],
})
export class TaxInfoModule {}
