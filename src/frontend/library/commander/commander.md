# commander.js

## 名词概念
1. 选项（options）：终端传递的以`-`或者`--`开头的参数。
2. 命令（command）：终端可以调用的命令，例如git add .中的add
3. 子命令(sub-command)：一个独立的文件，名称默认为`主命令文件名称-子命令名称`
4. 选项参数，命令参数：跟在选项或者命令之后的参数，<>表示必选，[]表示可选，终端没出现该选项名称或者命令名称时候，默认为undefined

例子
```
1. 
program.option("-s --search <value>", "搜索")
// 终端调用
node ./commander.js -s searchValue // -s为选项，searchValue为选项参数

2. 
program.command("clone <source> <destination>").action((source, destination) => {console.log(source, destination)})
// 终端调用
node ./commander.js clone placeA placeB // clone为命令，place和placeB为命令参数，source，destination对应placeA，placeB

3.
program.command("start <value>", "子命令start"); // command的第二个参数为描述且必须传，不传则该命令为上面的主命令
// 终端调用
node ./commander.js start clone placeA placeB // 会调用同级目录下面的commander-start.js文件的clone命令
```

## 用法
类似jquery，其实program就是一个Command实例，除了.command()会创建一个新的Command实例（会挂在调用了command方法的那个Command实例下面），其余方法其实返回的都是最近已经存在的Command实例
```
const { program } = require('commander'); // program是一个全局的Command实例

program.options("-s --search") // 返回全局Command实例
.command('commandA")  // 创建一个CommandA实例
.command('commandB")  // 在CommandA实例下面创建一个新的CommandB实例


program.command('commandC') //在全局Command下面创建一个新的CommandC实例
```

## Command实例方法
[具体见官方文档](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)
- option
- command
- action 参数为命令的所有参数，外加上解析出来的options和command实例
- version
- hook