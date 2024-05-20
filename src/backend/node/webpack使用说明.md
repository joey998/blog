---
title: webpack使用说明
---

## publicPath和filename
首先明确一点  
webpack打包后的文件是没有../../以及多层父元素的，只有当前目录（./）和根目录（/）  
再明确一点  
插件里面可以定义filename（类似output.filename，可以指定存放目录）
Loader里面可以定义publicPath（用来定义某文件里面的根路径，替换文件里面的/或者./）

所以，对于使用了某插件以及某loader时候，首先会把文件存放在了filename定义的地方，
然后会用publicPath来替换掉文件中的各种路径（相对路径，绝对路径等等）。

所以对于设置了publicPath的loader资源，基本上是对不上的。需要我们手动调整打包之后的资源。

比如我们在output.publicPath里面添加了”/ddd/”，没有改变filename，
那么打包后的资源目录结构相对之前是没有变得，
但是，文件里面的资源引用是有问题的，基本上都加上了/ddd/(path)，
所以，要想正常运行，我们要在根目录新建一个/ddd/目录，然后然后将所以处理过的资源放到/ddd/目录下面

**总结：**
filename用来指定打包路径，会改变打包后的目录结构。
而publicPath用来改变文件的引用，不会改变打包后的目录结构，所以我们打包完成之后还要手动调整目录结构，以修正publicPath的影响。