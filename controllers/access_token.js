var Controller = require("../core/Controller.js");

/**
 * 广告
 */
class Access_token extends Controller {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(
			Object.assign({
					// 选择的模板那路径模板
					tpl: "./access_token/",
					// 选择的服务
					service: "access_token",
				},
				config
			)
		);
	}
}

module.exports = Access_token;
