var Controller = require('../core/controller.js');
const Common = require("../utils/Common");

/**
 * 招聘信息控制器
 */
class Recruitment_information extends Controller {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 选择的模板那路径模板
			tpl: './recruitment_information/',
			// 选择的服务
			service: 'recruitment_information',
			// 互动
			interact: [undefined],
		}, config));
	}
}
/**
 * 重写增加方法
 * @param {Object} ctx
 * @return {Object} 返回json-rpc格式结果
 */
Recruitment_information.prototype.add = async function(ctx) {
	// var result = await this.service.add(ctx.request.body, this.config);|
	const common = new Common()

	let params = ctx.request.body

	const querySql = `SELECT enterprise_users.enterprise_users_id, enterprise_users.enterprise_name, enterprise_users.enterprise_type FROM enterprise_users WHERE enterprise_users.user_id = ${params.user_id}`
	const id = await $.mysql.run(querySql)

	// delete params.user_id

	// const sql =
	params = {
		...params,
		enterprise_users: id[0].enterprise_users_id,
		enterprise_name: id[0].enterprise_name,
		enterprise_type: id[0].enterprise_type
	}

	let sql = common.getInsert('recruitment_information', params).getSql()

	let res = {}

	try {
		res = await $.mysql.run(sql)
	} catch (e) {
		console.error(e)
	}

	const finalRes = {
		result: 0
	}

	if (res.affectedRows === 1) {
		finalRes.result = 1
	} else {
		finalRes.result = -1
	}

	// if (this.service.error) {
	// 	return {
	// 		error: this.service.error,
	// 	};
	// }

	return {
		...finalRes,
	};
}

Recruitment_information.prototype.get_list = async function (ctx) {
	let sql = `SELECT * FROM recruitment_information`
	const myCommon = new Common(sql)

	// 获取enterprise_users，这个是企业用户的id
	let params = myCommon.handleUrlData(ctx.url).getParams()

	let id = ''

	if (params.user_id) {
		const querySql = `SELECT enterprise_users.enterprise_users_id FROM enterprise_users WHERE enterprise_users.user_id = ${params.user_id}`
		id = await $.mysql.run(querySql)
		myCommon.handleUrlData(ctx.url).delParams('user_id').addParams('enterprise_users', id[0].enterprise_users_id).from('recruitment_information').getWhere()
	} else if (Object.keys(params).length === 2) {
		myCommon.handleUrlData(ctx.url).delParams('user_id').from('recruitment_information').getLimit()
	} else {
		myCommon.handleUrlData(ctx.url).delParams('user_id').from('recruitment_information').getWhere().getLimit()
	}

	sql = myCommon.getSql()

	const res = {
		count: -1,
		list: {}
	}

	try {
		res.list = await $.mysql.run(sql)

		let list = await $.mysql.run('SELECT COUNT(*) AS count FROM recruitment_information')
		res.count = list[0].count
	} catch (e) {
		console.error(e)
	}

	return {
		...res
	}
}

module.exports = Recruitment_information;
