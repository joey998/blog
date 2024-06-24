const resolve = require("enhanced-resolve");
const path =require('path')

// resolve("/some/path/to/folder", "module/dir", (err, result) => {
// 	result; // === "/some/path/node_modules/module/dir/index.js"
// });
console.log(__dirname);  // /Users/zhangjiaming/code/learn/blog/src/frontend/library/enhanced-resolve
let res = resolve.sync(__dirname, "asap"); // /Users/zhangjiaming/code/learn/blog/node_modules/asap/asap.js
let res2 = resolve.sync(__dirname, "esbuild"); //  /Users/zhangjiaming/code/learn/blog/node_modules/esbuild/lib/main.js
console.log(res);
console.log(res2);

const myResolve = resolve.create({
	// or resolve.create.sync
	extensions: [".ts", ".js"],
  alias: {
    "@": __dirname
  }
	// see more options below
});

let res3 = myResolve('/', "@/index", (err, result) => {
  if(err) throw err
  console.log('res3', result);
});

