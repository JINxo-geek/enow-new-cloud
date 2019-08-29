import fetch from "../../helpers/callAPI";

/* 按层获取课件组列表 */

export async function apiGetCourseware(payload: any): Promise<any> {
  return fetch("GET_COURSEWARES", {
    params: payload
  });
}

/* 获取课件组列表v3版 */

export async function apiGetGoursewareGrop(payload: any): Promise<any> {
  console.log("/* 获取课件组列表v3版 */", payload);
  return fetch("GET_COURSEWARES_GROUP", {
    params: payload
  });
}

/* 获取所有层级课件组 */

export async function apiGetGoursewareAll(): Promise<any> {
  console.log("/* 获取所有层级课件组 */");
  return fetch("GET_ALL_GROUP");
}

/* 生成分享链接 */

export async function apiGreateGShareLink(payload: any): Promise<any> {
  console.log("/* 生成分享链接 */", payload);
  return fetch("CREATE_G_SHARELINK", {
    params: payload
  });
}

/* 移动课件 */

export async function apiMoveHere(payload: any): Promise<any> {
  console.log("/* 移动课件 */", payload);
  return fetch("MOVE_HERE", {
    params: payload
  });
}
/* 新建课件组 */
export async function apiCreateFolder(payload: any): Promise<any> {
  console.log("/* 新建课件组 */", payload);
  return fetch("CREATE_FOLDER", {
    params: payload
  });
}

/* 获取课件历史版本 */

export async function apiGetHistory(payload: any): Promise<any> {
  console.log("/* 新建课件组 */", payload);
  return fetch("GET_HISTORY", {
    params: payload
  });
}

/* 获取简要文档信息 */
export async function apiGetInfo(payload: any): Promise<any> {
  console.log("/* 获取简要文档信息 */", payload);
  return fetch("GET_INFO", {
    params: payload
  });
}
