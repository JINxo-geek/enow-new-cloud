// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccess from '../../../app/middleware/access';
import ExportAdaptor from '../../../app/middleware/adaptor';
import ExportApi from '../../../app/middleware/api';
import ExportAuth from '../../../app/middleware/auth';
import ExportUtils from '../../../app/middleware/utils';

declare module 'egg' {
  interface IMiddleware {
    access: typeof ExportAccess;
    adaptor: typeof ExportAdaptor;
    api: typeof ExportApi;
    auth: typeof ExportAuth;
    utils: typeof ExportUtils;
  }
}
