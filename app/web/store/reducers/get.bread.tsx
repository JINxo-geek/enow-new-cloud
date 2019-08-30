import { handleActions } from "redux-actions";
import {
  GET_BREAD,
  GET_BREAD_SUCCESS,
  GET_BREAD_FAILURE
} from "../constants/actionType";
const reducers = handleActions(
  {
    // [GET_BREAD]: (state, action) => {
    //   console.log("GET_BREAD", state, "action", action);
    //   return {
    //     x: action.payload.x
    //   };
    // },
    [GET_BREAD_SUCCESS]: (state, action) => {
      console.log("GET_BREAD_SUCCESS", state, "action", action);
      return {
        breadArray: action.payload.breadArray
      };
    },
    [GET_BREAD_FAILURE]: (state, action) => {
      console.log("GET_BREAD_FAILURE", state, "action", action);
      return {
        x: action.payload.x
      };
    }
  },
  {
    breadArray: [{ name: "返回上一级", id: "pop" }, { name: "根目录", id: "" }]
  }
);
export default reducers;
