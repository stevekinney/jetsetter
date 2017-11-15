import {
  addNewItem,
  toggleItem,
  removeItem,
  markAllAsUnpacked
} from '../actions/items-actions';

import {
  updateUnpackedItemsFilter,
  updatePackedItemsFilter,
} from '../actions/filter-actions';

import {
  updateNewItemValue,
} from '../actions/new-item-actions'

import reducer from '../reducers';
import initialState from '../store/initial-state';

describe('Combined Reducer', () => {
  it('should match the initial state', () => {
    expect(reducer(initialState, {})).toBe(initialState);
  });

  xit('addNewItem', () => {
    const value = 'item name';
    const action = addNewItem(value);
    const item = action.item;
    const state = reducer(initialState, action);

    expect(state.items).toContain(item);
  });

  xit('removeItem', () => {
    const [ item ] = initialState.items;
    const action = removeItem(item.id);
    const state = reducer(initialState, action);

    expect(state.items).not.toContain(item);
  });

  xit('toggleitem', () => {
    const [ item ] = initialState.items;
    const expectedStatus = !item.packed;
    const action = toggleItem(item.id);
    const state = reducer(initialState, action);
    const [ resultingItem ] = state.items;

    expect(resultingItem.packed).not.toContain(expectedStatus);
  });

  xit('markAllAsUnpacked', () => {
    const action = markAllAsUnpacked();
    const state = reducer(initialState, action);

    const areAllUnpacked = state.items.every(item => !item.packed);

    expect(areAllUnpacked).toBe(true);
  });

  describe('updateNewItemValue', () => {
    xit('should update the newItemValue field on the resulting state', () => {
      const value = 'item name';
      const action = updateNewItemValue(value);
      const state = reducer(initialState, action);
      expect(state.newItemValue).toBe(value);
    });
  });

  describe('updatePackedItemsFilter', () => {
    xit('should update the newItemValue field on the resulting state', () => {
      const value = 'item name';
      const action = updatePackedItemsFilter(value);
      const state = reducer(initialState, action);
      expect(state.filter.packedItemsFilter).toBe(value);
    });
  });

  describe('updateUnpackedItemsFilter', () => {
    xit('should update the newItemValue field on the resulting state', () => {
      const value = 'item name';
      const action = updateUnpackedItemsFilter(value);
      const state = reducer(initialState, action);
      expect(state.filter.unpackedItemsFilter).toBe(value);
    });
  });
})
