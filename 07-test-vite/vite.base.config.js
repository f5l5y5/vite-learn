import { defineConfig } from 'vite'
const path = require('path')
// const postcssPresetEnv = require("postcss-preset-env");
// import { ViteAliases } from "vite-aliases";
import MyViteAlias from './plugins/ViteAliases'
// import { createHtmlPlugin } from 'vite-plugin-html'
import CreateHtmlPlugin from './plugins/CreateHtmlPlugin'
import { viteMockServe } from 'vite-plugin-mock'
import VitePluginMock from './plugins/VitePluginMock'

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets')
		}
	},
	// css: {
	//   // 对css的行为进行配置
	//   modules: {
	//     // 对css模块化的默认行为进行覆盖
	//     localsConvention: "dashes",
	//     scopeBehaviour: "local",
	//     // generateScopedName:"[name]-[local]-[hash:5]"
	//     // generateScopedName: (name,filename,css) => {

	//     // 	return `${name}_${Math.random().toString(36).substr(3, 8) }`
	//     // },
	//     // hashPrefix:"hello",
	//     // globalModulePaths:["./componentB.module.css"]
	//   },
	//   preprocessorOptions: {
	//     less: {
	//       math: "always",
	//       globalVars: {
	//         mainColor: "red",
	//       },
	//     },
	//     sass: {},
	//   },
	//   devSourcemap: true,
	//   postcss: {
	//     plugins: [
	//       postcssPresetEnv({
	//         importFrom: path.resolve(__dirname, "./varible.css"),
	//       }),
	//     ], // 可以直接写postcssPresetEnv 不要任何配置
	//   },
	// },
	// build: {
	//   rollupOptions: {
	//     output: {
	//       assetFileNames: "[hash].[name].[ext]",
	//     },
	//   },
	//   assetsInlineLimit: 2048000,
	//   outDir: "build",
	//   assetsDir: "static",
	// },
	plugins: [
		// ViteAliases()
		MyViteAlias(),
		CreateHtmlPlugin({
			inject: {
				data: {
					title: '哈哈'
				}
			}
		}),
		// viteMockServe(),
		VitePluginMock()
	]
})
