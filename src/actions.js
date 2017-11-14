import uniqueId from 'lodash';
import AppDispatcher from './dispatcher';

export const addItem = value => {
  AppDispatcher.dispatch({
    type: 'ADD_NEW_ITEM',
    item: {
      id: uniqueId(),
      packed: false,
      value,
    },
  });
};

export const toggleItem = item => {
  AppDispatcher.dispatch({
    type: 'UPDATE_ITEM',
    item: { ...item, packed: !item.packed },
  });
};

export const removeItem = item => {
  AppDispatcher.dispatch({
    type: 'REMOVE_ITEM',
    item,
  });
};
