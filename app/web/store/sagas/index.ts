import { takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import { all, fork, put, take, call, select } from 'redux-saga/effects';
import * as ActionType from '../constants/actionType';
import * as Action from '../actions/get.courseware';
import { getShareSuccess, getShareFailure } from '../actions/post.share';
import { getAllGroupSuccess } from '../actions/get.allGroup';
import { getBreadSuccess } from '../actions/get.bread';
import { getReciveSuccess } from '../actions/get.recive';
import * as subAction from '../actions/get.subFile';
import uuidv1 from 'uuid/v1';
import {
  apiGetGoursewareGrop,
  apiGetGoursewareAll,
  apiGreateGShareLink,
  apiMoveHere,
  apiCreateFolder,
  apiGetHistory,
  apiGoursewareDelete,
  apiCopyNew,
  apiGetRecive,
  apiCoursewareReceive,
  apiCoursewareIgnore,
  apiCoursewareRename
} from '../services/api';

/***************************** Subroutines ************************************/
// 排序函数
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
// 过滤parentId
function* filterParentId(content, parentId = '') {
  return content.filter(item => {
    if (parentId === '') {
      return item.parentId === parentId || !item.parentId;
    } else {
      return item.parentId === parentId;
    }
  });
}
/* 过滤name */
function* filtername(content, name = '') {
  return content.filter(item => {
    return (
      item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1 &&
      !item.isGroup
    );
  });
}

/* 获得所有数据 */
function* getCourseware() {
  const state = yield select();
  const { reqparams } = state.getCourseware;
  const parentId = '';
  const data = yield call(apiGetGoursewareGrop, reqparams);
  /* 拿到total值，根据total值是否为0判断是否继续发送请求 */
  let total;
  yield (total = data.data.total);
  const totalIndex = Math.floor(total / 99);
  let index = 0;
  const promiseRet: any = [];
  const totalData: any = [];
  while (index <= totalIndex) {
    promiseRet.push(apiGetGoursewareGrop({ index, pagesize: 99 }));
    index++;
  }
  if (promiseRet.length) {
    const promiseRes = yield Promise.all(promiseRet);
    for (const p of promiseRes) {
      totalData.push(...p.data.content);
    }
  }
  // 对数据进行排序
  const sortData = yield call(sortIt, totalData);
  // 得到根目录下的数据
  const filterParentIdData = yield call(filterParentId, sortData, parentId);

  const partdata = filterParentIdData;
  // yield (data.allgroup = allgroup);
  yield put(
    Action.getCoursewareGroupSuccess({
      sortData,
      partdata,
      reqparams,
      tableLoading: false
    })
  );
}

/* 搜索文件 */
function* searchFile(e) {
  // 过滤课件
  const state = yield select();
  const { breadArray } = state.breadcrumbs;
  const { sortData, reqparams } = state.getCourseware;
  const partdata = yield call(filtername, sortData, e.payload);
  // 重置面包屑 更改保存id
  yield put(getBreadSuccess({ breadArray: breadArray.slice(0, 2) }));
  yield put(subAction.getSubFileSuccess({ parentId: '', name: 'root' }));
  yield put(
    Action.getCoursewareGroupSuccess({
      sortData,
      partdata,
      reqparams,
      tableLoading: false
    })
  );
}

/* 获取某个文件夹的文件 */
function* getSubfile(e) {
  const state = yield select();
  const { sortData, reqparams } = state.getCourseware;
  const { parentId, name } = e.payload;
  const { breadArray } = state.breadcrumbs;
  if (name !== 'root' && name !== 'pre') {
    breadArray.push({ name, id: parentId });
  }
  yield put(getBreadSuccess({ breadArray }));
  const filterParentIdData = yield call(filterParentId, sortData, parentId);
  const partdata = filterParentIdData;
  yield put(
    Action.getCoursewareGroupSuccess({
      sortData,
      partdata,
      reqparams,
      tableLoading: false
    })
  );
}

/* 用于刷新当前文件夹使用 */
function* reFreshSubFile() {
  const state = yield select();
  const { sortData, reqparams } = state.getCourseware;
  const { parentId } = state.getSubFile;
  const filterParentIdData = yield call(filterParentId, sortData, parentId);
  const partdata = filterParentIdData;
  yield put(
    Action.getCoursewareGroupSuccess({
      sortData,
      partdata,
      reqparams,
      tableLoading: false
    })
  );
}

/* 生成分享链接 */

function* getShareLink(e) {
  let { linkLock } = e.payload;
  const { expiredDay, type, id } = e.payload;
  const shareMsg = yield call(apiGreateGShareLink, { expiredDay, type, id });
  if (shareMsg.error_code === 0) {
    linkLock = false;
    yield put(getShareSuccess({ shareMsg, linkLock }));
  } else if (shareMsg.error_code === 41001) {
    yield put(getShareFailure({ msg: '没有找到课件' }));
  }
}
/* 获取目录 */
function* getAllGroup() {
  const allGroup = yield call(apiGetGoursewareAll);
  yield put(getAllGroupSuccess({ allGroup }));
}

/* 移动课件 */
function* moveHere(e) {
  const result = yield call(apiMoveHere, e.payload);
  yield call(erro, result);
}
/* 判断是否成功*/
function* erro(result) {
  if (result.error_code === 0) {
    message.success('移动成功');
    yield call(refresh);
  } else {
    message.error('移动失败');
  }
}

/* 刷新课件 */
function* refresh() {
  yield call(getCourseware);
  yield call(reFreshSubFile);
}

/*创建新的课件组*/
function* createFolder(e) {
  const state = yield select();
  const { parentId } = state.getSubFile;
  let uuid = uuidv1();
  while (uuid.indexOf('-') >= 0) {
    uuid = uuid.replace('-', '');
  }
  const result = yield call(apiCreateFolder, {
    name: e.payload,
    parentId,
    clientId: uuid,
    create_time: new Date().getTime()
  });
  if (result.error_code === 0) {
    message.success('创建成功');
    yield call(refresh);
  } else {
    message.error('创建失败');
  }
}

/* 获取课件历史 */
function* getHistory(e) {
  // 接口不可使用
  const result = yield call(apiGetHistory, {
    cid: e.payload.id
  });
}

/* 操作面包屑 */
function* getBread(e) {
  const state = yield select();
  const { breadArray } = state.breadcrumbs;
  if (e.payload.name === '返回上一级') {
    breadArray.pop();
    // 更新显示课件
    yield call(getSubfile, {
      payload: {
        parentId: breadArray[breadArray.length - 1].id,
        name: 'pre'
      }
    });
    // 更新面包屑
    yield put(getBreadSuccess({ breadArray }));
    // 更新当前保存的课件信息
    yield put(
      subAction.getSubFileSuccess({
        parentId: breadArray[breadArray.length - 1].id
      })
    );
  } else if (e.payload.name === '根目录') {
    yield put(getBreadSuccess({ breadArray: breadArray.slice(0, 2) }));
    yield put(subAction.getSubFile({ parentId: '', name: 'root' }));
    yield put(Action.getCourseware());
    yield call(getCourseware);
  } else {
    let hitItem;
    breadArray.forEach((item, idx) => {
      if (item.id === e.payload.id) {
        hitItem = { id: item.id, name: item.name, idx };
      }
    });
    yield put(
      getBreadSuccess({ breadArray: breadArray.slice(0, hitItem.idx) })
    );
    yield put(
      subAction.getSubFile({ parentId: hitItem.id, name: hitItem.name })
    );
  }
}

/* 删除课件 */
function* deleteCourseware(e) {
  const result = yield call(apiGoursewareDelete, {
    coursewareIds: e.payload.id
  });
  if (result.error_code === 0) {
    message.success('删除成功');
    yield call(refresh);
  } else {
    message.error('删除失败');
  }
}

/* 创建课件副本 */
function* copyNew(e) {
  const result = yield call(apiCopyNew, e.payload);
  if (result.error_code === 0) {
    message.success('创建成功');
    yield call(refresh);
  } else {
    message.error('创建失败');
  }
}

/* 获取分享课件列表 */
function* getRecive(e) {
  const result = yield call(apiGetRecive, e.payload);
  yield put(getReciveSuccess(result));
}

/* 接受分享课件 */
function* coursewareRecive(e) {
  const result = yield call(apiCoursewareReceive, e.payload);
  if (result.error_code === 0) {
    message.success('接收成功');
    yield call(getRecive, { index: 0, pagesize: 99 });
    yield call(refresh);
  } else if (result.error_code === 4112) {
    message.error('电脑端已处理此课件');
  } else if (result.error_code === 4510) {
    message.error('云空间不足，课件接收失败');
  } else {
    message.error('网络异常，操作失败');
  }
}

/* 忽略课件 */
function* coursewareIgnore(e) {
  const result = yield call(apiCoursewareIgnore, e.payload);
  if (result.error_code === 0) {
    message.success('忽略成功');
    yield call(getRecive, { index: 0, pagesize: 99 });
  } else if (result.error_code === 4112) {
    message.error('电脑端已处理此课件');
  } else if (result.error_code === 4510) {
    message.error('云空间不足，课件接收失败');
  } else {
    message.error('网络异常，操作失败');
  }
}

/* 课件重命名 */
function* coursewareRename(e) {
  const result = yield call(apiCoursewareRename, e.payload);
  if (result.error_code === 0) {
    message.success('成功');
    yield call(refresh);
  } else {
    message.error('网络异常，操作失败');
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
  yield takeEvery(ActionType.CREATE_FOLDER, createFolder);
  yield takeEvery(ActionType.REFRESH, refresh);
  yield takeEvery(ActionType.GET_HISTORY, getHistory);
  yield takeEvery(ActionType.GET_BREAD, getBread);
  yield takeEvery(ActionType.SEARCH, searchFile);
  yield takeEvery(ActionType.COURSEWARE_DELETE, deleteCourseware);
  yield takeEvery(ActionType.COPY_NEW, copyNew);
  yield takeEvery(ActionType.GET_RECIVE, getRecive);
  yield takeEvery(ActionType.COURSEWARE_RECEIVE, coursewareRecive);
  yield takeEvery(ActionType.COURSEWARE_IGNORE, coursewareIgnore);
  yield takeEvery(ActionType.COURSEWARE_RENAME, coursewareRename);
}

// // CREATE_USER
// function* createUser(action) { ... }

// 同时使用它们
export default function* rootSaga() {
  yield yield all([fork(watchGetCourseware)]);
}
