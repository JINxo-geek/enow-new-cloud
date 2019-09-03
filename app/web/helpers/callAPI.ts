/**
 * @author souliz
 * @description easi-adaptor的API调用
 */

import axios from 'axios';
import event from './event';
import { get } from 'lodash';
export const EHttpEventCode = {
  INVALID_NAME: Symbol('invalid name'),
  ACTION_SUCCESS: Symbol('action success'),
  ACTION_FAIL: Symbol('action fail')
};

const ax = axios.create({
  baseURL: '/apis'
});

ax.interceptors.request
  .use
  // @TODO
  ();

ax.interceptors.response.use(
  resp => {
    const data = resp.data;
    if (get(resp, 'data.status') === 200) {
      event.emit(EHttpEventCode.ACTION_SUCCESS, data);
    } else {
      event.emit(EHttpEventCode.ACTION_FAIL, data);
    }
    return data;
  },
  function(err) {
    const config = err.config;
    if (config.headers && !config.headers.retry) {
      config.headers.retry = 5; // 设置默认重复次数
    }
    config.headers.__retryCount = config.headers.__retryCount || 0;
    if (config.headers.__retryCount >= config.headers.retry) {
      alert('网络错误');
      return Promise.reject(err);
    }
    config.headers.__retryCount += 1;
    const backoff = new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 2000);
    });
    return backoff.then(function() {
      return axios(config);
    });
  }
);

export default function fetch(
  actionName: string,
  params: any = {}
): Promise<any> {
  return ax({
    // 使用 POST 提交到Node端，进行接口转发
    method: 'POST',
    url: `?actionName=${actionName}&ts=${Date.now()}`,
    data: {
      ...params,
      _csrf: get(window, '__INITIAL_STATE__.csrf', '')
    }
  });
}
