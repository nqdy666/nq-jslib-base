var babel = require('rollup-plugin-babel');
var pkg = require('../package.json');

// compatible with nq-jslib-base and @nqdy666/nq-jslib-base
// @nqdy666/nq-jslib-base -> nq-jslib-base
var name = pkg.name.split('/').pop();
// @nqdy666/nq-jslib-base -> nqdy666_nq-jslib-base
// var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner =
  `/*!
 * ${pkg.name} ${version} (https://github.com/nqdy666/nq-jslib-base)
 * API https://github.com/nqdy666/nq-jslib-base/blob/master/doc/api.md
 * Copyright 2019-${(new Date).getFullYear()} nqdy666. All Rights Reserved
 * Licensed under MIT (https://github.com/nqdy666/nq-jslib-base/blob/master/LICENSE)
 */
`;

function getCompiler(opt) {
  return babel({
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          'targets': {
            'browsers': 'last 2 versions, > 1%, ie >= 8, Android >= 4, iOS >= 6, and_uc > 9',
            'node': '8.0'
          },
          'modules': false,
          'loose': false
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          'helpers': false,
          'regenerator': false
        }
      ]
    ],
    runtimeHelpers: true,
    exclude: 'node_modules/**'
  });
}

exports.name = name;
exports.banner = banner;
exports.getCompiler = getCompiler;
