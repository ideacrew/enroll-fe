import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { RootEffects } from './root.effects';
import * as RootActions from './root.actions';

describe('RootEffects', () => {
  let actions: Observable<any>;
  let effects: RootEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        RootEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(RootEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: RootActions.init() });

      const expected = hot('-a-|', {
        a: RootActions.loadRootSuccess({ root: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
