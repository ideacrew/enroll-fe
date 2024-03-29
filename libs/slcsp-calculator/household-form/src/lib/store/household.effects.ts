/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as HouseholdActions from './household.actions';

@Injectable()
export class HouseholdEffects {
  loadHouseholds$ = createEffect(this.loadHousehold());

  constructor(private actions$: Actions) {}

  loadHousehold() {
    return () => {
      return this.actions$.pipe(
        ofType(HouseholdActions.loadHouseholds),
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        concatMap(() => EMPTY as Observable<{ type: string }>)
      );
    };
  }
}
