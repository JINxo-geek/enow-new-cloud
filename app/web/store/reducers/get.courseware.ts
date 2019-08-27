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
    // [GET_COURSEWARES_GROUP]: (state, action) => {
    //   return {
    //     ...state
    //   };
    // },
    [GET_COURSEWARES_GROUP_SUCCESS]: (state, action) => {
      console.log("GET_COURSEWARES_SUCCESS,触发成功", state, "action", action);
      return {
        sortData: action.payload.sortData,
        partContentdata: action.payload.partdata,
        reqparams: action.payload.reqparams
      };
    },
    [GET_COURSEWARES_GROUP_FAILURE]: (state, action) => {
      return {
        ...state
      };
    }
  },
  {
    sortData: [],
    reqparams: { index: 0, pagesize: 99 },
    parentId: "",
    partContentdata: []
  }
);
export default reducers;
