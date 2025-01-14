const getParams = () => {
	const params = process.argv.slice(2);
	const paramsDefault = {
		default: {
			robot: 1,
			preview: false,
			upload: false,
			// 空跑，不执行
			dry: false,
			// 根据配置，单选还是多选来上传小程序
			useSelect: false,
			useMultiSelect: false,
		},
	};
	return require('minimist')(params, paramsDefault);
};

module.exports = {
	getParams,
};
