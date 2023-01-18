import { createReducer, on } from '@ngrx/store';
import * as HouseholdActions from './household.actions';

export const householdFeatureKey = 'household';

export type State = {
  taxYear: {
    started: boolean;
    completed: boolean;
  };
};

export const initialState: State = {
  taxYear: {
    started: true,
    completed: true,
  },
};
export const reducer = createReducer(
  initialState,

  on(HouseholdActions.loadHouseholds, (state) => state)
);
