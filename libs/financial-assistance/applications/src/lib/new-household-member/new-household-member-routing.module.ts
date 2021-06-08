import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPersonComponent } from './add-new-person/add-new-person.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { CitizenshipComponent } from './citizenship/citizenship.component';
import { IncarcerationStatusComponent } from './incarceration-status/incarceration-status.component';
import { RaceAndEthnicityComponent } from './race-and-ethnicity/race-and-ethnicity.component';
import { TribalMembershipComponent } from './tribal-membership/tribal-membership.component';

const routes: Routes = [
  {
    path: '',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewHouseholdMemberRoutingModule {}
