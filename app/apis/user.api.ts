/* 用户管理 */
module.exports.USER_AUTH = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/auth',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

module.exports.USER_REGISTER = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/auth/users',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

module.exports.USER_FORGET = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/auth/users/pwd/reset',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

module.exports.USER_CAPTCHAS = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/auth/captchas',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

module.exports.USER_DYNAMICS = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/auth/dynamics',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

// 会员积分等级信息
module.exports.GET_USER_LEVEL = {
  adaptorName: 'http',
  http: {
    url: '/api/v2/user/level',
    method: 'GET',
  },
  mock: {
    data: {},
  },
};

// 已经注册
module.exports.USER_REGISTERED = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/auth/phones',
    method: 'GET',
  },
  mock: {
    data: {},
  },
};
