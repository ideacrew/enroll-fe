import { createAction, props } from '@ngrx/store';
import { RootEntity } from './root.models';

export const init = createAction('[Root Page] Init');

export const loadRootSuccess = createAction(
  '[Root/API] Load Root Success',
  props<{ root: RootEntity[] }>()
);

export const loadRootFailure = createAction(
  '[Root/API] Load Root Failure',
  props<{ error: any }>()
);
