import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
//
export const getSubFile = createAction(type.GET_SUBFILE, mount => mount);
export const getSubFileSuccess = createAction(
  type.GET_SUBFILE_SUCCESS,
  mount => mount,
  () => {
    // 传递给reducer的参数
    return { admin: true };
  }
);

// export const getCoursewareFailure = createAction(
//   type.GET_COURSEWARES_FAILURE,
//   mount => mount
// );
