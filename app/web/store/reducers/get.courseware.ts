import { handleAction } from "redux-actions";
import { GET_COURSEWARES } from "../constants/actionType";

const defaultState = { count: 1 };
const reducer = handleAction(
  GET_COURSEWARES,
  (state, action) => {
    console.log("触发reducer");
    return {
      count: state.count + action.payload
    };
  },
  defaultState
);
export default reducer;
