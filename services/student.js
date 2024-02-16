var Service = require('../core/service.js');

/**
 * 学生服务
 */
class Student extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "student",
			// 分页大小
			size: 1
		}, config));
	}
}

module.exports = {
Student
};
