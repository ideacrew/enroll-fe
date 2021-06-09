import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as RootActions from './root.actions';
import * as RootFeature from './root.reducer';
import * as RootSelectors from './root.selectors';

@Injectable()
export class RootFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(RootSelectors.getRootLoaded));
  allRoot$ = this.store.pipe(select(RootSelectors.getAllRoot));
  selectedRoot$ = this.store.pipe(select(RootSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(RootActions.init());
  }
}
