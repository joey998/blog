# yeild

就是程序执行到yeild的时候，会执行yeild后面跟着的表达式，然后立即返回值{value: 表达式值, done: true | false}。   
等到下次再调用next(param)时，param将会作为`yeild 表达式`的返回值，可以通过`variable = yeild 表达式`获取param值，然后继续往下执行；
直接调用next(), `yeild 表达式`的返回值为undefined；

``` javascript
function* counter(value) {
  let step;

  while (true) {
    step = yield value++;    // 每次都执行yeild后面的value++之后停止，下次调用next(param)的时候通过step获取param值。然后往下执行，碰到yeild又会暂停，没碰到yeild则done为true
    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);                       // 这里并没有调用函数
console.log(generatorFunc.next().value); // 0           // 这里调用next之后才开始调用函数
console.log(generatorFunc.next().value); // 1
console.log(generatorFunc.next().value); // 2
console.log(generatorFunc.next().value); // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value); // 15
console.log(generatorFunc.next(10).value); // 26
```