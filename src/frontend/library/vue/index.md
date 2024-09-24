# vue源码解析

- compiler-core   
将template渲染成函数，平台无关的解析，比如不能解析指令
```
let compilerCore = require('@vue/compiler-core/dist/compiler-core.cjs.js')
let res = compilerCore.baseCompile('<div @click="click1" v-show="show">{{message}}</div>');
// 下面是res.code返回的值
"const _Vue = Vue\n\nreturn function render(_ctx, _cache) {\n  with (_ctx) {\n    const { toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = _Vue\n\n    return (_openBlock(), _createElementBlock(\"div\", { onClick: click1 }, [\n      _createTextVNode(_toDisplayString(message), 1 /* TEXT */)\n    ], 8 /* PROPS */, [\"onClick\"]))\n  }\n}"
```

- compiler-dom    
也是将template渲染成函数，区别是加上了浏览器端特定的一些解析，比如可以解析指令
```
let compilerDom = require('@vue/compiler-dom/dist/compiler-dom.cjs.js')
let res = compilerDom.compile('<div @click="click1" v-show="show">{{message}}</div>');
// 下面是res.code返回的值
"const _Vue = Vue\n\nreturn function render(_ctx, _cache) {\n  with (_ctx) {\n    const { toDisplayString: _toDisplayString, vShow: _vShow, withDirectives: _withDirectives, openBlock: _openBlock, createElementBlock: _createElementBlock } = _Vue\n\n    return _withDirectives((_openBlock(), _createElementBlock(\"div\", { onClick: click1 }, _toDisplayString(message), 9 /* TEXT, PROPS */, [\"onClick\"])), [\n      [_vShow, show]\n    ])\n  }\n}"
```

- compiler-sfc    
用来编译vue-sfc（single-file-component）的，一般是给打包工具使用，比如webpack的vue-loader使用到了

- compiler-ssr    
服务端渲染时候用到，（有时间看一下，应该不只是编译template，还需要传递data进去）
```
let compilerSSr = require('@vue/compiler-ssr/dist/compiler-ssr.cjs.js')
let res = compilerSSr.compile('<div @click="click1" v-show="show">{{message}}</div>');
"const { mergeProps: _mergeProps } = require(\"vue\")\nconst { ssrRenderAttrs: _ssrRenderAttrs, ssrInterpolate: _ssrInterpolate } = require(\"vue/server-renderer\")\n\nreturn function ssrRender(_ctx, _push, _parent, _attrs) {\n  _push(`<div${\n    _ssrRenderAttrs(_mergeProps({\n      style: (_ctx.show) ? null : { display: \"none\" }\n    }, _attrs))\n  }>${\n    _ssrInterpolate(_ctx.message)\n  }</div>`)\n}"
```

- reactivity      
响应式的库，包含了reactive，RefImpl的是类，有时间再看

- runtime-core    
定义创建VNode方法，包含h函数。
diff VNode。
生成renderer（renderer作用：根据VNode，调用增删改查API进行渲染）

- runtime-dom   
提供web渲染的增删改查API