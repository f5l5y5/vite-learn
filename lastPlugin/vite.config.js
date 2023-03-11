import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				assetFileNames: '[hash]_[name].[ext]'
			}
		}
	},
	plugins: [
		// vite 特殊的钩子
		{
			config(options) {
				// console.log('打印***config', options)
				return {
					mode: 'production'
				}
			},
			configureServer(server) {
				server.middlewares.use((req, res, next) => {})
			},
			transformIndexHtml: {
				enforce: 'pre',
				transform: html => {}
			},
			buildStart(fullRollupOptions) {
				console.log('打印***buildStart', fullRollupOptions)
			},
			// 整个流程解析完成后再执行的钩子,最后的配置文件
			configResolved(options) {
				// console.log('打印***options', options)
			},
			// 使用npx vite preivew 进行生产包预览
			configurePreviewServer(server) {
				// console.log('打印***server', server)
			},
			// 通用的钩子
			options(rollupOptions) {
				console.log('打印***rollupOptions', rollupOptions)
			}
		}
	]
})
