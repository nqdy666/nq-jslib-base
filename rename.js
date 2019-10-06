var path = require('path');
var { camelCase } = require('lodash')
var replace = require('replace-in-file');

var fromLibName = 'nq-tslib-base';
var toLibName = 'nq-jslib-base';

var formAuthorName = 'nianqin';
var toAuthorName = 'nqdy666';


function getFullPath(filename) {
  return path.join(__dirname, filename)
}

var options = {
  files: [
    getFullPath('package.json'),
    getFullPath('README.md'),
    getFullPath('README.en.md'),
    getFullPath('config/rollup.js'),
    getFullPath('test/browser/index.html'),
    getFullPath('demo/demo-global.html'),
    getFullPath('demo/demo-node.js'),
    getFullPath('demo/demo-amd.html'),
  ],
  from: [new RegExp(fromLibName, 'g'), new RegExp(camelCase(fromLibName), 'g'), new RegExp(formAuthorName, 'g')],
  to: [toLibName, camelCase(toLibName), toAuthorName],
  countMatches: true,
};

replace(options)
  .then(results => {
    console.log('Replacement results:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
