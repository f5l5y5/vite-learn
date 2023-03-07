import componentACss from "./componentA.module.css";
import componentALess from "./index.module.less";

console.log("打印***componentALess", componentALess);

console.log("打印***componentACss", componentACss);
const div = document.createElement("div");
document.body.appendChild(div);
div.className = componentACss.footer;
