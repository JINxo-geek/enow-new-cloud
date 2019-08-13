export const GET_DRIVER_LIST = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/drive/space',
    method: 'GET',
  },
  mock: {
    data: {},
  },
};

export const DRIVER_LIST_RENAME = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/drive/rename',
    method: 'put',
  },
  mock: {
    data: {},
  },
};

export const DRIVER_LIST_DELETE = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/drive/delete/prejudgment',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

/* 移动 */
// 获取所有层级课件组
export const DRIVER_GET_ALL_FOLDER = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/drive/folder/list',
    method: 'GET',
  },
  mock: {
    data: {},
  },
};
// 新建文件夹
export const DRIVER_CREATE_FOLDER = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/drive/folder/new',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};
// 移动
export const DRIVER_MOVE_HERE = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/drive/move',
    method: 'PUT',
  },
  mock: {
    data: {},
  },
};
