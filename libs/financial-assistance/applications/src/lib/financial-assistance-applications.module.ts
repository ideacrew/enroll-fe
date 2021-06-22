import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { ApplicantsStoreModule } from '@enroll/financial-assistance/store/applicants';

import { loader } from './loader';
import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { ApplicationChecklistComponent } from './application-checklist/application-checklist.component';
import { AgePipe } from './age.pipe';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicantCardComponent } from './applicant-card/applicant-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslocoModule,
    ApplicationsRoutingModule,
    ApplicantsStoreModule,
  ],
  declarations: [
    ApplicationsListPageComponent,
    EditApplicationComponent,
    ReviewApplicationComponent,
    ApplicationChecklistComponent,
    AgePipe,
    ApplicantCardComponent,
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'faaApplications',
        loader,
      },
    },
  ],
})
export class FinancialAssistanceApplicationsModule {}
