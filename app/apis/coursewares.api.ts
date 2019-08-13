/* 云课件列表 */
module.exports.GET_COURSEWARES = {
  adaptorName: 'http',
  http: {
    url: '/api/v2/courseware/list',
    method: 'GET',
  },
  mock: {
    data: {},
  },
};

module.exports.GET_RECIVE = {
  adaptorName: 'http',
  http: {
    url: '/api/v2/courseware/group/share/list',
    method: 'GET',
  },
  mock: {
    data: {},
  },
};

module.exports.COURSEWARE_RECEIVE = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/coursewareShare/receive',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

module.exports.COURSEWARE_IGNORE = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/coursewareShare/ignore',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

module.exports.COURSEWARE_G_RECEIVE = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/coursewareShare/group/receive',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

module.exports.COURSEWARE_G_IGNORE = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/coursewareShare/group/ignore',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

module.exports.GET_SHAREDAY = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/coursewareShare/link/days',
    method: 'GET',
  },
  mock: {
    data: {},
  },
};

// 课件分享
module.exports.CREATE_SHARELINK = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/coursewareShare/link',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

// 课件组分享
module.exports.CREATE_G_SHARELINK = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/coursewareShare/group/link',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

// 链接分享课件详情
module.exports.GET_SHARELINK_DETAIL = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/coursewareShare/link/detail',
    method: 'GET',
  },
  mock: {
    data: {},
  },
};
// 链接分享课件组详情
module.exports.GET_SHARELINK_DETAIL_G = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/coursewareShare/group/link/detail',
    method: 'GET',
  },
  mock: {
    data: {},
  },
};

// 课件重命名
module.exports.COURSEWARE_RENAME = {
  adaptorName: 'http',
  http: {
    url: '/app/api/v1/courseware/rename',
    method: 'PUT',
  },
  mock: {
    data: {},
  },
};
// 课件组重命名
module.exports.COURSEWARE_G_RENAME = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/courseware/group/rename',
    method: 'PUT',
  },
  mock: {
    data: {},
  },
};

// 删除课件/课件组
module.exports.COURSEWARE_DELETE = {
  adaptorName: 'http',
  http: {
    url: '/api/v2/courseware/group/delete',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

// 获取所有层级课件组
module.exports.GET_ALL_GROUP = {
  adaptorName: 'http',
  http: {
    url: '/app/api/v1/courseware/group/all',
    method: 'GET',
  },
  mock: {
    data: {},
  },
};

module.exports.CREATE_FOLDER = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/courseware/group/new',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

module.exports.MOVE_HERE = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/courseware/group/move',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};
