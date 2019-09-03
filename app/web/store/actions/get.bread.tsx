import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
export const getBread = createAction(type.GET_BREAD, mount => mount);
export const getBreadSuccess = createAction(
  type.GET_BREAD_SUCCESS,
  mount => mount
);
export const getBreadFailure = createAction(
  type.GET_BREAD_FAILURE,
  mount => mount
);
