// import "./index.css";
// import "./index.module.less";
// import "./componentA";
// import "./componentB";
// import "./index.less";
// import "./varible.css";

import "@/imageLoader";
import jsonFile from "@assets/json/index.json";
import { name } from "@assets/json/index.json";
import "@/svgLoader";

// 这个对象我都用到了, 那么打包工具敢删除对象里面的成员吗？？？

// 流媒体 video src 都不是一个mp4 rtmp
// lodash ---> js工具库 深度克隆 导入使用{cloneDeep} from 'lodash' 不要整体删除

// 企业项目: 如果生产环境非常的臃肿和性能差
// 控制导入

// tree shaking 摇树优化: 打包工具会自动帮你移除掉那些你没有用到的变量或者方法
console.log("打印***jsonFile", jsonFile, name); // 用的不是vite jsonFile作为json字符串形式
