import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { ApplicantsService } from '@enroll/financial-assistance/data-access';

import * as ApplicantsFeature from './applicants.reducer';
import * as ApplicantsActions from './applicants.actions';
import { ApplicantsEntity } from './applicants.models';

@Injectable()
export class ApplicantsEffects {
  init$ = createEffect(() =>
    this.dataPersistence.fetch(ApplicantsActions.init, {
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
  );

  constructor(
    private dataPersistence: DataPersistence<ApplicantsFeature.ApplicantsPartialState>,
    private applicantsService: ApplicantsService
  ) {}
}
