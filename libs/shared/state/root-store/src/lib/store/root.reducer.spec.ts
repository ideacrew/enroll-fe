import { RootEntity } from './root.models';
import * as RootActions from './root.actions';
import { State, initialState, reducer } from './root.reducer';

describe('Root Reducer', () => {
  const createRootEntity = (id: string, name = ''): RootEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Root actions', () => {
    it('loadRootSuccess should return set the list of known Root', () => {
      const root = [
        createRootEntity('PRODUCT-AAA'),
        createRootEntity('PRODUCT-zzz'),
      ];
      const action = RootActions.loadRootSuccess({ root });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
