import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { householdRoutes } from './library.routes';
import { HouseholdComponent } from './household/household.component';
import { MemberComponent } from './member/member.component';
import { CoverageComponent } from './coverage/coverage.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(householdRoutes)],
  declarations: [HouseholdComponent, MemberComponent, CoverageComponent],
})
export class HouseholdModule {}
