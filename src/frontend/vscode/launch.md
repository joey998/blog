# 调试.vscode -> launch.json

```json
{
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "name": "当前文件调试",
      "request": "launch",
      "program": "${file}",
      "args": ["prop", "type", "conditional", "comment"],  // 启动文件时候附带的参数
    },

    {
      "type": "node",
      "name": "node-tmskit调试",
      "request": "launch",
      "cwd": "${workspaceFolder}/miniprogram/programs/sinan", // 运行目录
      "program": "../../../tools/tmskit/src/index.js", // 程序
      "args": ["run", "dev"]  // 启动文件时候附带的参数
    },

    {
      "type": "node-terminal",
      "name": "node-terminal-tmskit调试",
      "request": "launch",
      "cwd": "${workspaceFolder}/miniprogram/programs/sinan",
      "command": "node ../../../tools/tmskit/src/index.js run dev", // 直接类似终端执行
    }
  ]
}
```