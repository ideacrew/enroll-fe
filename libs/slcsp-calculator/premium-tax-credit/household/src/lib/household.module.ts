import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { householdRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(householdRoutes)],
})
export class HouseholdModule {}
