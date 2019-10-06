// rollup.config.js
// umd
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var uglify = require('rollup-plugin-uglify');
const { dependencies } = require('../package.json')
var { camelCase } = require('lodash')

var common = require('./rollup.js');

var prod = process.env.NODE_ENV === 'production';

module.exports = {
  input: 'src/index.js',
  external: Object.keys(dependencies),
  output: {
    file: prod ? 'dist/' + common.name + '.min.js' : 'dist/' + common.name + '.js',
    format: 'umd',
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    name: camelCase(common.name),
    banner: prod ? '' : common.banner,
  },
  plugins: [
    nodeResolve({
      mainFields: ['module', 'main'],
      extensions: '.js'
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    common.getCompiler(),
    (prod && uglify.uglify())
  ]
};
