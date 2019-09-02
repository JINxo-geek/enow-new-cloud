import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
export const deleteCourseware = createAction(
  type.COURSEWARE_DELETE,
  mount => mount
);
export const deleteCoursewareSuccess = createAction(
  type.COURSEWARE_DELETE_SUCCESS,
  mount => mount
);
export const deleteCoursewareFailure = createAction(
  type.COURSEWARE_DELETE_FAILURE,
  mount => mount
);
