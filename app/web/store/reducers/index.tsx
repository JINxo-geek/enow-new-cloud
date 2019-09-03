import { combineReducers } from 'redux';
import getCourseware from './get.courseware';
import getSubFile from './get.subFile';
import postShare from './post.share';
import getAllGroup from './get.allGroup';
import hereMove from './post.moveHere';
import breadcrumbs from './get.bread';
import getRecive from './get.recive';
const rootReducer = combineReducers({
  getCourseware,
  getSubFile,
  postShare,
  getAllGroup,
  hereMove,
  breadcrumbs,
  getRecive
});

export default rootReducer;
