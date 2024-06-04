# webpack 源码解析

## 带着问题看源码
1. 如何进行依赖收集，循环依赖如何处理
2. webpack将源码转换成ast是loader干的活，还是webpack内部干的
3. webpack如此多的hooks都放在了解析的哪一步
4. webpack的plugins有没有执行顺序，如果有的话，前后那个为准

## 开冲