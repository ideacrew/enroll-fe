import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { ApplicationChecklistComponent } from './application-checklist/application-checklist.component';
import { NewHouseholdMemberModule } from './new-household-member/new-household-member.module';
import { AgePipe } from './age.pipe';

export const loader = ['en', 'es'].reduce(
  (acc: { [language: string]: unknown }, lang: string) => {
    acc[lang] = () => import(`./i18n/${lang}.json`);
    return acc;
  },
  {}
);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslocoModule,
    RouterModule.forChild([
      {
        path: '', // matches /applications
        component: ApplicationsListPageComponent,
      },
      {
        path: ':applicationId/application-checklist',
        component: ApplicationChecklistComponent,
      },
      {
        path: ':applicationId/edit',
        component: EditApplicationComponent,
      },
      {
        path: ':applicationId/review',
        component: ReviewApplicationComponent,
      },
      {
        path: ':applicationId/add-new-person',
        loadChildren: () => NewHouseholdMemberModule,
      },
      {
        path: ':applicationId/applicants/:applicantId',
        loadChildren: () =>
          import('@enroll/financial-assistance/applicant').then(
            (module) => module.FinancialAssistanceApplicantModule
          ),
      },
    ]),
  ],
  declarations: [
    ApplicationsListPageComponent,
    EditApplicationComponent,
    ReviewApplicationComponent,
    ApplicationChecklistComponent,
    AgePipe,
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'faaDefault',
        loader,
      },
    },
  ],
})
export class FinancialAssistanceApplicationsModule {}
