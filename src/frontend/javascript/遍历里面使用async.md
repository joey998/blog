---
title: 遍历里面使用async
---

### 需求：我想要在一个遍历里面执行多个异步操作，需要等上一个异步操作完了，再去执行下一个异步；

1. 直接使用了forEach
	```js
	function cc(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(12)
          resolve()
        }, 2000);
      })
    } 

    [1,2,3,4].forEach(async item => {
      console.log(item)
      await cc()
      console.log('end')
    })
	```
	**结果：** 一开始就输入`1，2，3，4`，2秒后输出四个`12 和 ‘end’`
	**分析：** 与要求不符合，使用map或者reduce也是一样的

2.  使用for of
	```js
	function cc(){
	      return new Promise((resolve, reject) => {
	        setTimeout(() => {
	          console.log(12)
	          resolve()
	        }, 2000);
	      })
	    } 
	
	    (async function (){
	      for (let item of [1,2,3,4]) {
	        console.log(item)
	        await cc()
	      }
	    })()
	```
	**结果：** 首先输出了`1`，待两秒之后输出`12 和 2`，在两秒输出`12 和 3`，在两秒输出`12 和 4`，在两秒输出`12`
	**分析：** 满足需求
3. 自己写了个同步方法，参数需要return 一个promise对象
	```js
	Array.prototype.asyncForEach = async function(callback){
      let len = this.length
      for (let i = 0; i < len; i++) {
        console.log('one for start', i);
        console.log('before======')
        await callback()
        console.log('after=====')
        console.log('one for end', i);
      }
    }
    
    mm = [1,2,3,4]  //mm首先需要声明，不能够直接[1,2,3,4].asyncForEach，我也不知道为啥
    mm.asyncForEach((item, index) => {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('2s passed')
        }, 2000);
      })
      return promise
    })
	```