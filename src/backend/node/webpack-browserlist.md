---
title: webpack-browserlist
---

## 问题定位
最终定位到的是我在package.json里面写了browserslist
## 解决方法：
删除browserslist，或者在webpack.config.js里面添加
```js
module.exports = {
  target: process.env.NODE_ENV = "production" ? "browserslist" : "web"
}
```
这是webpack5的bug
[参考链接：browserslist 导致 webpack-dev-server 的自动刷新失效](https://segmentfault.com/q/1010000038165280)