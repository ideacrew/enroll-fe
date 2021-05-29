import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplicationsPageComponent } from './applications-page/applications-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ApplicationsPageComponent },
    ]),
  ],
  declarations: [ApplicationsPageComponent],
})
export class FinancialAssistanceApplicationsModule {}
