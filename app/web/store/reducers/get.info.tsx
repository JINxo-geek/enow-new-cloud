import { handleActions } from "redux-actions";
import {
  GET_INFO,
  GET_INFO_SUCCESS,
  GET_INFO_FAILURE
} from "../constants/actionType";
const reducers = handleActions(
  {
    [GET_INFO]: (state, action) => {
      return {
        x: action.payload.x
      };
    },
    [GET_INFO_SUCCESS]: (state, action) => {
      return {
        x: action.payload.x
      };
    },
    [GET_INFO_FAILURE]: (state, action) => {
      return {
        x: action.payload.x
      };
    }
  },
  {}
);
export default reducers;
