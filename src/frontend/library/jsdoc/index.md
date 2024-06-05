# jsdoc 根据注释生成文档工具
使用原因：因为js解释器不支持类型定义以及解析，所以这些东西不能放代码里面，只能放注释里面。 
   
使用心得：一句话就是jsdoc cli不支持一些typescript的注释格式（如@import)，vscode支持某些jsdoc和所有typescript的注释格式，所以会导致vscode能根据注释跳转，但是单独运行jsdoc .会报错

## jsdoc生成文档没啥吊用
webpack5源码里面使用了`/** type {import("jest").Config} jestConfig */`, 
但是jsdoc原生又不支持import语句，导致运行`jsdoc .`生成不了文档，需要单独导入各种jsdoc插件，
但是webpack的dep里面有没有写，导致需要手动添加（根本加不完），所以webpack使用jsdoc生成文档是不行的。

但是typescript能够解析`/** type {import("jest").Config} jestConfig */`，并且能够根据该语法跳转到对应的模块。
从而导致了一个现象：在vscode里面能够通过该语法跳转，但是执行`jsdoc .`会失败。

所以得出一个结论就是：
因为js解释器不支持类型定义以及解析，所以这些东西不能放代码里面，只能放注释里面。
jsdoc就是解析注释加上类型定义并自动生成文档的，但是jsdoc有一套自己的类型定义语法，比如interface和模块导入跟typescript的不一样
而vscode自带的typescript相当于在jsdoc的基础上面，对注释的解析又加上了一些特性，例如import等。

```javascript
// test.js
/**
 * @module testModule
 */

/**
 * @desc: valuefn
 * @see module:PersonModule
 * @requires module:PersonModule
 * @param { module:PersonModule~Person#say } a 去往实例方法 ,这里必须要使用~，因为module.export暴露出来的默认都是内部属性
 * @param { module:PersonModule~Person.say } b 去往静态方法
 * @param {Person2} c 去往内部方法
 * @returns {string}
 */
function getValue(a, b, c) {
  console.log(a, b, c);
}

module.exports = {
  getValue
}
```