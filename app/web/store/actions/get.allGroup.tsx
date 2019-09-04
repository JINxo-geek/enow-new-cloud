import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';

export const getAllGroup = createAction(type.GET_ALL_GROUP, mount => mount);
export const getAllGroupSuccess = createAction(
  type.GET_ALL_GROUP_SUCCESS,
  mount => mount
);

export const getAllGroupFailure = createAction(
  type.GET_ALL_GROUP_FAILURE,
  mount => mount
);
