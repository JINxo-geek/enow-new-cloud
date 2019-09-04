import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
export const coursewareReceive = createAction(
  type.COURSEWARE_RECEIVE,
  mount => mount
);
export const coursewareReceiveSuccess = createAction(
  type.COURSEWARE_RECEIVE_SUCCESS,
  mount => mount
);
export const coursewareReceiveFailure = createAction(
  type.COURSEWARE_RECEIVE_FAILURE,
  mount => mount
);
