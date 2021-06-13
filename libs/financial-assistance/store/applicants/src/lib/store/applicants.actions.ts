import { createAction, props } from '@ngrx/store';
import { ApplicantsEntity } from './applicants.models';

export const init = createAction('[Applicants Page] Init');

export const loadApplicantsSuccess = createAction(
  '[Applicants/API] Load Applicants Success',
  props<{ applicants: ApplicantsEntity[] }>()
);

export const loadApplicantsFailure = createAction(
  '[Applicants/API] Load Applicants Failure',
  props<{ error: any }>()
);
