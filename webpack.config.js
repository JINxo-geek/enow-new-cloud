"use strict";
// https://www.yuque.com/easy-team/egg-react/config
const path = require("path");
const resolve = filepath => path.resolve(__dirname, filepath);
module.exports = {
  resolve: {
    alias: {
      "@images": resolve("app/web/asset/images"),
      "@css": resolve("app/web/asset/css"),
      "@util": resolve("app/web/util"),
      "@helpers": resolve("app/web/helpers")
    }
  },
  devtool: "inline-cheap-source-map",
  entry: {
    home: "app/web/page/home/index.tsx"
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
          "border-radius-base": "2px",
          "breadcrumb-link-color": "rgb(114, 181, 99)",
          "breadcrumb-separator-margin": "0px",
          "menu-item-active-bg": "rgb(241, 241, 241)",
          "link-color": "rgb(114, 181, 99)",
          "link-hover-color": "rgb(114, 181, 99)",
          "table-row-hover-bg": "rgb(241, 241, 241)",
          "table-selected-row-hover-bg:": "rgb(241, 241, 241)",
          "table-header-bg": "rgb(255,255,255)"
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
