import { handleActions } from 'redux-actions';
import {
  CREATE_G_SHARELINK,
  CREATE_G_SHARELINK_SUCCESS,
  CREATE_G_SHARELINK_FAILURE
} from '../constants/actionType';

const reducers = handleActions(
  {

    [CREATE_G_SHARELINK_SUCCESS]: (state, action) => {
      return {
        ...state,
        link: action.payload.shareMsg.data.link,
        content: action.payload.shareMsg.data.content,
        password: action.payload.shareMsg.data.password,
        linkLock: action.payload.linkLock
      };
    },
    [CREATE_G_SHARELINK_FAILURE]: (state, action) => {
      return {
        ...state,
        link: action.payload.shareMsg.data.link,
        content: action.payload.shareMsg.data.content,
        password: action.payload.shareMsg.data.password
      };
    }
  },
  {
    id: '',
    type: 0,
    expiredDay: 30,
    content: ' ',
    link: '',
    password: '',
    linkLock: true
  }
);
export default reducers;
