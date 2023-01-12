import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { taxYearRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(taxYearRoutes)],
})
export class TaxYearModule {}
