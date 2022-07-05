import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPersonComponent } from './add-new-person/add-new-person.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { LawfulPresenceEvidenceComponent } from './lawful-presence-evidence/lawful-presence-evidence.component';
import { CitizenshipComponent } from './citizenship/citizenship.component';
import { NaturalizedCitizenComponent } from './citizenship/naturalized-citizen/naturalized-citizen.component';
import { IncarcerationStatusComponent } from './incarceration-status/incarceration-status.component';
import { LivingSituationComponent } from './living-situation/living-situation.component';
import { NeedsCoverageComponent } from './needs-coverage/needs-coverage.component';
import { RaceAndEthnicityComponent } from './race-and-ethnicity/race-and-ethnicity.component';
import { TribalInformationComponent } from './tribal-information/tribal-information.component';
import { TribalMembershipComponent } from './tribal-membership/tribal-membership.component';
import { LawfulPresenceComponent } from './lawful-presence/lawful-presence.component';

const routes: Routes = [
  {
    path: '',
    component: AddNewPersonComponent,
    children: [
      { path: 'needs-coverage', component: NeedsCoverageComponent },
      { path: 'personal-information', component: BasicInformationComponent },
      { path: 'living-situation', component: LivingSituationComponent },
      { path: 'citizenship', component: CitizenshipComponent },
      { path: 'naturalized-citizen', component: NaturalizedCitizenComponent },
      { path: 'lawful-presence', component: LawfulPresenceComponent },
      {
        path: 'lawful-presence-evidence',
        component: LawfulPresenceEvidenceComponent,
      },
      { path: 'tribal-membership', component: TribalMembershipComponent },
      { path: 'tribal-information', component: TribalInformationComponent },
      { path: 'race-and-ethnicity', component: RaceAndEthnicityComponent },
      {
        path: 'incarceration-status',
        component: IncarcerationStatusComponent,
      },
      { path: '', redirectTo: 'needs-coverage', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseholdMemberRoutingModule {}
