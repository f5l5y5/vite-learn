import { defineConfig, loadEnv } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

// 使用函数可以打印日志
const envResolver = {
	build: () => {
		// console.log("生产环境");
		return { ...viteBaseConfig, ...viteProdConfig }
	},
	serve: () => {
		// console.log("开发环境");
		return Object.assign({}, viteBaseConfig, viteDevConfig) // 新配置可能会被配置envDir 之前的有什么作用？ 可能为.envA
	}
}
// command : serve | build  mode: development | production
export default defineConfig(({ command, mode }) => {
	// console.log(command, mode, process.cwd());
	// console.log(process.env);
	const env = loadEnv(mode, process.cwd(), '') // 第三个参数默认是空   VITE_找出VITE_开头
	// console.log("打印***env", env);
	// 此时才能读取环境变量
	return envResolver[command]()
})
