# [nq-jslib-base](https://github.com/nqdy666/nq-jslib-base)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/nqdy666/nq-jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nqdy666/nq-jslib-base/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/nqdy666/nq-jslib-base.svg?branch=master)](https://travis-ci.org/nqdy666/nq-jslib-base)
[![Coveralls](https://img.shields.io/coveralls/nqdy666/nq-jslib-base.svg)](https://coveralls.io/github/nqdy666/nq-jslib-base)
[![npm](https://img.shields.io/badge/npm-0.1.1-orange.svg)](https://www.npmjs.com/package/nq-jslib-base)
[![NPM downloads](http://img.shields.io/npm/dm/nq-jslib-base.svg?style=flat-square)](http://www.npmtrends.com/nq-jslib-base)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/nqdy666/nq-jslib-base.svg)](http://isitmaintained.com/project/nqdy666/nq-jslib-base "Percentage of issues still open")

简体中文 | [English](./README.en.md)

最好用的 `JS` 第三方库脚手架，fork 或 clone 本仓库，即可搭建完成一个新库的基础框架

## :star: 特性

- 支持ES6+或TypeScript编写源码，编译生成生产代码
- 集成 babel-runtime (默认关闭)
- 第三方依赖自动注入（自动剔除第三方依赖无用代码tree shaking）
- 多环境支持（支持浏览器原生，支持AMD，CMD，支持Webpack，Rollup，fis等，支持Node）
- 集成代码风格校验(eslint)
- 集成单元测试环境（mocha）
- 集成测试覆盖率（istanbul）
- 集成可持续构建工具[travis-ci](https://www.travis-ci.org/)
- 支持自定义banner
- 支持一键重命名
- 集成ISSUE_TEMPLATE

> 注意: 如果不同时使用 `export` 与 `export default` 可打开 `legacy模式`，`legacy模式` 下的模块系统可以兼容 `ie6-8`，见rollup配置文件

## :pill: 兼容性
单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 8+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 8+ |

**注意：编译代码依赖ES5环境，对于ie8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](./demo/demo-global.html)中的例子**

## :open_file_folder: 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

## :rocket: 使用者指南

可查看 demo目录 范例
```javascript

```

通过npm下载安装代码

```bash
$ npm install --save nq-jslib-base
```

如果你是node环境

```js
const nqJslibBase = require('nq-jslib-base');

```

如果你是webpack等环境

```js
import nqJslibBase from 'nq-jslib-base';
```

如果你是requirejs环境

```js
```

如果你是浏览器环境

```html
<script src="node_modules/nq-jslib-base/dist/nq-jslib-base.min.js"></script>
```

## :bookmark_tabs: 文档
[API](./doc/api.zh-CN.md)

## :kissing_heart: 贡献者指南

首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试:

```bash
$ npm test
```

> 注意：浏览器环境需要手动测试，位于`test/browser`

修改 package.json 中的版本号，修改 README.md 中的版本号，修改 CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

重命名项目名称，首次初始化项目是需要修改名字，或者后面项目要改名时使用，需要修改`rename.js`中的`fromName`和`toName`，然后运行 `npm run rename`，这条命令会自动重命名下面文件中的名字

- README.md 中的信息
- package.json 中的信息
- config/rollup.js 中的信息
- test/browser/index.html 中的仓库名称
- demo/demo-global.html 中的仓库名称

## 贡献者列表

[contributors](https://github.com/nqdy666/nq-jslib-base/graphs/contributors)

## :gear: 更新日志
[CHANGELOG.md](./CHANGELOG.md)

## :airplane: 计划列表
[TODO.md](./TODO.md)

## :bulb: 谁在使用

## 鸣谢
[jslib-base](https://github.com/yanhaijing/jslib-base/tree/babel)
[nqJslibBase-h5](https://github.com/jinwyp/nqJslibBase-h5)

## 捐赠

如果你觉得它有用，你可以给我买一杯奶茶。

<img width="650" src="https://raw.githubusercontent.com/nqdy666/nq-jslib-base/master/qrcode-donation.png" alt="donation">
