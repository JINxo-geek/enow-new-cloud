import { createAction } from "redux-actions";
import * as type from "../constants/actionType";
export const getInfo = createAction(type.GET_INFO, mount => mount);
export const getInfoSuccess = createAction(
  type.GET_INFO_SUCCESS,
  mount => mount
);
export const getInfoFailure = createAction(
  type.GET_INFO_FAILURE,
  mount => mount
);
