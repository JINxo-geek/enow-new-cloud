import { combineReducers } from "redux";
import getCourseware from "./get.courseware";
import getSubFile from "./get.subFile";
import postShare from "./post.share";
import getAllGroup from "./get.allGroup";
const rootReducer = combineReducers({
  getCourseware,
  getSubFile,
  postShare,
  getAllGroup
});

export default rootReducer;
