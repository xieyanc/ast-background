var Controller = require('../core/Controller.js');
var Common = require('../utils/Common')
const {insert} = require("mongodb/lib/core/wireprotocol");

/**
 * 求职信息控制器
 */
class Job_information extends Controller {
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
 * 重写增加方法
 * @param {Object} ctx
 * @return {Object} 返回json-rpc格式结果
 */
Job_information.prototype.add = async function(ctx) {
	// let sql = `INSERT INTO job_information (user_id, student_id, full_name, gender, contact_information, specialty_type, curriculum_vitae, cover, personal_information, recruitment_position, hits, praise_len, examine_state, examine_reply, recommend) VALUES`
	const common = new Common()
	let params = ctx.request.body

	let querySql = `SELECT user.nickname, user.email, user.phone, student.* FROM user, student WHERE user.user_id = ${params.student_user_id} AND student.user_id = ${params.student_user_id}`

	let queryRes = await $.mysql.run(querySql)
	queryRes = queryRes[0]

	let insertObj = {
		user_id: '',
		student_id: '',
		full_name: '',
		gender: '',
		contact_information: '',
		specialty_type: '',
		curriculum_vitae: '',
		cover: '',
		personal_information: '',
		recruitment_position: '',
		hits: '',
		praise_len: '',
		examine_state: '',
		examine_reply: '',
		recommend: '',
	}

	Object.keys(insertObj).forEach(key => {
		let queryKey = key
		switch (key) {
			case 'contact_information':
				queryKey = 'phone'
				break;
			case 'examine_state':
				// 这里会带回来原本招聘信息的审核状态，所以需要单独处理一下
				insertObj[key] = '未审核'
				queryKey = 'undefined'
				key = 'undefined'
				break;
			case 'examine_reply':
				insertObj[key] = ''
				key = 'undefined'
				queryKey = 'undefined'
				break
		}
		insertObj[key] = params[queryKey] && params[queryKey] !== void 0 ? params[queryKey] : queryRes[queryKey] ? queryRes[queryKey] : null
	})

	let sql = common.getInsert('job_information', insertObj).getSql()

	let result = await $.mysql.run(sql)

	if (result.affectedRows === 1) {
		result = 1
	} else {
		result = -1
	}

	return {
		result
	};
}

Job_information.prototype.get_list = async function (ctx) {
	let sql = 'SELECT job_information.*, user.email, user.nickname FROM job_information LEFT JOIN user ON job_information.user_id = user.user_id'
	let countSql = 'SELECT COUNT(*) AS count FROM job_information'

	const common = new Common(sql)

	sql =  common.handleUrlData(ctx.url).from('job_information').getWhere().getOrderby().getLimit().getSql()

	console.log(sql)

	countSql = new Common(countSql).from('job_information').setObj(common.obj).getWhere().getSql()

	const res = {
		list: '',
		count: -1
	}

	res.list = await $.mysql.run(sql)

	let countRes = await $.mysql.run(countSql)

	res.count = countRes[0].count

	if (this.service.error) {
		return {
			error: this.service.error,
		};
	}

	return {
		...res
	}
}

module.exports = Job_information;
