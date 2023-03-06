const Koa = require("koa"); // 不能用esmodule 必须使用commonjs
const fs = require("fs"); // ./ / npm install yarn add ，如果是原生直接取node中找
const path = require("path");
const app = new Koa(); // const app = new Vue()

// node 最频繁做的事情就是在处理请求和操作文件
// 当请求来临以后会直接进入到use注册回调函数中
app.use(async (ctx) => {
  // ctx 上下文 默认是get  有请求体和响应体
  // 针对get请求可以这样，post使用body-parse进行解析
  console.log("打印***request,response", ctx.request, ctx.response);
  if (ctx.request.url === "/") {
    // 意味着人家访问 localhost:5173/  一般采用文件流方式读取
    const indexContent = await fs.promises.readFile(
      path.resolve(__dirname, "./index.html")
    );
    console.log("打印***indexContent", indexContent.toString());
    ctx.response.body = indexContent;
    // 不设置直接以流的形式进行下载  Content-Type: application/octet-stream
    ctx.response.set("Content-Type", "text/html");
  }
  if (ctx.request.url === "/main.js") {
    // 意味着人家访问 localhost:5173/  一般采用文件流方式读取
    const mainContent = await fs.promises.readFile(
      path.resolve(__dirname, "./main.js")
    );
    console.log("打印***indexContent", mainContent.toString());
    ctx.response.body = mainContent;
    // 不设置直接以流的形式进行下载  Content-Type: application/octet-stream
    ctx.response.set("Content-Type", "text/javascript");
  }

  if (ctx.request.url === "/App.vue") {
    // 如果是vue文件，会进行字符串替换 mainVueContent.toString().find(template) 进行处理
    // AST语法 ====》 Vue.createElement ====>  变成js文件
    const mainVueContent = await fs.promises.readFile(
      path.resolve(__dirname, "./App.vue")
    );
    console.log("打印***indexContent", mainVueContent.toString());
    ctx.response.body = mainVueContent;
    // 不设置直接以流的形式进行下载  Content-Type: application/octet-stream
    ctx.response.set("Content-Type", "text/javascript");
  }
  if (ctx.request.url === "/api/getUserInfo") {
    // 请求获取用户信息的接口
    // 去数据库找数据返回
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
