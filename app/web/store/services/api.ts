import fetch from '../../helpers/callAPI';

/* 按层获取课件组列表 */

export async function apiGetCourseware(payload: any): Promise<any> {
  return fetch('GET_COURSEWARES', {
    params: payload
  });
}

/* 获取课件组列表v3版 */

export async function apiGetGoursewareGrop(payload: any): Promise<any> {
  return fetch('GET_COURSEWARES_GROUP', {
    params: payload
  });
}

/* 获取所有层级课件组 */

export async function apiGetGoursewareAll(): Promise<any> {
  return fetch('GET_ALL_GROUP');
}

/* 生成分享链接 */

export async function apiGreateGShareLink(payload: any): Promise<any> {
  return fetch('CREATE_G_SHARELINK', {
    params: payload
  });
}

/* 移动课件 */

export async function apiMoveHere(payload: any): Promise<any> {
  return fetch('MOVE_HERE', {
    params: payload
  });
}
/* 新建课件组 */
export async function apiCreateFolder(payload: any): Promise<any> {
  return fetch('CREATE_FOLDER', {
    params: payload
  });
}

/* 获取课件历史版本 */

export async function apiGetHistory(payload: any): Promise<any> {
  return fetch('GET_HISTORY', {
    params: payload
  });
}

/* 获取简要文档信息 */
export async function apiGetInfo(payload: any): Promise<any> {
  return fetch('GET_INFO', {
    params: payload
  });
}

/* 删除课件 */
export async function apiGoursewareDelete(payload: any): Promise<any> {
  return fetch('COURSEWARE_DELETE', {
    params: payload
  });
}

/*  创建课件副本 */
export async function apiCopyNew(payload: any): Promise<any> {
  return fetch('COPY_NEW', {
    params: payload
  });
}

/* 接收分享课件 */
export async function apiGetRecive(payload: any): Promise<any> {
  return fetch('GET_RECIVE', {
    params: payload
  });
}

export async function apiCoursewareReceive(payload: any): Promise<any> {
  return fetch('COURSEWARE_G_RECEIVE', {
    params: payload
  });
}

export async function apiCoursewareIgnore(payload: any): Promise<any> {
  return fetch('COURSEWARE_IGNORE', {
    params: payload
  });
}

// 课件重命名

export async function apiCoursewareRename(payload: any): Promise<any> {
  return fetch('COURSEWARE_RENAME', {
    params: payload
  });
}
