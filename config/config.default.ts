import * as path from 'path';
import * as fs from 'fs';
import { EggAppConfig } from 'egg';
export default function(app: EggAppConfig) {
  const exports: any = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico')),
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs'),
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public'),
  };

  exports.keys = '123456';

  exports.authApp = 'EasiNote5';
  // exports.serverUrl = '';

  exports.middleware = [
    // 'access'
    'adaptor',
  ];

  exports.view = {
    defaultExtension: '.html',
    mapping: {
      '.html': 'ejs',
    },
  };

  exports.reactssr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
  };

  exports.baseURL = {
    enow: 'http://enow-kernel.test.seewo.com',
    edu: 'http://edu.test.seewo.com',
  };

  return exports;
}
