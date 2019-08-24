import { takeEvery } from "redux-saga/effects";
import { all, fork, put, take, call, select } from "redux-saga/effects";
import * as ActionType from "../constants/actionType";
import * as Action from "../actions";
import { apiGetGoursewareGrop, apiGetGoursewareAll } from "../services/api";

/***************************** Subroutines ************************************/
//排序函数
function* sortIt(content) {
  const updateTimeSort = (b, a) =>
    Number(a.update_time) - Number(b.update_time);
  // 先提取文件夹列表，并按更新时间降序排序
  const res = content.filter(c => c.isGroup).sort(updateTimeSort);
  // 再获取课件，并按更新时间降序排序
  const enbx = content.filter(c => !c.isGroup).sort(updateTimeSort);
  // 拼接数组
  res.push(...enbx);
  return res;
}
//
function* filterParentId(content, parentId = "") {
  return content.filter(item => {
    if (parentId == "") {
      return item.parentId == parentId || !item.parentId;
    } else {
      return item.parentId == parentId;
    }
  });
}

function* getCourseware() {
  const state = yield select();
  yield console.log("state", state);
  const { reqparams } = state.getCourseware;
  let data = yield call(apiGetGoursewareGrop, reqparams);
  /* 拿到total值，根据total值是否为0判断是否继续发送请求 */
  let total;
  yield (total = data.data.total);
  const totalIndex = Math.floor(total / 99);
  let index = 0;
  const promiseRet: any = [];
  let totalData: any = [];
  while (index <= totalIndex) {
    promiseRet.push(apiGetGoursewareGrop({ index: index, pagesize: 99 }));
    index++;
  }
  if (promiseRet.length) {
    const promiseRes = yield Promise.all(promiseRet);
    for (let p of promiseRes) {
      totalData.push(...p.data.content);
    }
  }
  const allgroup = yield call(apiGetGoursewareAll);
  //得到这个目录下的数据
  let filterParentIdData = yield call(filterParentId, totalData);
  //对数据进行排序
  data = yield call(sortIt, filterParentIdData);
  yield (data.allgroup = allgroup);
  yield put(Action.getCoursewareGroupSuccess({ data, reqparams }));
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
