/**
 * @author souliz
 * @description easi-adaptor的API调用
 */

import CallAPI from '@cvte/easi-adaptor/dist/callAPI';
import event from './event';
import { merge } from 'lodash';

export const EHttpEventCode = {
  INVALID_NAME: Symbol('invalid name'),
}

const adaptor = new CallAPI({
  http: {
    url: '/apis'
  }
});

const defaultConfig = {};
const mdwBefore = [];
const mdwAfter = [];

adaptor.beforeRequest(mdwBefore);
adaptor.afterRequest(mdwAfter);

export default function fetch(name: string, config: any = {}, options: any = {}): Promise<any> {
  if (typeof name === 'string' && name.length > 0) {
    const dispatch = adaptor.dispatch.bind(adaptor);
    return dispatch(name, merge({}, defaultConfig, config), options);
  } else {
    event.emit(EHttpEventCode.INVALID_NAME);
    return Promise.reject(name);
  }
}
