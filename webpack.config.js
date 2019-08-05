'use strict';
// https://www.yuque.com/easy-team/egg-react/config
const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);
module.exports = {
  resolve: {
    alias: {
      '@images': resolve(`app/web/asset/images`)
    }
  },
  devtool: 'eval',
  entry: {
    home: 'app/web/page/home/index.tsx'
  },
  lib: ['react', 'react-dom'],
  loaders: {
    babel: {
      include: [resolve('app/web'), resolve('node_modules')]
    },
    less: {
      include: [resolve('app/web'), resolve('node_modules')],
      options: {
        javascriptEnabled: true,
        modifyVars: {
          // 'primary-color': 'rgba(241,241,241,1)',
          // 'link-color': 'rgba(241,241,241,1)',
          'border-radius-base': '2px'
        }
      }
    },
    typescript: true
  },
  plugins: {
    imagemini: false
  },
  done () {
    console.log('---webpack compile finish---');
  }
};