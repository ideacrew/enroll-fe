import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { resultsRoutes } from './library.routes';
import { ResultsComponent } from './results/results.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(resultsRoutes)],
  declarations: [ResultsComponent],
})
export class ResultsModule {}
