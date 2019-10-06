var expect = require('expect.js');

var base = require('../src/index.js');

describe('单元测试', function () {
  this.timeout(1000);

  describe('功能1', function () {
    it('相等', function () {
      expect(base.add(1, 1)).to.equal(2);
    });
  });
});
