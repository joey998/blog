# tabable hooks管理

统一管理不同类型的hooks   
最基本的一个Hook类，该类型定义了一系列方法和属性，例如    
方法：tap, tapAsync, call, callAsync, intercept   
属性：taps存放所有钩子, interceptors存放所有的拦截器        

Hook也分类型，例如    
SyncHook：同步钩子，需要重写Hook类默认的tapAsync，tapPromise，compile方法。
AsyncSeriesHook：异步钩子，需要重写Hook类默认的compile，_call, call方法。

最终导出的一般是某特定类型的Hook，例如SyncHook， AsyncSeriesHook。  

外部使用方式为Hook.(call|callAsync)(params)     

调用hook.tap方法会将参数和回调组合成{...options, fn: callback}放入hook.taps数组里面。   
按照options.before以及options.stage的大小，从小到大插入数组，具体是先before（表示在哪些options.name之前）: string | string[], 
等到before完全满足之后，再根据stage从小到大排列。
**before优先级高于stage**    

hook.intercept({register: (tap) => {}})会将所有hook.taps遍历一遍当做参数传递给register函数，然后返回值覆盖hook.taps。   
每次新增hook.tap的时候都会对tap时候传递的参数执行所有的interceptors，返回处理过的值   
 

``` javascript
// 定义hook，第一个参数数组表示后续调用方法有几个参数，名字随便取，只是一个变量
let syncHook = new SyncHook(['param1', 'param2']);

// 注册事件：
syncHook.tap({
  name: '1 third hook',
  stage: 1
}, function (param, other) {
  console.log('first param2', param, other)
})
syncHook.tap({
  name: 'first hook',
  stage: 11
}, function (param, other) {
  console.log('first param', param, other)
})
syncHook.tap({
  name: 'second hook',
  before: 'first hook',
  stage: 12
}, function (param, other) {
  console.log('first param2', param, other)
})
syncHook.tap({
  name: 'third hook',
  stage: 3
}, function (param, other) {
  console.log('first param2', param, other)
})

// syncHook.call会被改写成，_x存的所有的tap.fn
function anonymous(param1, param2
  ) {
  "use strict";
  var _context;
  var _x = this._x;
  var _fn0 = _x[0];
  _fn0(param1, param2);
  var _fn1 = _x[1];
  _fn1(param1, param2);
  var _fn2 = _x[2];
  _fn2(param1, param2);
  var _fn3 = _x[3];
  _fn3(param1, param2);
  
}

// 调用事件：
syncHook.call(compilation, 'dfasdf')
```
 


``` javascript
// 定义hook，第一个参数数组表示后续调用方法有几个参数，名字随便取，只是一个变量
let asyncSeriesHook = new AsyncSeriesHook(['param1', 'param2'])

// asyncSeriesHook.callAsync经过重写之后，会变成,_x存的所有的tap.fn
asyncSeriesHook.callAsync = function anonymous(param1, param2, _callback
) {
  "use strict";
  var _context;
  var _x = this._x;
  function _next1() {
    var _fn2 = _x[2];
    _fn2(param1, param2, (function (_err2) {
      if (_err2) {
        _callback(_err2);
      } else {
        _callback();
      }
    }));
  }
  function _next0() {
    var _fn1 = _x[1];
    _fn1(param1, param2, (function (_err1) {
      if (_err1) {
        _callback(_err1);
      } else {
        _next1();
      }
    }));
  }
  var _fn0 = _x[0];
  _fn0(param1, param2, (function (_err0) {
    if (_err0) {
      _callback(_err0);
    } else {
      _next0();
    }
  }));
}

// 注册事件，异步函数需要手动调用callback才会执行下一个事件
asyncSeriesHook.tapAsync({
  name: '1 hook',
  stage: 1
}, function (param, other, callback) {
  console.log('1 hook', param, other);
  callback();
})
asyncSeriesHook.tapAsync({
  name: '3 hook',
  stage: 3
}, function (param, other, callback) {
  console.log('3 hook', param, other);
  callback();
})
asyncSeriesHook.tapAsync({
  name: '2  hook',
  stage: 2
}, function (param, other, callback) {
  console.log('2 hook', param, other);
  callback();
})

// 异步函数的最后一个参数是一个回调函数，当tap的所有fn执行callback(param)中的param不为空的时候（或者执行完毕），会执行callAsync的回调
asyncSeriesHook.callAsync(1111, 2222, function(value) {
  console.log('last')
});
```
