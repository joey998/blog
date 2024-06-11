# json-scheme json语义化语法
[官方介绍文档链接](https://json-schema.org/learn/getting-started-step-by-step)

[实现库](https://json-schema.org/implementations#validators-javascript)有很多，比如ajv

## 总结
1. 必须在type定义类型，以下为所有可用类型   
string
number
integer
object
array
boolean
null

2. 对于每一类型，都有对应的扩展属性。   
比如{type: "string"},可以加上pattern或者format或者minLength来额外定义string。   
{type: "number"},可以加Multiples来定义基础倍数      
{type: "object"},可以加properties定义属性，以及additionalProperties表示是否可冗余属性

3. 通用属性   
注释 $comment      
枚举 "enum": ["red", "amber", "green"]    
常量 "const": "United States of America"