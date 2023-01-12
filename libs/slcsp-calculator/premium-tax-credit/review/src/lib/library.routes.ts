import { Route } from '@angular/router';
import { ReviewComponent } from './review/review.component';

export const reviewRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: ReviewComponent },
];
