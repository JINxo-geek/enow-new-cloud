import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
export const moveHere = createAction(type.MOVE_HERE, mount => mount);
export const moveHereSuccess = createAction(
  type.MOVE_HERE_SUCCESS,
  mount => mount
);
export const moveHereFailure = createAction(
  type.MOVE_HERE_FAILURE,
  mount => mount
);
