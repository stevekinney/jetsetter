import * as constants from '../constants';

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

describe('Item Actions', () => {

  describe('addNewItem', () => {
    it('should return ADD_NEW_ITEM as the item type', () => {
      const action = addNewItem('item name');
      expect(action.type).toBe(constants.ADD_NEW_ITEM);
    });

    it('should return the provided value on the action', () => {
      const value = 'item name';
      const action = addNewItem(value);
      expect(action.item.value).toBe(value);
    });

    it('should default packed on the result action', () => {
      const action = addNewItem('item name');
      expect(action.item.packed).toBe(false);
    });

    it('provide a string id', () => {
      const action = addNewItem('item name');
      expect(typeof action.item.id).toBe('string');
    });
  });

  describe('toggleItem', () => {
    xit('should return TOGGLE_ITEM as the item type', () => {
      const action = toggleItem('item name');
      expect(action.type).toBe(constants.TOGGLE_ITEM);
    });

    xit('should return the provided id on the action', () => {
      const id = '123';
      const action = toggleItem(id);
      expect(action.id).toBe(id);
    });
  });

  describe('removeItem', () => {
    xit('should return REMOVE_ITEM as the item type', () => {
      const action = removeItem('item name');
      expect(action.type).toBe(constants.REMOVE_ITEM);
    });

    xit('should return the provided id on the action', () => {
      const id = '123';
      const action = removeItem(id);
      expect(action.id).toBe(id);
    });
  });

  describe('markAllAsUnpacked', () => {
    xit('should return MARK_ALL_AS_UNPACKED as the item type', () => {
      const action = markAllAsUnpacked('item name');
      expect(action.type).toBe(constants.MARK_ALL_AS_UNPACKED);
    });
  });

});

describe('New Item Actions', () => {

  describe('updateNewItemValue', () => {
    xit('should return UPDATE_NEW_ITEM_VALUE as the item type', () => {
      const action = updateNewItemValue('item name');
      expect(action.type).toBe(constants.UPDATE_NEW_ITEM_VALUE);
    });

    xit('should return the provided text', () => {
      const value = 'item name';
      const action = updateNewItemValue(value);
      expect(action.value).toBe(value);
    });
  });

});

describe('Filter Actions', () => {

  describe('updateUnpackedItemsFilter', () => {
    xit('should return UPDATE_UNPACKED_ITEMS_FILTER as the item type', () => {
      const action = updateUnpackedItemsFilter('item name');
      expect(action.type).toBe(constants.UPDATE_UNPACKED_ITEMS_FILTER);
    });

    xit('should return the provided text', () => {
      const text = 'item name';
      const action = updateUnpackedItemsFilter(text);
      expect(action.text).toBe(text);
    });
  });

  describe('updatePackedItemsFilter', () => {
    xit('should return UPDATE_PACKED_ITEMS_FILTER as the item type', () => {
      const action = updatePackedItemsFilter('item name');
      expect(action.type).toBe(constants.UPDATE_PACKED_ITEMS_FILTER);
    });

    xit('should return the provided text', () => {
      const text = 'item name';
      const action = updatePackedItemsFilter(text);
      expect(action.text).toBe(text);
    });
  });

});
