import { createAction } from "redux-actions";
    import * as type from "../constants/actionType";
    export const refresh = createAction(type.REFRESH, mount => mount);
    export const refreshSuccess = createAction(type.REFRESH_SUCCESS, mount => mount);
    export const refreshFailure = createAction(type.REFRESH_FAILURE, mount => mount);