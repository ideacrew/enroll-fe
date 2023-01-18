import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromHousehold from './store/household.reducer';
import { HouseholdEffects } from './store/household.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromHousehold.householdFeatureKey,
      fromHousehold.reducer
    ),
    EffectsModule.forFeature([HouseholdEffects]),
  ],
})
export class HouseholdFormModule {}
