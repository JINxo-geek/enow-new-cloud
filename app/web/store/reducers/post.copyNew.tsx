import { handleActions } from "redux-actions";
import {
  COPY_NEW,
  COPY_NEW_SUCCESS,
  COPY_NEW_FAILURE
} from "../constants/actionType";
const reducers = handleActions(
  {
    [COPY_NEW]: (state, action) => {
      return {
        x: action.payload.x
      };
    },
    [COPY_NEW_SUCCESS]: (state, action) => {
      return {
        x: action.payload.x
      };
    },
    [COPY_NEW_FAILURE]: (state, action) => {
      return {
        x: action.payload.x
      };
    }
  },
  {}
);
export default reducers;
