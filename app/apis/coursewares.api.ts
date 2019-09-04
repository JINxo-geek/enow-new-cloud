/* 云课件列表 */

/* 课件组列表 接口文档有错误，父节点为目录时，将不会返回parentId字段
 */
export const GET_COURSEWARES_GROUP = {
  adaptorName: "http",
  http: {
    url: "/api/v3/courseware/group/list",
    method: "GET"
  },
  mock: {
    data: {}
  }
};
/* 按层获取课件组列表 */
export const GET_COURSEWARES = {
  adaptorName: "http",
  http: {
    url: "/api/v2/courseware/list",
    method: "GET"
  },
  mock: {
    data: {}
  }
};

/* 获取用户文档列表 */
export const GET_COURSEWARES_LIST = {
  adaptorName: "http",
  http: {
    url: "/api/v1/courseware/list",
    method: "GET"
  },
  mock: {
    data: {}
  }
};

export const GET_RECIVE = {
  adaptorName: "http",
  http: {
    url: "/api/v2/courseware/group/share/list",
    method: "GET"
  },
  mock: {
    data: {}
  }
};

export const COURSEWARE_RECEIVE = {
  adaptorName: "http",
  http: {
    url: "/api/v1/coursewareShare/receive",
    method: "POST"
  },
  mock: {
    data: {}
  }
};

export const COURSEWARE_IGNORE = {
  adaptorName: "http",
  http: {
    url: "/api/v1/coursewareShare/ignore",
    method: "POST"
  },
  mock: {
    data: {}
  }
};

export const COURSEWARE_G_RECEIVE = {
  adaptorName: "http",
  http: {
    url: "/api/v1/coursewareShare/group/receive",
    method: "POST"
  },
  mock: {
    data: {}
  }
};

export const COURSEWARE_G_IGNORE = {
  adaptorName: "http",
  http: {
    url: "/api/v1/coursewareShare/group/ignore",
    method: "POST"
  },
  mock: {
    data: {}
  }
};

export const GET_SHAREDAY = {
  adaptorName: "http",
  http: {
    url: "/api/v1/coursewareShare/link/days",
    method: "GET"
  },
  mock: {
    data: {}
  }
};

// 课件分享
export const CREATE_SHARELINK = {
  adaptorName: "http",
  http: {
    url: "/api/v1/coursewareShare/link",
    method: "POST"
  },
  mock: {
    data: {}
  }
};

// 课件组分享
export const CREATE_G_SHARELINK = {
  adaptorName: "http",
  http: {
    url: "/api/v1/coursewareShare/group/link",
    method: "POST"
  },
  mock: {
    data: {}
  }
};

// 链接分享课件详情
export const GET_SHARELINK_DETAIL = {
  adaptorName: "http",
  http: {
    url: "/api/v1/coursewareShare/link/detail",
    method: "GET"
  },
  mock: {
    data: {}
  }
};
// 链接分享课件组详情
export const GET_SHARELINK_DETAIL_G = {
  adaptorName: "http",
  http: {
    url: "/api/v1/coursewareShare/group/link/detail",
    method: "GET"
  },
  mock: {
    data: {}
  }
};

// 课件重命名
export const COURSEWARE_RENAME = {
  adaptorName: "http",
  http: {
    url: "/app/api/v1/courseware/rename",
    method: "PUT"
  },
  mock: {
    data: {}
  }
};
// 课件组重命名
export const COURSEWARE_G_RENAME = {
  adaptorName: "http",
  http: {
    url: "/api/v1/courseware/group/rename",
    method: "PUT"
  },
  mock: {
    data: {}
  }
};

// 删除课件/课件组
export const COURSEWARE_DELETE = {
  adaptorName: "http",
  http: {
    url: "/api/v2/courseware/group/delete",
    method: "POST"
  },
  mock: {
    data: {}
  }
};

// 获取所有层级课件组
export const GET_ALL_GROUP = {
  adaptorName: "http",
  http: {
    url: "/app/api/v1/courseware/group/all",
    method: "GET"
  },
  mock: {
    data: {}
  }
};

/* 新建课件组 */

export const CREATE_FOLDER = {
  adaptorName: "http",
  http: {
    url: "/api/v1/courseware/group/new",
    method: "POST"
  },
  mock: {
    data: {}
  }
};

/* 移动课件 */
export const MOVE_HERE = {
  adaptorName: "http",
  http: {
    url: "/api/v1/courseware/group/move",
    method: "POST"
  },
  mock: {
    data: {}
  }
};
/* 获取课件历史版本 */
export const GET_HISTORY = {
  adaptorName: "http",
  http: {
    url: "/api/v1/courseware/history",
    method: "GET"
  },
  mock: {
    data: {}
  }
};
/* 获取简要文档信息 */
export const GET_INFO = {
  adaptorName: "http",
  http: {
    url: "/api/v1/courseware/info",
    method: "GET"
  },
  mock: {
    data: {}
  }
};

/*  创建课件副本 */

export const COPY_NEW = {
  adaptorName: "http",
  http: {
    url: "/api/v3/courseware/copy/new",
    method: "POST"
  },
  mock: {
    data: {}
  }
};
