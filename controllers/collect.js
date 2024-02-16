var Controller = require('../core/Controller.js');

/**
 * 收藏
 */
class Collect extends Controller {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 选择的模板那路径模板
			tpl: './collect/',
			// 选择的服务
			service: 'collect'
		}, config));
	}
}

module.exports = Collect;
