var Controller = require('../core/Controller.js');

/**
 * 求职信息控制器
 */
class Test extends Controller {
  /**
   * 构造函数
   * @param {Object} config 配置参数
   */
  constructor(config) {
    // 传参给父类构造函数
    super(Object.assign({
      // 选择的模板那路径模板
      tpl: './job_information/',
      // 选择的服务
      service: 'job_information',
      // 互动
      interact: [undefined],
    }, config));
  }
}
/**
 * 重写job_information的get_list方法
 * @param {Object} ctx
 * @return {Object} 返回json-rpc格式结果
 */
Test.prototype.get_list = async function(ctx) {
  const sql = 'SELECT * FROM job_information'

  const res = await $.mysql.run(sql)

  if (this.service.error) {
    return {
      error: this.service.error,
    };
  }

  return {
    res
  }
}

module.exports = Test;
