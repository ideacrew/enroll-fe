import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { TaxInfoComponent } from './tax-info/tax-info.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { AddNewPersonComponent } from './add-new-person/add-new-person.component';
import { CitizenshipComponent } from './citizenship/citizenship.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', // matches /applications
        component: ApplicationsListPageComponent,
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
        component: AddNewPersonComponent,
        children: [
          { path: 'basic-information', component: BasicInformationComponent },
          { path: 'citizenship', component: CitizenshipComponent },
          { path: '', redirectTo: 'basic-information' },
        ],
      },
      {
        path: ':applicationId/applicants/:applicantId/tax-info',
        component: TaxInfoComponent,
      },
    ]),
  ],
  declarations: [
    ApplicationsListPageComponent,
    EditApplicationComponent,
    TaxInfoComponent,
    ReviewApplicationComponent,
    AddNewPersonComponent,
    CitizenshipComponent,
    BasicInformationComponent,
  ],
})
export class FinancialAssistanceApplicationsModule {}
