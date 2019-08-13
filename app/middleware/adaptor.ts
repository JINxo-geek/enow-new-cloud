/**
 * @author souliz
 * @description API路由适配中间件
 */

import Adaptor from '@cvte/easi-adaptor';
import apis from '../apis/index';
import { get } from 'lodash';
import { chalk } from './utils';

export default function(options) {
  return async (ctx, next) => {
    const accessToken = ctx.cookies.get('x-auth-token', {
      signed: false,
    });

    const appCode = ctx.cookies.get('x-auth-app', {
      signed: false,
    });

    const appCodeConfig = get(options, 'authApp', '');

    const headers = {
      'Content-Type': 'application/json',
      'user-agent': 'default',
      "Accept": '*/*',
      "Authorization": '',
      'x-auth-refer': 'EasiNoteWeb',
      "Cookie": 'x-auth-token=' + accessToken + ';x-auth-app=' + (appCode || appCodeConfig),
    };

    const adaptorConfig = {
      validatiors: {},
      apis,
      http: {
        headers,
        baseURL: get(options, 'serverUrl', ''),
        beforeRequest(httpConfig) {
          ctx.logger.info(chalk('HTTP config start', 'green'));
          ctx.logger.info(httpConfig);
          ctx.logger.info(chalk('HTTP config end', 'green'));
        },
      },
    };

    const adaptor = new Adaptor(adaptorConfig);
    ctx.request.dispatch = adaptor.dispatch.bind(adaptor);
    await next();
  };
}
