import {
  UPDATE_ALL_ITEMS,
} from '../constants';

import Api from '../lib/api';

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
    Api.add(item).then((...args) => {
      dispatch(getAllItems());
    });
  }
};

export const toggleItem = id => {
  return (dispatch, getState) => {
    const item = getState().items.find(item => id === item.id);
    Api.update({ ...item, packed: !item.packed }).then(() => {
      dispatch(getAllItems())
    });
  }
};

export const removeItem = id => {
  return dispatch => {
    Api.delete(id).then(() => {
      dispatch(getAllItems());
    });
  };
};

export const markAllAsUnpacked = () => {
  return dispatch => {
    Api.markAllAsUnpacked().then(() => {
      dispatch(getAllItems());
    });
  };
}
