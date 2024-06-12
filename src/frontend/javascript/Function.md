# Function和eval

> mdn: 与具有访问本地作用域的 eval 不同，Function 构造函数创建的函数仅在全局作用域中执行      
eval和Function若未找到所使用的变量，则会报错

``` javascript
var a = 99;
global.a = 1000;
function subFn(){
  let a = 12;
  let c = new Function('p1', 'p2', `
    return a + p2; // 此处取的全局的a = 1000， global未定义a的话，会报错
  `)
  console.log('Function res', c(1, 2))
  let res = eval(`
    function getValue(){
      return a + 1;  // 此处取本地的a = 12；本地一直往上到global未定义a的话，会报错
    }
    getValue() + 12;
    1999
  `)
  console.log('eval res', res)
}

subFn()
```