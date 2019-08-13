/* 用户管理 */
export const AUTH = {
  adaptorName: 'http',
  http: {
    url: '/api/v2/user/both/info',
    method: 'GET'
  },
  mock: {
    data: {}
  }
};

export const USER_AUTH = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/auth',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

export const USER_REGISTER = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/auth/users',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

export const USER_FORGET = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/auth/users/pwd/reset',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

export const USER_CAPTCHAS = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/auth/captchas',
    method: 'POST',
  },
  mock: {
    data: {},
  },
};

export const USER_DYNAMICS = {
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
export const GET_USER_LEVEL = {
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
export const USER_REGISTERED = {
  adaptorName: 'http',
  http: {
    url: '/api/v1/auth/phones',
    method: 'GET',
  },
  mock: {
    data: {},
  },
};
