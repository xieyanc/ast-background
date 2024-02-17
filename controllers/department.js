var Controller = require('../core/controller.js');
const Common = require('../utils/Common')

/**
 * 点赞
 */
class Department extends Controller {
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
      service: 'department'
    }, config));
  }
}

/**
 *
 * @param ctx
 * @param ctx.usre_id
 * @param ctx.user_group
 * @return {number}
 */
Department.prototype.get_list = async function (ctx) {
  let sql = `select * from department`

  const result = {
    count: 0,
    list: {}
  }

  result.list = await $.mysql.run(sql)
  result.count = result.list.length

  return result
}

Department.prototype.add = async function (ctx) {
  console.log(ctx.request.body)
  let sql = `INSERT INTO department (department_name) VALUES ('${ctx.request.body.department_name}')`

  try {
    await $.mysql.run(sql)
    return {
      result: 1
    }
  } catch (e) {
    console.error(e)
    return {
      result: -1,
      msg: e
    }
  }
}

Department.prototype.del = async function (ctx) {
  const common = new Common('DELETE FROM `department` WHERE id = ')

  let params = common.handleUrlData(ctx.url).getParams()

  let sql = 'DELETE FROM `department` WHERE id = ' + params.id

  let result

  try {
    result = await $.mysql.run(sql)

    if (result.affectedRows === 1) {
      result = 1
    } else {
      result = -1
    }
  } catch (e) {
    console.error(e)
    result = -1
  }

  return {
    result
  }
}

module.exports = Department;