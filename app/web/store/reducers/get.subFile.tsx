import { handleActions } from "redux-actions";
import { GET_SUBFILE, GET_SUBFILE_SUCCESS } from "../constants/actionType";

const reducers = handleActions(
  {
    [GET_SUBFILE]: (state, action) => {
      console.log("触发SUBFILE成功", state, "action", action);
      return {
        parentId: action.payload.parentId,
        name: action.payload.name
      };
    },
    [GET_SUBFILE_SUCCESS]: (state, action) => {
      return {
        parentId: action.payload.parentId,
        name: action.payload.name
      };
    }
  },
  { parentId: "" }
);
export default reducers;
