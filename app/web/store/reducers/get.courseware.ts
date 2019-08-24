import { handleActions } from "redux-actions";
import {
  GET_COURSEWARES,
  GET_COURSEWARES_SUCCESS,
  GET_COURSEWARES_FAILURE,
  GET_COURSEWARES_GROUP,
  GET_COURSEWARES_GROUP_SUCCESS,
  GET_COURSEWARES_GROUP_FAILURE
} from "../constants/actionType";

const reducers = handleActions(
  {
    [GET_COURSEWARES]: (state, action) => {
      return {
        ...state
      };
    },
    [GET_COURSEWARES_SUCCESS]: (state, action) => {
      console.log("触发成功", state, "action", action);
      return {
        ...state
      };
    },
    [GET_COURSEWARES_FAILURE]: (state, action) => {
      return {
        ...state
      };
    },
    [GET_COURSEWARES_GROUP]: (state, action) => {
      return {
        ...state
      };
    },
    [GET_COURSEWARES_GROUP_SUCCESS]: (state, action) => {
      console.log("GET_COURSEWARES_SUCCESS,触发成功", state, "action", action);
      return {
        myContentdata: action.payload
      };
    },
    [GET_COURSEWARES_GROUP_FAILURE]: (state, action) => {
      return {
        ...state
      };
    }
  },
  {
    myContentdata: { allgroup: { data: [] }, data: { content: [] } },
    reqparams: { index: 0, pagesize: 10 }
  }
);
export default reducers;
