# webpack 源码解析

## 带着问题看源码
1. 如何进行依赖收集，循环依赖如何处理
2. webpack将源码转换成ast是loader干的活，还是webpack内部干的
每个模块通过NormalModuleFactory创建的之后，经过this.hook.resolve之后，能够分析出该文件应该使用哪个loader，从而给对应的loader处理，
webpack内部原生支持转换javascript（使用acorn作为parser）
3. webpack如此多的hooks都放在了解析的哪一步
4. webpack的plugins有没有执行顺序，如果有的话，前后那个为准

## 开冲

1. Compiler实例     
保存传入的参数options，调用compiler.run调用hooks之后，执行compiler.compile生成Compilation实例，存在this.compilation中

2. Compilation实例    
调用compilation


流程

1. 调用webpack()会生成Compiler实例，生成的时候会添加各种hooks(JavascriptModulesPlugin，CssModulesPlugin，EntryOptionPlugin...),    
调用compiler.run()会触发compiler的hooks，然后调用compiler.create()生成compilation实例。
2. compiler.hooks.make.callAsync()调用make的hooks，包含了EntryOptionPlugin,参数为compilation 
3. compilation实例添加属性compilation.factorizeQueue=new AsyncQueue()。   
AsyncQueue：自身包含hooks，例如asyncQueue.hooks.beforeAdd。调用了asyncQueue.add之后会在加上setImmediate(syncQueue._root._ensureProcessing)（事件循环末尾），会遍历syncQueue._children里面的所有child，
调用child._startProcessing(entry)


EntryPlugin是在webpack主函数里面添加的    

一个webpack配置创建一个Compiler实例，然后这个Compiler会生成一个Compilation实例。



