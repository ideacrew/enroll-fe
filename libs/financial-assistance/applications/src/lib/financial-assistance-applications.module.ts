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
import { ImmigrationDocumentComponent } from './immigration-document/immigration-document.component';
import { AlienNumberComponent } from './immigration-document/alien-number/alien-number.component';
import { ExpirationDateComponent } from './immigration-document/expiration-date/expiration-date.component';
import { CardNumberComponent } from './immigration-document/card-number/card-number.component';
import { CertificateNumberComponent } from './immigration-document/certificate-number/certificate-number.component';
import { NaturalizationNumberComponent } from './immigration-document/naturalization-number/naturalization-number.component';
import { PassportNumberComponent } from './immigration-document/passport-number/passport-number.component';
import { VisaNumberComponent } from './immigration-document/visa-number/visa-number.component';
import { CitizenshipCountryComponent } from './immigration-document/citizenship-country/citizenship-country.component';
import { StampDateComponent } from './immigration-document/stamp-date/stamp-date.component';
import { I94NumberComponent } from './immigration-document/i94-number/i94-number.component';
import { SevisIdComponent } from './immigration-document/sevis-id/sevis-id.component';
import { DocumentDescriptionComponent } from './immigration-document/document-description/document-description.component';

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
    ImmigrationDocumentComponent,
    AlienNumberComponent,
    ExpirationDateComponent,
    CardNumberComponent,
    CertificateNumberComponent,
    NaturalizationNumberComponent,
    PassportNumberComponent,
    VisaNumberComponent,
    CitizenshipCountryComponent,
    StampDateComponent,
    I94NumberComponent,
    SevisIdComponent,
    DocumentDescriptionComponent,
  ],
})
export class FinancialAssistanceApplicationsModule {}
