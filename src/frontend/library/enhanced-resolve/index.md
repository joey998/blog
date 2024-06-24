# enhanced-resolve 获取绝对路径，用来处理模块引用的
[通过可以设置各种配置，例如别名，根路径等](https://www.npmjs.com/package/enhanced-resolve)

```
// webpack使用该库处理成xxx/node_modules/moduleA/xxx, 后面的xxx是该库的package.json里面的main定义的
import moduleA from 'moduleA'  

// 处理相对路径 xxx/moduleB/xxx.[ext]
import moduleB from './moduleB'



```

