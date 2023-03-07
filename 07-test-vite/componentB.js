import componentBCss from "./componentB.module.css";

console.log("打印***componentBCss", componentBCss);
const div = document.createElement("div");
document.body.appendChild(div);
div.className = componentBCss.footer;
