# tmskit使用说明
总结： 没啥看的，罗里吧嗦的

## 使用到的三方库
REPL: node自带的用户输入-求职-打印-循环工具
1. commander: 工具生成工具，可定义工具支持的命令，选项，以及自动生成帮助文档
2. semver: 标准版本号检测以及对比工具
3. inquirer: 命令行交互工具，获取用户交互值
4. shelljs: 执行shell命令, 使用类似原生child_process.exec()
5. unzip: 解压包，类似原生zlib
6. Metalsmith: 生成静态网站的，但是试半天没试成功
7. ora: 命令行转圈的


命令：
run 
前置流程
获取配置信息，合并tms.config.js 以及 tms.private.config.js配置
获取递归获取每个模块的依赖配置

dev:
使用chokdir库监听每一个modules下面的文件，然后复制文件到sinan/dist下面





