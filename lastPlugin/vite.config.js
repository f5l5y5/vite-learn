import { defineConfig } from 'vite'
import importToCDN from 'vite-plugin-cdn-import'

export default defineConfig({
	server: {
		proxy: {
			'/api': {
				target: 'http://www.baidu.com',
				changeOrigin: true,
				rewrite: path => path.replace(/^api/, '')
			}
		}
	},
	build: {
		rollupOptions: {
			external: ['lodash'],
			externalGlobal: {
				var: '_', // 默认导出的名称
				path: 'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.fp.min.js' // cdn地址
			},
			output: {
				assetFileNames: '[hash]_[name].[ext]'
			}
		}
	},
	plugins: [
		importToCDN({
			modules: [
				{
					name: 'lodash',
					var: '_', // 默认导出的名称
					path: 'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.fp.min.js' // cdn地址
				}
			]
		}),
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
