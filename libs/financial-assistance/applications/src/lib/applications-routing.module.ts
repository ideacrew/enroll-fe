import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';
import { ApplicationChecklistComponent } from './application-checklist/application-checklist.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';

import { ReviewApplicationComponent } from './review-application/review-application.component';

const routes: Routes = [
  {
    path: '', // matches /applications
    component: ApplicationsListPageComponent,
    data: {
      title: 'Cost Savings Applications',
    },
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
    path: ':applicationId/edit-household-member/new',
    loadChildren: () =>
      import('@enroll/financial-assistance/household-member').then(
        (module) => module.HouseholdMemberModule
      ),
  },
  {
    path: ':applicationId/edit-household-member/:applicantId',
    loadChildren: () =>
      import('@enroll/financial-assistance/household-member').then(
        (module) => module.HouseholdMemberModule
      ),
  },
  {
    path: ':applicationId/applicants/:applicantId',
    loadChildren: () =>
      import('@enroll/financial-assistance/applicant').then(
        (module) => module.FinancialAssistanceApplicantModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationsRoutingModule {}
