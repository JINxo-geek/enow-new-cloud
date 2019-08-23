import { createAction } from "redux-actions";
import * as type from "../constants/actionType";

export const getCourseware = createAction(type.GET_COURSEWARES, mount => mount);
export const getCoursewareSuccess = createAction(
  type.GET_COURSEWARES_SUCCESS,
  mount => mount,
  () => {
    return { admin: true };
  }
);

export const getCoursewareFailure = createAction(
  type.GET_COURSEWARES_FAILURE,
  mount => mount
);

// "/api/v3/courseware/group/list"
export const getCoursewareGroup = createAction(
  type.GET_COURSEWARES_GROUP,
  mount => mount
);
export const getCoursewareGroupSuccess = createAction(
  type.GET_COURSEWARES_GROUP_SUCCESS,
  mount => mount,
  () => {
    return { admin: true };
  }
);

export const getCoursewareGroupFailure = createAction(
  type.GET_COURSEWARES_GROUP_FAILURE,
  mount => mount
);
