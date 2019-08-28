import { handleActions } from "redux-actions";
import {
  GET_ALL_GROUP,
  GET_ALL_GROUP_SUCCESS,
  GET_ALL_GROUP_FAILURE
} from "../constants/actionType";

const reducers = handleActions(
  {
    // [GET_ALL_GROUP]: (state, action) => {
    //   console.log("CREATE_G_SHARELINK", state, "action", action);
    //   return {
    //     expiredDay: action.payload.expiredDay,
    //     id: action.payload.id,
    //     type: action.payload.type
    //   };
    // },
    [GET_ALL_GROUP_SUCCESS]: (state, action) => {
      console.log("GET_ALL_GROUP_SUCCESS", state, "action", action);
      return {
        allGroup: action.payload.allGroup
      };
    },
    [GET_ALL_GROUP_FAILURE]: (state, action) => {
      return {
        ...state,
        link: action.payload.shareMsg.data.link,
        content: action.payload.shareMsg.data.content,
        password: action.payload.shareMsg.data.password
      };
    }
  },
  {
    allGroup: { data: [] }
  }
);
export default reducers;
