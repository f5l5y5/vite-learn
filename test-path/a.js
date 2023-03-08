console.log('打印***arguments======>', arguments)
/*
// 涉及到commonjs规范的一个原理 

0 module.exports require() // es6 module import export for


1 exports = module.exports = {}
2/3 
第4个成员 就是__dirname		文件地址
第5个成员 就是__filename  文件目录地址

(function(exports, require, module, __filename, __dirname) {
    require("")
    console.log("__dirname", __dirname);
}())
打印的函数
 {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: 'C:\\Users\\admin\\Desktop\\taoism-project\\vite-learn\\test-path',
      exports: {},
      filename: 'C:\\Users\\admin\\Desktop\\taoism-project\\vite-learn\\test-path\\main.js',
      loaded: false,
      children: [Array],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      'C:\\Users\\admin\\Desktop\\taoism-project\\vite-learn\\test-path\\main.js': [Module],
      'C:\\Users\\admin\\Desktop\\taoism-project\\vite-learn\\test-path\\a.js': [Module]
    }
  },
  '2': Module {
    id: 'C:\\Users\\admin\\Desktop\\taoism-project\\vite-learn\\test-path\\a.js',
    path: 'C:\\Users\\admin\\Desktop\\taoism-project\\vite-learn\\test-path',
    exports: {},
    filename: 'C:\\Users\\admin\\Desktop\\taoism-project\\vite-learn\\test-path\\a.js',
    loaded: false,
    children: [],
    paths: [
      'C:\\Users\\admin\\Desktop\\taoism-project\\vite-learn\\test-path\\node_modules',
      'C:\\Users\\admin\\Desktop\\taoism-project\\vite-learn\\node_modules',
      'C:\\Users\\admin\\Desktop\\taoism-project\\node_modules',
      'C:\\Users\\admin\\Desktop\\node_modules',
      'C:\\Users\\admin\\node_modules',
      'C:\\Users\\node_modules',
      'C:\\node_modules'
    ]
  },
  '3': 'C:\\Users\\admin\\Desktop\\taoism-project\\vite-learn\\test-path\\a.js',
  '4': 'C:\\Users\\admin\\Desktop\\taoism-project\\vite-learn\\test-path'
}

 */