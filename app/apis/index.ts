import * as fs from 'fs';
import * as path from 'path';
import { merge, isPlainObject } from 'lodash';

const files = fs.readdirSync(__dirname);
const getAPI = (filename: string) => require(path.join(__dirname, filename));
const isMatchAPI = (filename: string) => /\w*.api.js/.test(filename);
let mergeAPIs = {};

files.forEach(name => {
  const api = getAPI(name);
  if (isMatchAPI(name) && isPlainObject(api)) {
    mergeAPIs = merge({}, mergeAPIs, api);
  }
});

console.log('mergeAPIs ================', mergeAPIs)
export default mergeAPIs;
