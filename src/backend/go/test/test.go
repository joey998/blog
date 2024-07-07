/*
 * @Author: tedjmzhang tedjmzhang@tencent.com
 * @Date: 2024-07-06 17:12:13
 * @LastEditors: tedjmzhang tedjmzhang@tencent.com
 * @LastEditTime: 2024-07-06 17:12:40
 * @FilePath: /webpack-org/blog/src/backend/go/test/test.go
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
package main

import "fmt"

func main() {
	i, j := 42, 2701

	p := &i         // 指向 i
	fmt.Println(*p) // 通过指针读取 i 的值
	*p = 21         // 通过指针设置 i 的值
	fmt.Println(i)  // 查看 i 的值

	p = &j         // 指向 j
	*p = *p / 37   // 通过指针对 j 进行除法运算
	fmt.Println(j) // 查看 j 的值