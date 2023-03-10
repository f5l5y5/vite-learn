// 对象不灵活
const fs = require('fs')
const path = require('path')

function diffDirAndFile(dirFilesArr = []) {
	const result = {
		dirs: [],
		files:[]
	}
}

function getTotalSrcDir = () => {
			const result = fs.readdirSync(path.resolve(__dirname, '../src'))
		console.log('打印***result======>', result)
}

module.exports = options => ({
	config: (config, env) => {
		// config 基础config
		// 可以返回对象 部分的config的配置 会merge到vite.config.js中
		console.log('打印***config,env======>', config, env)

		return {
			// 返回一个resolve 将src下的文件夹进行得到
			resolve: {}
		}
	}
})
