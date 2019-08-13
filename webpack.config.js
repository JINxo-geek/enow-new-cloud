"use strict";
// https://www.yuque.com/easy-team/egg-react/config
const path = require("path");
const resolve = filepath => path.resolve(__dirname, filepath);
module.exports = {
  target: "web", //只会构建浏览器运行的 JSBundle 文件
  resolve: {
    alias: {
      "@images": resolve(`app/web/asset/images`),
      "@util": resolve(`app/web/util`),
      '@helpers': resolve(`app/web/helpers`)
    }
  },
  devtool: "eval",
  entry: {
    home: "app/web/page/home/index.tsx",
    // login: "app/web/page/login/index.tsx"
  },
  lib: ["react", "react-dom"],
  loaders: {
    babel: {
      include: [resolve("app/web"), resolve("node_modules")]
    },
    less: {
      include: [resolve("app/web"), resolve("node_modules")],
      options: {
        javascriptEnabled: true,
        modifyVars: {
          // 'primary-color': 'rgba(241,241,241,1)',
          // 'link-color': 'rgba(241,241,241,1)',
          "border-radius-base": "2px"
        }
      }
    },
    typescript: true
  },
  plugins: {
    imagemini: false
  },
  done() {
    console.log("---webpack compile finish---");
  }
};
