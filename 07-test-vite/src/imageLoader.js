// import imageSrc from "./assets/images/axios.png?raw"; // buffer 二进制
import imageSrc from "@assets/images/axios.png";

console.log("打印***imageSrc", imageSrc); ///src/assets/images/axios.png
// 服务端 他会去读取这个图片文件的内容 ---> Buffer  二进制的字符串
// Buffer 对于图片没什么意义 对于svg有意义
const img = document.createElement("img");
img.src = imageSrc;

document.body.appendChild(img);
