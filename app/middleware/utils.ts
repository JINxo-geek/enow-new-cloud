/**
 * @author souliz
 * @description 工具方法
 */
import * as colors from 'colors';

// 标识符样式日志输出
export const cl = (msg: string, color: string): string => {
  const signal = '='.repeat(20);
  const timestamp = new Date();

  return colors[color](
    `
    \n
    ${[signal, msg, signal].join('')} ${timestamp}
    \n
    `
  );
};

// 简易调用方法
export const logger = ctx => (msg: string, color: string = 'blue') => {
  ctx.logger.info(cl(msg, color));
};

// HTTP事件码
export const Code = {
  beginConfig: 'HTTP Config begin',
  endConfig: 'HTTP Config end',

  beginHttp: 'HTTP Request begin',
  endHttp: 'HTTP Request end',
};