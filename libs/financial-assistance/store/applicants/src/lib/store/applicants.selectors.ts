import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  APPLICANTS_FEATURE_KEY,
  State,
  applicantsAdapter,
} from './applicants.reducer';

// Lookup the 'Applicants' feature state managed by NgRx
export const getApplicantsState = createFeatureSelector<State>(
  APPLICANTS_FEATURE_KEY
);

const { selectAll, selectEntities } = applicantsAdapter.getSelectors();

export const getApplicantsLoaded = createSelector(
  getApplicantsState,
  (state: State) => state.loaded
);

export const getApplicantsError = createSelector(
  getApplicantsState,
  (state: State) => state.error
);

export const getAllApplicants = createSelector(
  getApplicantsState,
  (state: State) => selectAll(state)
);

export const getApplicantsEntities = createSelector(
  getApplicantsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getApplicantsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getApplicantsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
