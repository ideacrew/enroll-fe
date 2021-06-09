import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as RootActions from './root.actions';
import { RootEntity } from './root.models';

export const ROOT_FEATURE_KEY = 'root';

export interface State extends EntityState<RootEntity> {
  selectedId?: string | number; // which Root record has been selected
  loaded: boolean; // has the Root list been loaded
  error?: string | null; // last known error (if any)
}

export interface RootPartialState {
  readonly [ROOT_FEATURE_KEY]: State;
}

export const rootAdapter: EntityAdapter<RootEntity> =
  createEntityAdapter<RootEntity>();

export const initialState: State = rootAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const rootReducer = createReducer(
  initialState,
  on(RootActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(RootActions.loadRootSuccess, (state, { root }) =>
    rootAdapter.setAll(root, { ...state, loaded: true })
  ),
  on(RootActions.loadRootFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return rootReducer(state, action);
}
