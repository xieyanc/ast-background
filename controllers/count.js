var Controller = require('../core/Controller.js');
const Common = require('../utils/Common')

/**
 * 点赞
 */
class Count extends Controller {
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

/**
 *
 * @param ctx
 * @param ctx.usre_id
 * @param ctx.user_group
 * @return {number}
 */
Count.prototype.get_list = async function (ctx) {
  /**
   * 首先判断用户属于哪个用户组，比如管理员和企业用户，这个前端会给
   */
  const common = new Common()
  let params = common.handleUrlDataWithNoSign(ctx.url).getNoSignParams()

  let map = new Map([
    [
      '企业用户',
      [
        `SELECT COUNT(*) as recruitment_information_count FROM recruitment_information WHERE user_id = ${params.user_id};`,
        `SELECT recruitment_position,COUNT(*) as job_information_count FROM job_information WHERE user_id = ${params.user_id} GROUP BY recruitment_position;`
      ]
    ],
    [
      '管理员',
      [
        `SELECT COUNT(*) AS visited_count FROM access_token WHERE DATE(update_time) = CURDATE();`,
        `SELECT COUNT(*) AS job_information_count FROM job_information WHERE DATE(create_time) = CURDATE();`,
        `SELECT COUNT(*) AS student_count FROM student WHERE DATE(update_time) = CURDATE();`,
        `SELECT (SELECT COUNT(*) FROM job_information WHERE examine_state = '已通过') / COUNT(*) AS pass_count FROM job_information;`,
        `SELECT * FROM department`,
        `SELECT d.department_name, COUNT(*) AS job_count FROM department d JOIN recruitment_information j ON d.department_name = j.department GROUP BY d.department_name`
      ]
    ]
  ])

  // console.log(map.get(params.user_group))

  let sqlArr = map.get(params.user_group)

  let promiseArr = sqlArr.map(item => $.mysql.run(item))

  let res = await Promise.all(promiseArr)


  let result = {
    headerData: {},
    echartData: []
  }

  res.forEach((item, index) => {
    let temp = item[0]

    if (index === 4) {
      temp = item.map(item => ({
        name: item.department_name,
        count: 0
      }))

      result.echartData.push(temp)
    }else if (index === 5) {
      temp = item

      let tempRes = {} //

      result.echartData[0].forEach(item => {
        tempRes[item.name] = 0
      })

      temp.forEach(item => {
        tempRes[item.department_name] = item.job_count || 0
      })

      let transformedArray = Object.entries(tempRes).map(([name, count]) => ({
        name,
        count
      }));

      result.echartData = transformedArray
    } else {
      result.headerData = {
        ...result.headerData,
        ...temp
      }
    }

  })

  result.headerData.pass_count = result.headerData.pass_count * 100 + '%'

  //
  // result.pass_count = result.pass_count * 100 + '%'

  // res.pass_count = parseInt(res.pass_count) * 100 + '%'
  // console.log(res)

  // let sql1 = map.get(params.user_group)[0]
  // let sql2 = map.get(params.user_group)[1]

  // const res = await Promise.all([$.mysql.run(sql1), $.mysql.run(sql2)])

  // console.log(res)

  // const res = await $.mysql.run(sql)

  return result
}

module.exports = Count;