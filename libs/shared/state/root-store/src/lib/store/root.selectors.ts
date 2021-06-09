import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ROOT_FEATURE_KEY, State, rootAdapter } from './root.reducer';

// Lookup the 'Root' feature state managed by NgRx
export const getRootState = createFeatureSelector<State>(ROOT_FEATURE_KEY);

const { selectAll, selectEntities } = rootAdapter.getSelectors();

export const getRootLoaded = createSelector(
  getRootState,
  (state: State) => state.loaded
);

export const getRootError = createSelector(
  getRootState,
  (state: State) => state.error
);

export const getAllRoot = createSelector(getRootState, (state: State) =>
  selectAll(state)
);

export const getRootEntities = createSelector(getRootState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getRootState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getRootEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
