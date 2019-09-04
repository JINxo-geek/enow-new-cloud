import { handleActions } from 'redux-actions';
import {
  GET_RECIVE,
  GET_RECIVE_SUCCESS,
  GET_RECIVE_FAILURE
} from '../constants/actionType';
const reducers = handleActions(
  {
    [GET_RECIVE]: (state, action) => {
      return {
        ...state
      };
    },
    [GET_RECIVE_SUCCESS]: (state, action) => {
      return {
        data: action.payload.data
      };
    },
    [GET_RECIVE_FAILURE]: (state, action) => {
      return {
        x: action.payload.x
      };
    }
  },
  {
    data: {
      content: []
    }
  }
);
export default reducers;
