---
title: eslint使用说明
---

## Eslint配置

主要是eslint有自己自带的规则，想要禁止或者开启可以在rules里面设置；   

同时可以增加插件，npm install之后要放配置在plugin属性里面，

增加了插件之后插件会有一些别人写好的规则组，选择一个或者几个写在extends里面，用来开启某一个插件的某些规则。   

自定义某插件的某一条规则，需要在rules里面设置，设置方式为“插件名称/规则”，例如下面的import插件的“no-unresolved”规则，写成”import/no-unresolved”。  

Setting里面写的是共享配置，
按照我的理解是vue插件如果也有一条规则叫做“no-unresolved”，本来要在rules里面写两个（“import/no-unresolved”,”vue/no-unresolved”）的。现在在settings里面只需要写”no-unresolved”一个就行了。（以上的settings只是理解，还未验证）(好像是自定义规则而时候才用到，相当于自定义规则可以访问的全局变量，未验证)

.eslintrc.* 多层级配置文件，会取父子的并集，重复的规则，已离文件最近的为准

.eslintignore 类似.gitignore，比它更加严格，使用参数--ignore-path 可以指定ignore文件，如eslint --ignore-path .gitignore file.js

```js
module.exports = {
  env: {
    browser: true,  //使用browser的规则
    node: true,   //使用node的默认规则
    es6: true,  //使用es6规则
  },
  "globals": {
    "Promise": "off",  //不能使用某变量，比如上面开启了es6，加了这个就不能使用Promise变量了
    //比如有时候在window定义了一个变量globalA, globalB, 在模块直接访问他们会报错，只能使用window.globalA, window.globalB
    "globalA": "readonly",  //只读不可写， 定义了之后可以直接在模块里面使用let a = globalA
    "globalB": "writable",  //可读可写， 定义了之后可以直接在模块里面使用let b = globalB; globalB = 12
  },
  parser: "vue-eslint-parser", //指定默认的分析器，一般不指定
  parserOptions: {
    sourceType: "module",
  },
  plugins: [
    "vue",    //全局rules使用vue/rule 改写
    "import",   //全局rules使用import/rule 改写
  ],
  extends: [ 
    //通过npm install eslint-plugin-*，插件名称可以省略 eslint-plugin- 前缀；可以开启多个
    //下面所有extend的规则会和下面的全局rules求并集，冲突的属性会以全局rules为准
    "airbnb-base",
    "plugin:vue/recommended",
    "eslint:recommended",
  ],
  rules: {
    //全局rules
    //"off" 或 0 - 关闭规则
    //"warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    //"error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    quotes: ["error", "double"],
    "import/no-unresolved": [1, { commonjs: true, amd: true }],
    "import/extensions": [1, "always", { js: "never", vue: "never" }], 
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
  },
  "overrides": [
    //匹配files属性的文件，会使用下面的子域rules，而不会使用上面的全局rules
    {
      "files": ["*-test.js","*.spec.js"],
      "rules": {//子域rules
        "no-unused-expressions": "off"
      }
    }
  ]
  // 下面是共享配置
  settings: {
    //自定义规则使用才用到
    "sharedData": "Hello",
    "import/resolver": {
      alias: {
        "@": "src/",
      },
    },
  },
};
```