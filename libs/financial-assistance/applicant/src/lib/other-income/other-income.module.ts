import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OtherIncomeRoutingModule } from './other-income-routing.module';
import { UnemploymentIncomeComponent } from './unemployment-income/unemployment-income.component';
import { OtherIncomeSourcesComponent } from './other-income-sources/other-income-sources.component';

@NgModule({
  imports: [CommonModule, OtherIncomeRoutingModule, FormsModule],
  declarations: [OtherIncomeSourcesComponent, UnemploymentIncomeComponent],
})
export class OtherIncomeModule {}
