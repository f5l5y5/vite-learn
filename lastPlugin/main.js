// import { cloneDeep } from 'lodash'
// const arr = cloneDeep([])

fetch('/api').then(data => {
	console.log('打印***data', data)
})

if (ctx.request.url.includes('/api')) {
	// 请求目标服务器
	const target = proxy.target
	// 进行重写路径
	const rewrite = str => str
	// 路径重写
	const result = await request(target + rewrite('/api'))
	ctx.body = result
}
