import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
export const createFolder = createAction(type.CREATE_FOLDER, mount => mount);
export const createFolderSuccess = createAction(
  type.CREATE_FOLDER_SUCCESS,
  mount => mount
);
export const createFolderFailure = createAction(
  type.CREATE_FOLDER_FAILURE,
  mount => mount
);
