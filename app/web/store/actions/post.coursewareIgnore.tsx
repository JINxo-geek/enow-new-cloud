import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
export const coursewareIgnore = createAction(
  type.COURSEWARE_IGNORE,
  mount => mount
);
export const coursewareIgnoreSuccess = createAction(
  type.COURSEWARE_IGNORE_SUCCESS,
  mount => mount
);
export const coursewareIgnoreFailure = createAction(
  type.COURSEWARE_IGNORE_FAILURE,
  mount => mount
);
