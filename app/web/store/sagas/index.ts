import { takeEvery } from "redux-saga/effects";
import { all, delay, put, takeLatest, call } from "redux-saga/effects";
import * as ActionType from "../constants/actionType";
import { getCourseware } from "../services";
/***************************** Subroutines ************************************/

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

// // FETCH_USERS
// function* fetchUsers(action) { ... }

// // CREATE_USER
// function* createUser(action) { ... }

// 同时使用它们
export default function* rootSaga() {
  //   yield takeEvery('FETCH_USERS', fetchUsers)
  //   yield takeEvery('CREATE_USER', createUser)
  const data = yield call(getCourseware, {
    index: 0,
    pagesize: 10,
    parentId: "1"
  });
  console.log("hello", data);
  yield put({
    type: ActionType.GET_COURSEWARES
  });
}
