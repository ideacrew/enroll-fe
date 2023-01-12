import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { reviewRoutes } from './library.routes';
import { ReviewComponent } from './review/review.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(reviewRoutes)],
  declarations: [ReviewComponent],
})
export class ReviewModule {}
