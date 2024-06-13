let { SyncHook, AsyncSeriesHook } = require('tapable');

let syncHook = new SyncHook(['param1', 'param2']);
let asyncSeriesHook = new AsyncSeriesHook(['param1', 'param2']);

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
// console.log(syncHook.call.toString());
// syncHook.call(1111, 2222);
// console.log(12, syncHook.call.toString())

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
// console.log(asyncSeriesHook.callAsync.toString());
// asyncSeriesHook.callAsync(1111, 2222, function(value) {
//   console.log('last')
// });
// console.log(12, asyncSeriesHook.callAsync.toString())

asyncSeriesHook.tapPromise({
  name: '3 hook',
  stage: 3
},  async function (param, other, callback) {
  fetch() // 异步获取些东西
  console.log('3 hook', param, other);
  callback();
})

asyncSeriesHook.tapPromise({
  name: '2  hook',
  stage: 2
}, function (param, other, callback) {
  console.log('2 hook', param, other);
  callback();
})

// console.log(asyncSeriesHook.callAsync.toString());
asyncSeriesHook.promise(1111, 2222).then((res) => {
  console.log('ok', res);
}).catch(err => console.log('something wrong', err))






console.log('111')

function anonymous1(param1, param2
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

function anonymous2(param1, param2, _callback
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
function anonymous3(param1, param2
) {
  "use strict";
  var _context;
  var _x = this._x;
  return new Promise((function (_resolve, _reject) {
    var _sync = true;
    function _error(_err) {
      if (_sync)
        _resolve(Promise.resolve().then((function () { throw _err; })));
      else
        _reject(_err);
    };
    function _next3() {
      var _fn4 = _x[4];
      var _hasResult4 = false;
      var _promise4 = _fn4(param1, param2);
      if (!_promise4 || !_promise4.then)
        throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise4 + ')');
      _promise4.then((function (_result4) {
        _hasResult4 = true;
        _resolve();
      }), function (_err4) {
        if (_hasResult4) throw _err4;
        _error(_err4);
      });
    }
    function _next2() {
      var _fn3 = _x[3];
      _fn3(param1, param2, (function (_err3) {
        if (_err3) {
          _error(_err3);
        } else {
          _next3();
        }
      }));
    }
    function _next1() {
      var _fn2 = _x[2];
      var _hasResult2 = false;
      var _promise2 = _fn2(param1, param2);
      if (!_promise2 || !_promise2.then)
        throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise2 + ')');
      _promise2.then((function (_result2) {
        _hasResult2 = true;
        _next2();
      }), function (_err2) {
        if (_hasResult2) throw _err2;
        _error(_err2);
      });
    }
    function _next0() {
      var _fn1 = _x[1];
      _fn1(param1, param2, (function (_err1) {
        if (_err1) {
          _error(_err1);
        } else {
          _next1();
        }
      }));
    }
    var _fn0 = _x[0];
    _fn0(param1, param2, (function (_err0) {
      if (_err0) {
        _error(_err0);
      } else {
        _next0();
      }
    }));
    _sync = false;
  }));

}