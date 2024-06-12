# tabable hooks管理

统一管理不同类型的hooks   
最基本的一个Hook类，该类型定义了一系列方法和属性，例如    
方法：tap, tapAsync, call, callAsync    
属性：taps存放所有钩子

Hook也分类型，例如    
SyncHook：同步钩子，需要重写Hook类默认的tapAsync，tapPromise，compile方法。
AsyncSeriesHook：异步钩子，需要重写Hook类默认的compile，_call, call方法。

最终导出的一般是某特定类型的Hook，例如SyncHook， AsyncSeriesHook。

外部使用方式为Hook.(call|callAsync)(params)：    
``` javascript
// 注册事件：
AsyncSeriesHook.tapAsync(
  {
    name: "CleanPlugin",
    stage: 100
  }, 
  (compilation, callback) => {
    doSomeThing();
  }
)
// 调用事件：
AsyncSeriesHook.callAsync(compilation, err => {
  doSomeThing();
})
```