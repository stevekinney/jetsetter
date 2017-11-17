import {
  UPDATE_ALL_ITEMS,
  ADD_NEW_ITEM,
  REMOVE_ITEM,
  TOGGLE_ITEM,
  MARK_ALL_AS_UNPACKED,
} from '../constants';

import Api from '../lib/api';

export const fetchItems = () => ({
  type: 'FETCH_ITEMS'
});

export const updateAllItems = (items) => ({
  type: UPDATE_ALL_ITEMS,
  items,
});

export const getAllItems = () => {
  return dispatch => {
    Api.getAll().then(items => {
      dispatch({
        type: UPDATE_ALL_ITEMS,
        items,
      });
    });
  };
};

export const addNewItem = value => {
  const item = {
    packed: false,
    value,
  };

  return dispatch => {
    Api.add(item).then(item => {
      dispatch({
        type: ADD_NEW_ITEM,
        item
      });
    });
  };
};

export const toggleItem = item => {
  const updatedItem = { ...item, packed: !item.packed };
  return (dispatch, getState) => {
    Api.update(updatedItem).then(() => {
      dispatch({
        type: TOGGLE_ITEM,
        item: updatedItem,
      });
    });
  };
};

export const removeItem = item => {
  return dispatch => {
    Api.delete(item).then(() => {
      dispatch({
        type: REMOVE_ITEM,
        id: item.id,
      });
    });
  };
};

export const markAllAsUnpacked = () => {
  return dispatch => {
    Api.markAllAsUnpacked().then(() => {
      dispatch({
        type: MARK_ALL_AS_UNPACKED,
      });
    });
  };
};
