import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
export const getRecive = createAction(type.GET_RECIVE, mount => mount);
export const getReciveSuccess = createAction(
  type.GET_RECIVE_SUCCESS,
  mount => mount
);
export const getReciveFailure = createAction(
  type.GET_RECIVE_FAILURE,
  mount => mount
);
