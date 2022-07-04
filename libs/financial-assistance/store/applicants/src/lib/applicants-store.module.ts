import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromApplicants from './store/applicants.reducer';
import { ApplicantsEffects } from './store/applicants.effects';
import { ApplicantsFacade } from './store/applicants.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromApplicants.APPLICANTS_FEATURE_KEY,
      fromApplicants.reducer
    ),
    EffectsModule.forFeature([ApplicantsEffects]),
  ],
  providers: [ApplicantsFacade],
})
export class ApplicantsStoreModule {}
