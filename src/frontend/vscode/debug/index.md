# vscode调试

## typescript调试
更改tsconfig.json, 增加sourceMap: true, 可以指定一个输出文件文件夹，运行调试当前文件的配置，
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "outDir": "out",
    "sourceMap": true
  }
}
```

## vscode调试配置 .vscode/launch.json
```json
{
  "type": "node",
  "request": "launch",
  "name": "ts调试",
  "program": "${file}",
  "preLaunchTask": "tsc build to out", // 需要在.vscode里面新增label为tsc build to out的task
  "outFiles": ["${fileDirname}/out/**/*.js"]
}
```

## vscode任务 .vscode/task.json
可以配合task来做一些前置操作
```json
{
	"version": "2.0.0",
	"tasks": [
    {
      "type": "typescript",
      "tsconfig": "${relativeFileDirname}/tsconfig.json",
      "problemMatcher": [
        "$tsc"
      ],
      "group": "build",
      "label": "tsc build to out"
    }
  ]
}
```