/* eslint-disable unicorn/consistent-function-scoping */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ApplicantsService } from '@enroll/financial-assistance/data-access';

import * as ApplicantsActions from './applicants.actions';

@Injectable()
export class ApplicantsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApplicantsActions.init),
      switchMap(() =>
        this.applicantsService.getApplicants().pipe(
          map((applicants) =>
            ApplicantsActions.loadApplicantsSuccess({
              applicants,
            })
          ),
          catchError((error) =>
            of(ApplicantsActions.loadApplicantsFailure({ error }))
          )
        )
      )
    )
  );

  addApplicant2$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApplicantsActions.addNeedsCoverageHouseholdMember),

      switchMap((action) =>
        this.applicantsService
          .createNewHouseholdMember('12343', action.applicant)
          .pipe(
            map((applicant) =>
              ApplicantsActions.addNeedsCoverageHouseholdMemberSuccess({
                applicant,
              })
            ),
            catchError((error) => of(error))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private applicantsService: ApplicantsService
  ) {}
}
