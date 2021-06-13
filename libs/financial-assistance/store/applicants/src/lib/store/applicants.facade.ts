import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as ApplicantsActions from './applicants.actions';
import * as ApplicantsSelectors from './applicants.selectors';

@Injectable()
export class ApplicantsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ApplicantsSelectors.getApplicantsLoaded));
  allApplicants$ = this.store.pipe(
    select(ApplicantsSelectors.getAllApplicants)
  );
  selectedApplicants$ = this.store.pipe(
    select(ApplicantsSelectors.getSelected)
  );

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ApplicantsActions.init());
  }
}
