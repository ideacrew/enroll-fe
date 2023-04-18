import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { taxYearRoutes } from './library.routes';
import { TaxYearComponent } from './tax-year/tax-year.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(taxYearRoutes),
  ],
  declarations: [TaxYearComponent],
})
export class TaxYearModule {}
