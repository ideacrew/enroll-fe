import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

import {
  HouseholdFormInfoComponent,
  HouseholdCountComponent,
  HouseholdConfirmationComponent,
  HouseholdMemberNameComponent,
  HouseholdMemberCoverageComponent,
  HouseholdMemberComponent,
} from '@enroll/slcsp-calculator/household-form';

import { householdRoutes } from './library.routes';
import { HouseholdComponent } from './household/household.component';
import { MemberComponent } from './member/member.component';
import { CoverageComponent } from './coverage/coverage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(householdRoutes),
    HouseholdFormInfoComponent,
    HouseholdCountComponent,
    HouseholdConfirmationComponent,
    HouseholdMemberNameComponent,
    HouseholdMemberCoverageComponent,
    HouseholdMemberComponent,
  ],
  declarations: [HouseholdComponent, MemberComponent, CoverageComponent],
  providers: [TitleCasePipe],
})
export class HouseholdModule {}
