# task

vscode支持任务，可以在launch里面添加

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