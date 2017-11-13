import uniqueId from 'lodash/uniqueId';
import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM } from '../constants';

export const addNewItem = (value) => ({
  type: ADD_NEW_ITEM,
  id: uniqueId(),
  packed: false,
  value,
});

export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  id,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id,
});
