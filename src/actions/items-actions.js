import uniqueId from 'lodash/uniqueId';
import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED } from '../constants';

export const addNewItem = (value) => ({
  type: ADD_NEW_ITEM,
  item: {
    id: uniqueId(),
    packed: false,
    value,
  }
});

export const toggleItem = () => ({});

export const removeItem = () => ({});

export const markAllAsUnpacked = () => ({});
