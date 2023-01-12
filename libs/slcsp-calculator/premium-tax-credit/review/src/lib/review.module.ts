import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { reviewRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(reviewRoutes)],
})
export class ReviewModule {}
