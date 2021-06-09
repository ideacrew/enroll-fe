import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';
import * as fromRoot from './store/root.reducer';
import { RootEffects } from './store/root.effects';
import { RootFacade } from './store/root.facade';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([RootEffects]),
    StoreDevtoolsModule.instrument(),
    StoreModule.forFeature(fromRoot.ROOT_FEATURE_KEY, fromRoot.reducer),
  ],
  providers: [RootFacade],
})
export class RootStoreModule {}
