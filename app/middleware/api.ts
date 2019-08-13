/**
 * @author souliz
 * @description API拦截转发
 */
import { get } from 'lodash';
import { logger, Code } from './utils';

const fromAPI = (url: string): boolean => /^\/apis/.test(url);

export default function(options) {
  return async (ctx, next) => {
    const request = get(ctx, 'request', {});
    const query = get(ctx, 'query', {});

    if (fromAPI(request.url)) {
      const _logger = logger(ctx);
      const actionName = query.actionName;

      let params;
      let resp;

      const method = get(request, 'method', '').toUpperCase();
      if (['GET', 'DELETE'].includes(method)) {
        params = request.params;
      } else {
        params = request.body.params;
      }

      try {
        resp = await request.dispatch(actionName, { params });

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
    } else {
      next();
    }
  };
}
