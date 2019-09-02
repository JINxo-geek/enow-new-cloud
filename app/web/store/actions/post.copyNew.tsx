import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
export const copyNew = createAction(type.COPY_NEW, mount => mount);
export const copyNewSuccess = createAction(
  type.COPY_NEW_SUCCESS,
  mount => mount
);
export const copyNewFailure = createAction(
  type.COPY_NEW_FAILURE,
  mount => mount
);
