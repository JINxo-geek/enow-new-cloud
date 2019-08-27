import { combineReducers } from "redux";
import getCourseware from "./get.courseware";
import getSubFile from "./get.subFile";
import postShare from "./post.share";

const rootReducer = combineReducers({
  getCourseware,
  getSubFile,
  postShare
});

export default rootReducer;
