/**
 * @author souliz
 * @description 用户校验中间件
 */

import { get } from 'lodash';
import { logger } from './utils';

export const Code = {
  ok: 'AUTH Ok',
  error: 'AUTH Error',
  end: 'AUTH End',
  fail: 'AUTH Fail',
};

export default function(options) {
  return async (ctx, next) => {
    const _logger = logger(ctx);
    const req = get(ctx, 'request', {});

    const authResp = await req.dispatch('AUTH').catch(err => {
      _logger(Code.error);
      ctx.logger.info(err);
      _logger(Code.error);
    });
    const errorCode = get(authResp, 'res.data.error_code');

    _logger(Code.end);
    ctx.logger.info(authResp.res);
    _logger(Code.end);

    if (errorCode === 0) {
      _logger(Code.ok);
      await next(authResp.res);
    } else {
      ctx.body = Code.fail;
    }
  };
}
