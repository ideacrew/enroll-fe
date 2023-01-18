import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHousehold from './household.reducer';

export const selectHouseholdState = createFeatureSelector<fromHousehold.State>(
  fromHousehold.householdFeatureKey
);
