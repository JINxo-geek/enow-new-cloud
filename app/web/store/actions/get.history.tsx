import { createAction } from "redux-actions";
import * as type from "../constants/actionType";
export const getHistory = createAction(type.GET_HISTORY, mount => mount);
export const getHistorySuccess = createAction(
  type.GET_HISTORY_SUCCESS,
  mount => mount
);
export const getHistoryFailure = createAction(
  type.GET_HISTORY_FAILURE,
  mount => mount
);
