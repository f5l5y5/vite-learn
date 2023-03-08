const Koa = require("koa"); // 不能用esmodule 必须使用commonjs
const fs = require("fs"); // ./ / npm install yarn add ，如果是原生直接取node中找
const path = require("path");
const app = new Koa(); // const app = new Vue()

// 我们不用返回给客户端的吧 而且我们这里约定的名字就叫做vite.config.js
const viteConfig = require("./vite.config");
console.log("打印***viteConfig", typeof viteConfig);

const aliasResolve = require("./aliasResolve");

app.use(async (ctx) => {
  if (ctx.request.url === "/") {
    const indexContent = await fs.promises.readFile(
      path.resolve(__dirname, "./index.html")
    );
    ctx.response.body = indexContent;
    ctx.response.set("Content-Type", "text/html");
  }
  if (ctx.request.url.endsWith(".js")) {
    console.log("打印***ctx.request.url  js", ctx.request.url);
    // 路径缺少.   /main.js
    // 直接进行@assets的替换
    const mainContent = await fs.promises.readFile(
      path.resolve(__dirname, "." + ctx.request.url),
      "utf-8"
    );
    const lastResult = aliasResolve(viteConfig.resolve.alias, mainContent);
    console.log("打印***mainContent", mainContent);
    ctx.response.body = lastResult;
    ctx.response.set("Content-Type", "text/javascript");
  }
});

app.listen(5173, () => {
  console.log(`
  koa v4.1.2  ready in 775 ms

  ➜  Local: http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

	`);
});
