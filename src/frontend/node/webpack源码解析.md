# webpack使用说明
总结： 没啥看的，罗里吧嗦的

## 使用到的三方库
1. schema-utils 用来验证webpack.config.json是否符合格式的，可以通过webpack.validate(scheme, options, config)来验证
2. tapable 用来管理hooks


## 流程
1. 获取webpack配置并验证
2. 生成Compiler实例，并遍历options.plugins添加plugin。
该实例里面通过this.hooks定义了各个阶段的hook。     
每一个不同的this.hooks[name]表示Compiler的不同生命周期，每个生命周期都对应一个tapable的Hook实例。
插件通过this.hooks[name].(tap|tapAsync)来将需要执行的函数放入不同生命周期的Hook实例的taps属性之中，     
在Compiler不同的生命周期（比如生成了assert之后），通过主动调用this.hooks[name].(call|callAsync)来执行taps里面的函数。