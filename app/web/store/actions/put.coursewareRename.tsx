import { createAction } from 'redux-actions';
import * as type from '../constants/actionType';
export const coursewareRename = createAction(
  type.COURSEWARE_RENAME,
  mount => mount
);
export const coursewareRenameSuccess = createAction(
  type.COURSEWARE_RENAME_SUCCESS,
  mount => mount
);
export const coursewareRenameFailure = createAction(
  type.COURSEWARE_RENAME_FAILURE,
  mount => mount
);
