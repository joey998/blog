<!--
 * @Author: tedjmzhang tedjmzhang@tencent.com
 * @Date: 2024-07-03 18:06:36
 * @LastEditors: tedjmzhang tedjmzhang@tencent.com
 * @LastEditTime: 2024-08-24 16:48:08
 * @FilePath: /code/webpack-org/blog/src/frontend/library/typescript/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# typescript

1. declare：因为有一些三方库是使用javascript写的，但是我们要在typescript里面引用该库，
所以我们要给该库定义类型，仅定义类型，不做实现，所以用declare。不加declare的话，必须要实现。      
一般是给模块或者命名空间做声明
```
// dc.d.ts
declare var foo: string;
declare interface valueA {
  prop: string
}

// index.ts
let makeGreeting = myLib.makeGreeting;
let c: string = foo;
let d: valueA = {prop: "12"};
```

2. namespace: 相当于定义了一个全局的ts类型, 该变量需要使用export导出值，别的模块使用
```
namespace globalObj {
  export const gbc = {prop1: "namespace"};
  export interface gbI {
    prop1: string
  }
}

// 别的地方使用
let namespaceValue: globalObj.gbI = globalObj.gbc;
```

3. module: 就正常一个模块，外部可以通过`import lib from 'lib'`使用;
```
export const mc = {
  prop1: "module"
}

export interface mcI {
  prop1: string
}
```

