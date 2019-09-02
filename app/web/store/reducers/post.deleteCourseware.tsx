import { handleActions } from "redux-actions";
import {
  COURSEWARE_DELETE,
  COURSEWARE_DELETE_SUCCESS,
  COURSEWARE_DELETE_FAILURE
} from "../constants/actionType";
const reducers = handleActions(
  {
    [COURSEWARE_DELETE]: (state, action) => {
      return {
        x: action.payload.x
      };
    },
    [COURSEWARE_DELETE_SUCCESS]: (state, action) => {
      return {
        x: action.payload.x
      };
    },
    [COURSEWARE_DELETE_FAILURE]: (state, action) => {
      return {
        x: action.payload.x
      };
    }
  },
  {}
);
export default reducers;
