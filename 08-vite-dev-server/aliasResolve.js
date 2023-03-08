module.exports = function (aliasConf, JSContent) {
  const entries = Object.entries(aliasConf);
  console.log("打印***entries", entries);
  let lastContent = JSContent;
  entries.forEach((entry) => {
    const [alias, path] = entry;
    console.log("打印***alias", alias);
    console.log("打印***path", path);

    const srcIndex = path.indexOf("/src");
    const realPath = path.slice(srcIndex, path.length);
    console.log("打印***realpath", realPath);
    lastContent = JSContent.replace(alias, realPath);
    console.log("打印***lastContent", lastContent);
  });
  return lastContent;
};
