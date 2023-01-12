import { Route } from '@angular/router';
import { ResultsComponent } from './results/results.component';

export const resultsRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: ResultsComponent },
];
