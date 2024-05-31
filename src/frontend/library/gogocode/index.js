const $ = require('gogocode');
let path = require('path');
let fs = require('fs')

let filePath = path.resolve(__dirname, './test.js');
let str = fs.readFileSync(filePath, { encoding: 'utf-8' });
const ast = $(str);
const test1 = ast.find('const $_$variable = $_$value');
let test1Match = test1.match

// const code = test1.generate();
// ast.replace('function log(){}', `let log = 12;`);
// let code2 = ast.generate();
// console.log(code2)

let test2 = ast.find('function log($$$param){$$$statement}')
let test2match = test2.match;

let ddd = ast.replace('function log($$$param){$$$statement}', 'function testLog($$$params){$$$statement}')
let replacedValue = ast.generate();
fs.writeFileSync('output.js', replacedValue)


test1.each(item => {
  let variable = item.match.variable[0].value;
  let value = item.match.value[0].value;
  console.log('variable value', variable, value)
})

const res = ast.find('const dict = { $$$0 }');
const kvs = res.match['$$$0'];
kvs.map((kv) => `${kv.key.name}:${kv.value.value}`);
// a:1,b:2,c:f



const console1 = ast.find('function testLog($_$0) {}')
let console2 = console1.find('console.log($_$0)');

// 找到 reactClass 定义的语句
const reactClass = ast.find('class $_$0 extends React.Component {}');

// 找到 jsx 里面带有 onClick 属性的标签
const onClick = reactClass.find('<$_$0 onClick={$_$1}></$_$0>');

// 创建一个数组用来收集 onClick 对应的 hanlder 的名称
const clickFnNames = [];

// 有可能找到很多个带有 onClick 的标签，我们这里用 each 去处理每一条
onClick.each((e) => {
  // 用 match[1][0] 来找到 $_$1 匹配到的第一个 onClick 属性对应的 handler 节点
  // 取 value 即为节点名
  // handlerName = 'this.handleClick'
  const handlerName = e.match[1][0].value;
  clickFnNames.push(handlerName);
});

// 替换原有的 constructor，但利用 $$$ 保留原有的参数和语句，只是在最后补上 bind 语句即可
reactClass.replace(
  'constructor($$$0) { $$$1 }',
  `constructor($$$0) { 
    $$$1;
    ${clickFnNames.map((name) => `${name} = ${name}.bind(this)`).join(';')}
  }`,
);