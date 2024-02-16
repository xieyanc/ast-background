var Service = require('../core/service.js');

/**
 * 私聊信息服务
 */
class Private_chat_information extends Service {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		// 传参给父类构造函数
		super(Object.assign({
			// 操作的表
			table: "private_chat_information",
			// 分页大小
			size: 1
		}, config));
	}
}

module.exports = {
Private_chat_information
};
