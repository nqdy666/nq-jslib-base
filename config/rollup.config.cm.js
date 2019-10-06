// rollup.config.js
// commonjs
var common = require('./rollup.js');
var commonjs = require('rollup-plugin-commonjs');
var uglify = require('rollup-plugin-uglify');
const { dependencies } = require('../package.json')

var prod = process.env.NODE_ENV === 'production';

module.exports = {
  input: 'src/index.js',
  external: Object.keys(dependencies),
  output: {
    file: prod ? 'dist/' + common.name + '.common.min.js' : 'dist/' + common.name + '.common.js',
    format: 'cjs',
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    banner: prod ? '' : common.banner,
  },
  plugins: [
    commonjs({
      include: 'node_modules/**',
    }),
    common.getCompiler(),
    (prod && uglify.uglify())
  ]
};
