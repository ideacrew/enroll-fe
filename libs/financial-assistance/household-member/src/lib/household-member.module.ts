import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { HouseholdMemberRoutingModule } from './household-member-routing.module';
import { AddNewPersonComponent } from './add-new-person/add-new-person.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { IncarcerationStatusComponent } from './incarceration-status/incarceration-status.component';
import { RaceAndEthnicityComponent } from './race-and-ethnicity/race-and-ethnicity.component';
import { TribalMembershipComponent } from './tribal-membership/tribal-membership.component';
import { HouseholdMemberService } from './household-member.service';
import { NaturalizedCitizenComponent } from './citizenship/naturalized-citizen/naturalized-citizen.component';
import { ImmigrationStatusComponent } from './citizenship/immigration-status/immigration-status.component';
import { AlienNumberComponent } from './immigration-document/alien-number/alien-number.component';
import { CardNumberComponent } from './immigration-document/card-number/card-number.component';
import { CertificateNumberComponent } from './immigration-document/certificate-number/certificate-number.component';
import { CitizenshipCountryComponent } from './immigration-document/citizenship-country/citizenship-country.component';
import { DocumentDescriptionComponent } from './immigration-document/document-description/document-description.component';
import { ExpirationDateComponent } from './immigration-document/expiration-date/expiration-date.component';
import { I94NumberComponent } from './immigration-document/i94-number/i94-number.component';
import { NaturalizationNumberComponent } from './immigration-document/naturalization-number/naturalization-number.component';
import { PassportNumberComponent } from './immigration-document/passport-number/passport-number.component';
import { SevisIdComponent } from './immigration-document/sevis-id/sevis-id.component';
import { StampDateComponent } from './immigration-document/stamp-date/stamp-date.component';
import { VisaNumberComponent } from './immigration-document/visa-number/visa-number.component';
import { UniqueIdPipe } from './unique-id.pipe';
import { ImmigrationDocumentComponent } from './immigration-document/immigration-document.component';
import { CitizenshipComponent } from './citizenship/citizenship.component';

import { loader } from './loader';
import { NameFormComponent } from './name-form/name-form.component';
import { DobInputComponent } from './dob-input/dob-input.component';
import { SsnInputComponent } from './ssn-input/ssn-input.component';
import { GenderInputComponent } from './gender-input/gender-input.component';
import { RelationshipSelectComponent } from './relationship-select/relationship-select.component';
import { NeedsCoverageComponent } from './needs-coverage/needs-coverage.component';
import { LivingSituationComponent } from './living-situation/living-situation.component';
import { TribalInformationComponent } from './tribal-information/tribal-information.component';
import { LawfulPresenceEvidenceComponent } from './lawful-presence-evidence/lawful-presence-evidence.component';
import { LawfulPresenceComponent } from './lawful-presence/lawful-presence.component';

@NgModule({
  imports: [
    CommonModule,
    HouseholdMemberRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslocoModule,
  ],
  declarations: [
    AddNewPersonComponent,
    AlienNumberComponent,
    BasicInformationComponent,
    CardNumberComponent,
    CertificateNumberComponent,
    CitizenshipComponent,
    CitizenshipCountryComponent,
    DocumentDescriptionComponent,
    ExpirationDateComponent,
    I94NumberComponent,
    ImmigrationDocumentComponent,
    ImmigrationStatusComponent,
    IncarcerationStatusComponent,
    NaturalizationNumberComponent,
    NaturalizedCitizenComponent,
    PassportNumberComponent,
    RaceAndEthnicityComponent,
    SevisIdComponent,
    StampDateComponent,
    TribalMembershipComponent,
    UniqueIdPipe,
    VisaNumberComponent,
    NameFormComponent,
    DobInputComponent,
    SsnInputComponent,
    GenderInputComponent,
    RelationshipSelectComponent,
    NeedsCoverageComponent,
    LivingSituationComponent,
    TribalInformationComponent,
    LawfulPresenceEvidenceComponent,
    LawfulPresenceComponent,
  ],
  providers: [
    HouseholdMemberService,
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'household',
        loader,
      },
    },
  ],
})
export class HouseholdMemberModule {}
