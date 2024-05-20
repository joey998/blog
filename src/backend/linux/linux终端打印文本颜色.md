---
title: 终端打印文本的颜色
---

### 设置打印文本的颜色以及背景色，用来提示错误或者警告；
只需要在打印的字符串中添加"\033[**m"，\*\*代表颜色数字。
```bash
 console.log('\033[34m\033[47mno files to show! \n\033[47mfds\n')
```
具体看下面链接
[颜色参考链接（wiki需翻墙）]([https://zh.wikipedia.org/wiki/ANSI%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97#%E9%80%89%E6%8B%A9%E5%9B%BE%E5%BD%A2%E5%86%8D%E7%8E%B0%EF%BC%88SGR%EF%BC%89%E5%8F%82%E6%95%B0](https://zh.wikipedia.org/wiki/ANSI%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97#%E9%80%89%E6%8B%A9%E5%9B%BE%E5%BD%A2%E5%86%8D%E7%8E%B0%EF%BC%88SGR%EF%BC%89%E5%8F%82%E6%95%B0))
[https://zh.wikipedia.org/wiki/ANSI%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97#%E9%80%89%E6%8B%A9%E5%9B%BE%E5%BD%A2%E5%86%8D%E7%8E%B0%EF%BC%88SGR%EF%BC%89%E5%8F%82%E6%95%B0](https://zh.wikipedia.org/wiki/ANSI%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97#%E9%80%89%E6%8B%A9%E5%9B%BE%E5%BD%A2%E5%86%8D%E7%8E%B0%EF%BC%88SGR%EF%BC%89%E5%8F%82%E6%95%B0)
