import { takeEvery } from "redux-saga/effects";
import { message } from "antd";
import { all, fork, put, take, call, select } from "redux-saga/effects";
import * as ActionType from "../constants/actionType";
import * as Action from "../actions/get.courseware";
import { getShareSuccess, getShareFailure } from "../actions/post.share";
import { getAllGroupSuccess } from "../actions/get.allGroup";
import {
  apiGetGoursewareGrop,
  apiGetGoursewareAll,
  apiGreateGShareLink,
  apiMoveHere
} from "../services/api";

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
//过滤parentId
function* filterParentId(content, parentId = "") {
  return content.filter(item => {
    if (parentId == "") {
      return item.parentId == parentId || !item.parentId;
    } else {
      return item.parentId == parentId;
    }
  });
}
//过滤name
// function* filtername(content, name = "") {
//   return content.filter(item => {
//     if (name == "") {
//       return item.parentId == name || !item.parentId;
//     } else {
//       return item.parentId == name;
//     }
//   });
// }

/* 获得所有数据 */
function* getCourseware() {
  const state = yield select();
  const { reqparams, parentId } = state.getCourseware;
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
  // const allgroup = yield call(apiGetGoursewareAll);
  //对数据进行排序
  let sortData = yield call(sortIt, totalData);
  //得到根目录下的数据
  let filterParentIdData = yield call(filterParentId, sortData, parentId);

  let partdata = filterParentIdData;
  // yield (data.allgroup = allgroup);
  yield put(
    Action.getCoursewareGroupSuccess({ sortData, partdata, reqparams })
  );
}

/* 获取某个文件夹的文件 */
function* getSubfile() {
  const state = yield select();
  const { sortData, reqparams } = state.getCourseware;
  const { parentId } = state.getSubFile;
  let filterParentIdData = yield call(filterParentId, sortData, parentId);
  let partdata = filterParentIdData;
  yield put(
    Action.getCoursewareGroupSuccess({ sortData, partdata, reqparams })
  );
}

/* 生成分享链接 */

function* getShareLink(e) {
  let { expiredDay, type, id, linkLock } = e.payload;
  const shareMsg = yield call(apiGreateGShareLink, { expiredDay, type, id });
  if (shareMsg.error_code === 0) {
    linkLock = false;
    yield put(getShareSuccess({ shareMsg, linkLock }));
  } else if (shareMsg.error_code === 41001) {
    yield put(getShareFailure({ msg: "没有找到课件" }));
  }
}
/* 获取目录 */
function* getAllGroup() {
  const allGroup = yield call(apiGetGoursewareAll);
  yield put(getAllGroupSuccess({ allGroup }));
}

/* 移动课件 */
function* moveHere(e) {
  console.log("e", e);
  const result = yield call(apiMoveHere, e.payload);
  yield call(erro, result);
}
/* 判断是否成功*/
function* erro(result) {
  console.log("ee", result);
  if (result.error_code == 0) {
    message.success("移动成功");
    yield call(getCourseware);
    yield call(getSubfile);
  } else {
    message.success("移动失败");
  }
}
/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

//  WATCHERS
function* watchGetCourseware() {
  yield takeEvery(ActionType.GET_COURSEWARES_GROUP, getCourseware);
  yield takeEvery(ActionType.GET_SUBFILE, getSubfile);
  yield takeEvery(ActionType.CREATE_G_SHARELINK, getShareLink);
  yield takeEvery(ActionType.GET_ALL_GROUP, getAllGroup);
  yield takeEvery(ActionType.MOVE_HERE, moveHere);
}

// // CREATE_USER
// function* createUser(action) { ... }

// 同时使用它们
export default function* rootSaga() {
  yield yield all([fork(watchGetCourseware)]);
}
