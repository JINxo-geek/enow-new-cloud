import * as colors from 'colors';

export const chalk = (msg: string, color: string): string => {
  const logMsg = `\n\n${'='.repeat(20)}${msg}${'='.repeat(20)} ${new Date()}`;
  return colors[color](logMsg);
};

export const logger = ctx => (msg: string, color: string = 'blue') => {
  ctx.logger.info(chalk(msg, color));
};
