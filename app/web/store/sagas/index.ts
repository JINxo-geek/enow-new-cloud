import { takeEvery } from "redux-saga/effects";
import { all, fork, put, take, call, select } from "redux-saga/effects";
import * as ActionType from "../constants/actionType";
import * as Action from "../actions";
import {
  apiGetCourseware,
  apiGetGoursewareGrop,
  apiGetGoursewareList,
  apiGetGoursewareAll
} from "../services/api";

/***************************** Subroutines ************************************/
function* getCourseware() {
  const state = yield select();
  // const groupList = yield call(apiGetCourseware, {
  //   index: 0,
  //   pagesize: 10,
  //   parentId: "6bb63711-92c9-4758-be54-1f217a1ecc0b"
  // });
  yield console.log("state", state);
  const { getCourseware } = state;
  const data = yield call(apiGetGoursewareGrop, getCourseware.reqparams);
  // const datalist = yield call(apiGetGoursewareList, {
  //   index: 1,
  //   pagesize: 10,
  //   thumb: 0
  // });
  const allgroup = yield call(apiGetGoursewareAll);
  yield (data.allgroup = allgroup);
  // yield console.log("课件组列表", groupList);
  yield console.log("课件组列表v3版", data);
  // yield console.log("获取用户文档列表", datalist);
  // yield console.log("获取用户课件组层级", allgroup);
  yield put(Action.getCoursewareGroupSuccess(data));
  // console.log("action", action);
  // const state = yield select();
  // console.log("state", state);
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

//  WATCHERS
function* watchGetCourseware() {
  yield takeEvery(ActionType.GET_COURSEWARES_GROUP, getCourseware);
}

// // CREATE_USER
// function* createUser(action) { ... }

// 同时使用它们
export default function* rootSaga() {
  yield yield all([fork(watchGetCourseware)]);
}
