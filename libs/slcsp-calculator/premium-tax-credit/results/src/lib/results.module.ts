import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { resultsRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(resultsRoutes)],
})
export class ResultsModule {}
