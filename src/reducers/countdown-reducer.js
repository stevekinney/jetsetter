import { UPDATE_COUNTDOWN } from '../constants';

export default function(state = '', action) {
  if (action.type === UPDATE_COUNTDOWN) {
    return action.message;
  }

  return state;
}
