var Service = require('../core/service.js');

class Test extends Service {
  constructor(config) {
    // 传参给父类构造函数
    super(Object.assign({
      // 操作的表
      table: "job_information",
      // 分页大小
      size: 1
    }, config));
  }
}

module.exports = {
  Test
};