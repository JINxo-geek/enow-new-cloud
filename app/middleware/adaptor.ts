/**
 * @author souliz
 * @description API路由适配中间件
 */

import * as Adaptor from '@cvte/easi-adaptor';
import apis from '../apis/index';
import { get } from 'lodash';
import { logger } from './utils';

export const Code = {
  begin: 'HTTP Config begin',
  end: 'HTTP Config end'
}

export default function(options) {
  return async (ctx, next) => {
    const _logger = logger(ctx);
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
        baseURL: get(options, 'baseURL.edu', ''),
        beforeRequest(httpConfig) {
          _logger(Code.begin)
          ctx.logger.info(httpConfig);
          _logger(Code.end)
        },
      },
    };

    const adaptor = new Adaptor(adaptorConfig);
    ctx.request.dispatch = adaptor.dispatch.bind(adaptor);
    await next();
  };
}
