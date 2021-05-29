import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', // matches /applications
        component: ApplicationsListPageComponent,
      },
    ]),
  ],
  declarations: [ApplicationsListPageComponent],
})
export class FinancialAssistanceApplicationsModule {}
