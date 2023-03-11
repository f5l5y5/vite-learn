// 对象不灵活
const fs = require('fs')
const path = require('path')

function diffDirAndFile(dirFilesArr = [], basePath = '') {
	const result = {
		dirs: [],
		files: []
	}
	dirFilesArr.forEach(name => {
		const currentFileStat = fs.statSync(path.resolve(__dirname, basePath + '/' + name))
		currentFileStat.isFile()
		const isDirectory = currentFileStat.isDirectory()
		if (isDirectory) {
			result.dirs.push(name)
		} else {
			result.files.push(name)
		}
	})

	return result
}

function getTotalSrcDir(keyName) {
	const result = fs.readdirSync(path.resolve(__dirname, '../src'))
	const diffResult = diffDirAndFile(result, '../src')
	const resolveAliasesObj = {}
	diffResult.dirs.forEach(dirname => {
		const key = `${keyName}/${dirname}`
		const absPath = path.resolve(__dirname, '../src' + '/' + dirname)
		resolveAliasesObj[key] = absPath
	})
	return resolveAliasesObj
}

module.exports = ({ keyName = '@' } = {}) => ({
	config: (config, env) => {
		// config 基础config
		// 可以返回对象 部分的config的配置 会merge到vite.config.js中
		const resolveAliasesObj = getTotalSrcDir(keyName)
		return {
			// 返回一个resolve 将src下的文件夹进行得到
			resolve: {
				alias: resolveAliasesObj
			}
		}
	}
})
