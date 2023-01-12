import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { taxYearRoutes } from './library.routes';
import { TaxYearComponent } from './tax-year/tax-year.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(taxYearRoutes)],
  declarations: [TaxYearComponent],
})
export class TaxYearModule {}
