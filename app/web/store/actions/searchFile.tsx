import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
export const searchFile = createAction(type.SEARCH, mount => mount);
export const searchFileSuccess = createAction(
  type.SEARCH_SUCCESS,
  mount => mount
);
export const searchFileFailure = createAction(
  type.SEARCH_FAILURE,
  mount => mount
);
