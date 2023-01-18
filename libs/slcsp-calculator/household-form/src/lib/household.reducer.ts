import { Action, createReducer, on } from '@ngrx/store';
import * as HouseholdActions from './household.actions';

export const householdFeatureKey = 'household';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(HouseholdActions.loadHouseholds, (state) => state)
);
