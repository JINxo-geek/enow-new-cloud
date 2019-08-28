import { handleActions } from "redux-actions";
import {
  MOVE_HERE,
  MOVE_HERE_SUCCESS,
  MOVE_HERE_FAILURE
} from "../constants/actionType";
const reducers = handleActions({
  [MOVE_HERE]: (state, action) => {
    console.log("MOVE_HERE", state, "action", action);
    return {
      x: action.payload.x
    };
  },
  [MOVE_HERE_SUCCESS]: (state, action) => {
    console.log("MOVE_HERE_SUCCESS", state, "action", action);
    return {
      x: action.payload.allGroup
    };
  },
  [MOVE_HERE_FAILURE]: (state, action) => {
    console.log("MOVE_HERE_FAILURE", state, "action", action);
    return {
      x: action.payload.x
    };
  }
});
