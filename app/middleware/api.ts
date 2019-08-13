/**
 * @author souliz
 * @description API拦截转发
 */
import { get } from 'lodash';
import { logger } from './utils';

export default function(options) {
  return async (ctx, next) => {
    const _logger = logger(ctx);
    const actionName = get(ctx, 'query.actionName', '');

    let params;
    let resp;

    const method = get(ctx, 'request.method', '').toUpperCase();
    if (['GET', 'DELETE'].includes(method)) {
      params = get(ctx, 'request.params', {});
    } else {
      params = get(ctx, 'request.body.params', {});
    }

    try {
      resp = await ctx.request.dispatch(actionName, { params });
      _logger(resp);
      ctx.body = {
        status: 200,
        data: get(resp, 'res.data.data', {}),
        error_code: get(resp, 'res.data.error_code', -1),
        message: 'ok',
      };
    } catch (e) {
      ctx.body = {
        status: 500,
        message: e.message,
      };
    }
    await next();
  };
}
