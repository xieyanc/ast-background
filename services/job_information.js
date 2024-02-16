var Service = require('../core/service.js');

/**
 * 求职信息服务
 */
class Job_information extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
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
Job_information
};
