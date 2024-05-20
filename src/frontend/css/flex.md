---
title: flex
---

### 父元素container
```
.container {
  display: flex;
  flex-direction: row;
  align-items: center; //垂直居中
  space-between: center; //水平居中
}
```

### 子元素item
```
.item1 {
  align-self: center;
  flex: 2 0 100px;  //因为flex-shrink=0,说明是不缩小，但是可能会放大，所以此处100px指的是最小100px
}
.item2 {
  flex: 0 3 100px;  //因为flex-grow=0,说明是不放大，但是可能会缩小，所以此处100px指最大100px
}
.item3 {
  flex: 3 3 100px;  //这里 100px 屁用没有
}
```