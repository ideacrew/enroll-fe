import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ApplicantsActions from './applicants.actions';
import { ApplicantsEntity } from './applicants.models';

export const APPLICANTS_FEATURE_KEY = 'applicants';

export interface State extends EntityState<ApplicantsEntity> {
  selectedId?: string | number; // which Applicants record has been selected
  loaded: boolean; // has the Applicants list been loaded
  error?: string | null; // last known error (if any)
}

export interface ApplicantsPartialState {
  readonly [APPLICANTS_FEATURE_KEY]: State;
}

export const applicantsAdapter: EntityAdapter<ApplicantsEntity> =
  createEntityAdapter<ApplicantsEntity>();

export const initialState: State = applicantsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const applicantsReducer = createReducer(
  initialState,
  on(ApplicantsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ApplicantsActions.loadApplicantsSuccess, (state, { applicants }) =>
    applicantsAdapter.setAll(applicants, { ...state, loaded: true })
  ),
  on(ApplicantsActions.loadApplicantsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const reducer = (state: State | undefined, action: Action): State =>
  applicantsReducer(state, action);
