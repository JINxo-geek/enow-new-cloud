import { handleActions } from "redux-actions";
import {
  CREATE_FOLDER,
  CREATE_FOLDER_SUCCESS,
  CREATE_FOLDER_FAILURE
} from "../constants/actionType";
const reducers = handleActions(
  {
    [CREATE_FOLDER]: (state, action) => {
      return {
        x: action.payload.x
      };
    },
    [CREATE_FOLDER_SUCCESS]: (state, action) => {
      return {
        x: action.payload.x
      };
    },
    [CREATE_FOLDER_FAILURE]: (state, action) => {
      return {
        x: action.payload.x
      };
    }
  },
  {}
);
export default reducers;
