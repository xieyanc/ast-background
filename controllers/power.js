var Controller = require('../core/Controller.js');

/**
 * 点赞
 */
class Power extends Controller {
  /**
   * 构造函数
   * @param {Object} config 配置参数
   */
  constructor(config) {
    // 传参给父类构造函数
    super(Object.assign({
      // 选择的模板那路径模板
      tpl: './power/',
      // 选择的服务
      service: 'power'
    }, config));
  }
}

Power.prototype.get_list = function (ctx) {
  // 获取user_id，查user表获取用户组，然后通过返回的字段判断时哪个用户，比如管理员，就能够拥有大部分权限
  console.log(ctx.url)

  return 1
}

module.exports = Power;