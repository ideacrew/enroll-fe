import { RootEntity } from './root.models';
import { rootAdapter, RootPartialState, initialState } from './root.reducer';
import * as RootSelectors from './root.selectors';

describe('Root Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRootId = (it: RootEntity) => it.id;
  const createRootEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as RootEntity);

  let state: RootPartialState;

  beforeEach(() => {
    state = {
      root: rootAdapter.setAll(
        [
          createRootEntity('PRODUCT-AAA'),
          createRootEntity('PRODUCT-BBB'),
          createRootEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Root Selectors', () => {
    it('getAllRoot() should return the list of Root', () => {
      const results = RootSelectors.getAllRoot(state);
      const selId = getRootId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = RootSelectors.getSelected(state) as RootEntity;
      const selId = getRootId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getRootLoaded() should return the current 'loaded' status", () => {
      const result = RootSelectors.getRootLoaded(state);

      expect(result).toBe(true);
    });

    it("getRootError() should return the current 'error' state", () => {
      const result = RootSelectors.getRootError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
