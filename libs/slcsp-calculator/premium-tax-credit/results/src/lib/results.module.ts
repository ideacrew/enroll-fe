import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TranslocoModule } from '@ngneat/transloco';
import { resultsRoutes } from './library.routes';
import { ResultsComponent } from './results/results.component';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    RouterModule.forChild(resultsRoutes),
    HttpClientModule,
  ],
  declarations: [ResultsComponent],
})
export class ResultsModule {}
