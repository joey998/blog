# schema-utils

模块的validate是一个函数，接受3个参数，第一个为定义好的scheme，第二个参数为待验证的scheme，
第三个参数用来配置validate函数，仅支持3个属性（name: 定义名称，baseDataPath：？定义option位置？，postFormatter：格式化错误输出）

``` javascript
import schema from "./path/to/schema.json";
import { validate } from "schema-utils";

const options = { foo: "bar" };

validate(schema, { name: 123 }, { name: "MyPlugin" });
```