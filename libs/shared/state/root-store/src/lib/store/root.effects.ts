import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as RootFeature from './root.reducer';
import * as RootActions from './root.actions';

@Injectable()
export class RootEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RootActions.init),
      fetch({
        run: (action) =>
          // Your custom service 'load' logic goes here. For now just return a success action...
          RootActions.loadRootSuccess({ root: [] }),
        onError: (action, error) => {
          console.error('Error', error);
          return RootActions.loadRootFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
