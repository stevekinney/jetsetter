import { combineReducers } from 'redux';

import filter from './filter-reducer';
import items from './items-reducer';
import newItemValue from './new-item-reducer';

export default combineReducers({
  filter,
  items,
  newItemValue,
});
