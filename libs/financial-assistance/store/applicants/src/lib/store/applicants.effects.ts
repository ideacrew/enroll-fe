import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { ApplicantsService } from '@enroll/financial-assistance/data-access';

import * as ApplicantsActions from './applicants.actions';
import { ApplicantsEntity } from './applicants.models';

@Injectable()
export class ApplicantsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApplicantsActions.init),
      fetch({
        run: () =>
          // Your custom service 'load' logic goes here. For now just return a success action...
          this.applicantsService.getApplicants().pipe(
            map((applicants) => {
              const transformedApplicants: ApplicantsEntity[] = applicants.map(
                (applicant) => ({
                  ...applicant,
                  dob: new Date(applicant.dob),
                })
              );

              return ApplicantsActions.loadApplicantsSuccess({
                applicants: transformedApplicants,
              });
            })
          ),
        onError: (action: ReturnType<typeof ApplicantsActions.init>, error) => {
          console.error('Error', error);
          return ApplicantsActions.loadApplicantsFailure({ error });
        },
      })
    )
  );

  addApplicant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApplicantsActions.addNeedsCoverageHouseholdMember),
      pessimisticUpdate({
        run: (action: ReturnType<typeof ApplicantsActions.addNeedsCoverageHouseholdMember>) =>
          this.applicantsService
            .createNewApplicant('12343', action.applicant)
            .pipe(
              map((applicant) =>
                ApplicantsActions.addNeedsCoverageHouseholdMemberSuccess({ applicant })
              )
            ),
        onError: () => null,
      })
    )
  );

  constructor(
    private actions$: Actions,
    private applicantsService: ApplicantsService
  ) {}
}