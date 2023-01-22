import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  HouseholdFormInfoComponent,
  ReviewHouseholdComponent,
  ReviewTaxYearComponent,
} from '@enroll/slcsp-calculator/household-form';

import { reviewRoutes } from './library.routes';
import { ReviewComponent } from './review/review.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(reviewRoutes),
    ReviewHouseholdComponent,
    ReviewTaxYearComponent,
    HouseholdFormInfoComponent,
  ],
  declarations: [ReviewComponent],
})
export class ReviewModule {}
