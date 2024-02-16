var Service = require('../core/service.js');

/**
 * 文章
 */
class Article extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "article",
			// 分页大小
			size: 10
		}, config));
	}
}

module.exports = {
	Article
};