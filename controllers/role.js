var Controller = require('../core/controller.js');
let adminConfig = require('../config/admin')
let studentConfig = require('../config/student')
let enterpriseConfig = require('../config/enterprise')
let Common = require('../utils/Common')

/**
 * 收藏
 */
class Role extends Controller {
  /**
   * 构造函数
   * @param {Object} config 配置参数
   */
  constructor(config) {
    // 传参给父类构造函数
    super(Object.assign({
      // 选择的模板那路径模板
      tpl: '',
      // 选择的服务
      service: 'role'
    }, config));
  }
}

Role.prototype.get_list = async function (ctx) {
  const common = new Common()
  common.handleUrlDataWithNoSign(ctx.url)

  switch (common.objWithNoSign.user_group) {
    case '管理员':
      return adminConfig;
    case '企业用户':
      return enterpriseConfig;
    case '学生':
      return studentConfig;
    default:
      return {
        code: 500,
        msg: '无该管理权限'
      }
  }
}

module.exports = Role;
