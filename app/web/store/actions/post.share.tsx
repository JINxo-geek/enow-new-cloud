import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
//
export const getShare = createAction(type.CREATE_G_SHARELINK, mount => mount);
export const getShareSuccess = createAction(
  type.CREATE_G_SHARELINK_SUCCESS,
  mount => mount
);

export const getShareFailure = createAction(
  type.CREATE_G_SHARELINK_FAILURE,
  mount => mount
);
