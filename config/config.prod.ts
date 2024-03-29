/**
 * 生产环境配置
 *
 * 最终生效的配置为 prod + default（前者覆盖后者）
 */

import * as path from 'path';
import * as fs from 'fs';

export default function(app) {
  const exports: any = {};

  const baseURL = {
    enow: 'http://enow-kernel.seewo.com',
    edu: 'http://edu.seewo.com',
  };

  exports.baseURL = baseURL;
  exports.adaptor = {
    baseURL: baseURL,
    authApp: 'EasiNote5'
  }

  return exports;
}
