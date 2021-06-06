import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
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
import { TribalMembershipComponent } from './tribal-membership/tribal-membership.component';
import { IncarcerationStatusComponent } from './incarceration-status/incarceration-status.component';
import { RaceAndEthnicityComponent } from './race-and-ethnicity/race-and-ethnicity.component';
import { UniqueIdPipe } from './unique-id.pipe';
import { NaturalizedCitizenComponent } from './citizenship/naturalized-citizen/naturalized-citizen.component';
import { ImmigrationStatusComponent } from './citizenship/immigration-status/immigration-status.component';

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
          { path: 'tribal-membership', component: TribalMembershipComponent },
          { path: 'race-and-ethnicity', component: RaceAndEthnicityComponent },
          {
            path: 'incarceration-status',
            component: IncarcerationStatusComponent,
          },
          { path: '', redirectTo: 'basic-information' },
        ],
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
    TribalMembershipComponent,
    IncarcerationStatusComponent,
    RaceAndEthnicityComponent,
    UniqueIdPipe,
    NaturalizedCitizenComponent,
    ImmigrationStatusComponent,
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
