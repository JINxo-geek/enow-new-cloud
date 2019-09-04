# egg-react-typescript-boilerplate

基于 Egg + React + TypeScript + Webpack 同构工程骨架

## 1. 版本

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+,
- Webpack 版本: ^4.x.x
- React 版本: ^16.0.0
- TypeScript: ^3.0.0

## 2. 文档

- http://hubcarl.github.io/easywebpack/react
- https://www.yuque.com/easy-team/egg-react

## 3. 特性

- 支持 Egg Node 端代码和前端代码 TypeScript 编写和构建

- 支持 AntD 按需加载和主题配置功能

- 支持 server 和 client 端代码修改, Webpack 时时编译和热更新, `npm run dev` 一键启动应用

- 支持开发环境, 测试环境，正式环境 Webpack 编译

## 4. 依赖

- [easywebpack-react](https://github.com/hubcarl/easywebpack)
- [egg-view-react-ssr](https://github.com/hubcarl/egg-view-react-ssr)
- [egg-webpack](https://github.com/hubcarl/egg-webpack)
- [egg-webpack-react](https://github.com/hubcarl/egg-webpack-react)

## 5. 使用

#### 5.1 安装依赖

```bash
npm install
```

#### 5.2 本地启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001

#### 5.3 构建文件

- TypeScript Egg 构建

```bash
npm run tsc
```

- TypeScript 前端工程构建

```bash
npm run build
```

#### 5.4 打包部署

1. 先运行 `npm run tsc` 和 `npm run build` 构建 TypeScript Egg 代码和 TypeScript 前端代码
2. 项目代码和构建代码一起打包代码
3. 应用部署后，通过 `npm start` 启动应用

## 6.项目结构和基本规范

```json
├──test//用于测试单元，比如测试的contorller和middleware
├──config//存放配置文件和插件，参见egg
├──app
  ├──apis//存放接口声明
  ├──contorller//用于解析用户的输入，处理后返回相应的结果，决定服务端渲染还是客户端渲染
  ├──service//用于编写业务逻辑层，可选
  ├──middleware//用于编写中间件，-可选
  ├──public//用于存放静态资源，可选
  ├──extend//用于框架扩展，可选
  ├──mock//
  ├──proxy//
  ├──view//egg需要这个目录，服务器编译文件会存放在里面,或者模版文件
  ├──util//前后端通用的函数
  |
  ├──web//前端工程目录
  | ├──asset//存放公共css,images,font等资源，css有一个global的，在入口文件index.ts中导入
  | ├──framework//存放第三方库和前端模版（被用于react）
  | ├──helpers//前端通用函数
  | ├──component//多页面通用的组件，和antd类似的组件
  | ├──store//存放reducers，actions，等
  | | ├──actions//存放action
  | | ├──reducers//存放reducer
  | | ├──constants//存放常量
  | | ├──saga//存放saga
  | | ├──services//发送请求
  | | ├──index.ts//createStore
  | ├──typings//类型声明
  | ├──view//客户端渲染模版（<div id="app"></div>）
  | ├──page//页面
  |      ├──home//多页面渲染的home页面，本项目结构支持多页面渲染和当页面渲染
  |      ├──component//存放通用组件，和antd类似的组件，不包含业务逻辑
  |      ├──sections//存放业务组件，业务组件独有的业务的函数
  |      ├──containers//存放容器组件，容器组件从redux中获取数据，将数据注入给子组件业务组件中，存放子业务共用的业务函数
  |      ├──screens//组织页面的组件，负责组织容器组件布局
  |       ├──index.ts//前端入口文件，渲染如有组件，导入全局css，ReactDOM.render(),webpack中配置的入口
  |       ├──router.ts//路由组件，引入页面组件
  ├──router.ts//用于配置 URL 路由规则,转发到contorller,在app目录下

```

react 组件分为四种，最上层的是 sections 组件，主要用来组织页面布局，被顶级路由调用。第二层是 containers 组件，被 sections 组件组件调用，并调用第三层 sections 组件。第三层是主要负责业务逻辑，并调用第四层 component 组件，第四层主要是通用的 UI 组件，本项目大多数通用 UI 组件是 antd 的组件，所以这部分较少，有待抽离。

## License

[MIT](LICENSE)
