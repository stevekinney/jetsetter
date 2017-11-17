import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED, UPDATE_ALL_ITEMS } from '../constants';
import Api from '../lib/api';

export const getAllItems = () => {
  return dispatch => {
    Api.getAll().then(items => {
      dispatch({
        type: UPDATE_ALL_ITEMS,
        items
      });
    });
  }
}

export const addNewItem = (value) => {
  const item = {
    packed: false,
    value,
  }

  return dispatch => {
    Api.add(item).then(item => {
      dispatch({
        type: ADD_NEW_ITEM,
        item
      });
    });
  }
};

export const toggleItem = item => {
  console.log('toggleItem', item);
  const updatedItem = { ...item, packed: !item.packed };
  return dispatch => {
    Api.update(updatedItem).then(() => {
      dispatch ({
        type: TOGGLE_ITEM,
        item: updatedItem
      });
    });
  }
};

export const removeItem = (id) => {
  return dispatch => {
    Api.delete(id).then(() => {
      dispatch(({
        type: REMOVE_ITEM,
        id,
      }));
    })
  }
};

export const markAllAsUnpacked = () => {
  return dispatch => {
    Api.markAllAsUnpacked().then(() => {
      dispatch({
        type: MARK_ALL_AS_UNPACKED
      })
    });
  }
}
