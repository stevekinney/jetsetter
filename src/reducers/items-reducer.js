import omit from 'lodash/omit';
import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM } from '../constants';

export default function(state = {}, action) {
  if (action.type === ADD_NEW_ITEM) {
    const { id, packed, value } = action;
    return { ...state, [action.id]: { id, packed, value } };
  }

  if (action.type === REMOVE_ITEM) {
    return omit(state, action.id);
  }

  if (action.type === TOGGLE_ITEM) {
    const item = state[action.id];
    return { ...state, [action.id]: { ...item, packed: !item.packed } };
  }

  return state;
}
