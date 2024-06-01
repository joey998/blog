# gogocode

> 解析源码字符串为ast，然后对其操作
let ast = gogocode(string) // 生成gogoCode的ast实例

## 实例方法: 全部返回的都是gogocode实例，只不过他们的match不一样而已，返回值是一个对象，但是有each方法，返回匹配的多个值，直接调用match只会返回匹配的第一个值（改值是一个对象，对象的key是$_$name里面的name)
- find: 匹配某格式文本，并且将其命名，ast.find('const $_$key = $_$value'), 可以使用.match或者(.each(item,index => item.match)index为1是表示第一个)获取第一个匹配的，如果有多个匹配，只能.each(item => item.match)

- replaceBy: find之后直接替换

- replace: 找到并替换 ast.replace('const a = $_$value', 'const b = $_$value')

- append, prepend: 给一个节点的尾部,首部添加node

- after, before: 在一个节点之后,之前添加node

- remove: 移除某个节点



