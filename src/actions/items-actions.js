import uniqueId from 'lodash/uniqueId';
import {
  ADD_NEW_ITEM,
  REMOVE_ITEM,
  TOGGLE_ITEM,
  MARK_ALL_AS_UNPACKED,
  UNDO_ITEM_ACTION,
  REDO_ITEM_ACTION
} from '../constants';

export const addNewItem = value => ({
  type: ADD_NEW_ITEM,
  id: uniqueId(),
  packed: false,
  value,
});

export const toggleItem = id => ({
  type: TOGGLE_ITEM,
  id,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});

export const markAllAsUnpacked = () => ({
  type: MARK_ALL_AS_UNPACKED,
});

export const undoItemAction = () => ({
  type: UNDO_ITEM_ACTION,
});

export const redoItemAction = () => ({
  type: REDO_ITEM_ACTION,
});
