const fs = require('fs')
const path = require('path')
module.exports = options => {
	return {
		//服务器相关配置
		configureServer(server) {
			const mockStat = fs.statSync('mock')
			const isDirectory = mockStat.isDirectory()
			let mockResult = []

			if (isDirectory) {
				mockResult = require(path.resolve(process.cwd(), 'mock/index.js'))
				console.log('打印***mockResult', mockResult)
			}
			server.middlewares.use((req, res, next) => {
				// 自定义请求处理...
				const matchItem = mockResult.find(mockData => mockData.url === req.url)
				if (matchItem) {
					const responseData = matchItem.response(req)
					res.setHeader('Content-Type', 'application/json')
					res.end(JSON.stringify(responseData)) // 设置请求头 异步的
				} else {
					next()
				}
			})
		}
	}
}
