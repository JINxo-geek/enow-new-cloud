import { handleActions } from 'redux-actions';
import {
  GET_COURSEWARES,
  GET_COURSEWARES_SUCCESS,
  GET_COURSEWARES_FAILURE,
  GET_COURSEWARES_GROUP,
  GET_COURSEWARES_GROUP_SUCCESS,
  GET_COURSEWARES_GROUP_FAILURE
} from '../constants/actionType';

const reducers = handleActions(
  {
    [GET_COURSEWARES]: (state, action) => {
      return {
        ...state,
        tableLoading: true
      };
    },
    [GET_COURSEWARES_SUCCESS]: (state, action) => {
      return {
        ...state
      };
    },
    [GET_COURSEWARES_FAILURE]: (state, action) => {
      return {
        ...state
      };
    },
    [GET_COURSEWARES_GROUP]: (state, action) => {
      return {
        ...state,
        tableLoading: true
      };
    },
    [GET_COURSEWARES_GROUP_SUCCESS]: (state, action) => {
      return {
        sortData: action.payload.sortData,
        partContentdata: action.payload.partdata,
        reqparams: action.payload.reqparam,
        tableLoading: action.payload.tableLoading
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
    parentId: '',
    partContentdata: [],
    tableLoading: true
  }
);
export default reducers;
