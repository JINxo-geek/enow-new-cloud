import { handleActions } from 'redux-actions';
import {
  MOVE_HERE,
  MOVE_HERE_SUCCESS,
  MOVE_HERE_FAILURE
} from '../constants/actionType';
const reducers = handleActions(
  {
    [MOVE_HERE]: (state, action) => {
      return {
        ...state
      };
    },
    [MOVE_HERE_SUCCESS]: (state, action) => {
      return {
        ...state
      };
    },
    [MOVE_HERE_FAILURE]: (state, action) => {
      return {
        ...state
      };
    }
  },
  {}
);
export default reducers;
