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

/* 获取用户文档列表 */

export async function apiGetGoursewareList(payload: any): Promise<any> {
  return fetch("GET_COURSEWARES_LIST", payload);
}

/* 获取所有层级课件组 */

export async function apiGetGoursewareAll(): Promise<any> {
  console.log("/* 获取所有层级课件组 */");
  return fetch("GET_ALL_GROUP");
}
