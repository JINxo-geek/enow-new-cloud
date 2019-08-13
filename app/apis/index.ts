const fs = require('fs');
const path = require('path');
const { merge, isObject } = require('lodash');

const files = fs.readdirSync(__dirname);
const apis = {};

files.map(function(item) {
  if (/\w*.api.js/.test(item)) {
    const api = require(path.join(__dirname, item));
    if (isObject(api)) {
      merge(apis, api);
    }
  }
});

module.exports = apis;
