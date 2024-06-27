// terser可以生成sourcemap文件
const { minify } = require("terser");
async function main(){
  var code = "function add(first, second) { return first + second; }";
  var result = await minify(code, { sourceMap: true });
  console.log(result.code);  // minified output: function add(n,d){return n+d}
  console.log(result.map);  // source map
}
main();



// dist/index.html下面的main.js会有个报错
// 通过source-map库定位原始位置
// 不加sourcemap：Error: 错误 at main.js:2:197577， 加完之后 Error: 错误 at module2.js:2:8
var sourceMap = require("source-map");
let fs = require("fs");
let rawSourceMapJsonData = fs.readFileSync("./dist/main.js.map", "utf-8");
async function main2() {
	const consumer = await new sourceMap.SourceMapConsumer(rawSourceMapJsonData);
	let res = consumer.originalPositionFor({ line: 2, column: 197577 });
	console.log("dd", res);
  // dd {
  //   source: 'webpack://webpack/src/module2.js',
  //   line: 2,
  //   column: 7,
  //   name: null
  // }
}

main2();


