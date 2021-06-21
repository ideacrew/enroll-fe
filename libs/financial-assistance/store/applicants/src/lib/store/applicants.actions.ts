import {
  Applicant,
  NeedsCoverageHouseholdMember,
} from '@enroll/financial-assistance/data-access';
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

// Add new household member that needs coverage
export const addNeedsCoverageHouseholdMember = createAction(
  '[Applicants/API] Add Household Member With Coverage to Application',
  props<{ applicant: NeedsCoverageHouseholdMember }>()
);

export const addNeedsCoverageHouseholdMemberSuccess = createAction(
  '[Applicants/API] Add Household Member With Coverage Success',
  props<{ applicant: Applicant }>()
);

export const addNeedsCoverageHouseholdMemberFailure = createAction(
  '[Applicants/API] Add Household Member With Coverage Failure',
  props<{ error: string }>()
);

// Add new household member that does NOT need coverage
