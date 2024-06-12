# browserlist 打了一系列标签来给出环境范围

## 使用方式
- jsApi方式
```javascript
const browserslist = require('browserslist');

let res = browserslist("> 1%, not dead");
console.log('res', res);
```

- cli方式 `browserslist --coverage "> 1%"`

- package.json
```
{
  "private": true,
  "dependencies": {
    "autoprefixer": "^6.5.4"
  },
  "browserslist": [
    "last 1 version",
    "> 1%",
    "not dead"
  ]
}
```

- .browserslistrc
```
# Browsers that we support

last 1 version
> 1%
not dead # no browsers without security updates
```