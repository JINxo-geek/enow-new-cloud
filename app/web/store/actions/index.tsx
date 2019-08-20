import { createAction } from "redux-actions";
import * as type from "../constants/actionType";
const getCourseware = createAction(type.GET_COURSEWARES);
const actionCreators = {
  getCourseware
};

export default { actionCreators };
