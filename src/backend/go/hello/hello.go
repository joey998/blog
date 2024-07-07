/*
 * @Author: tedjmzhang tedjmzhang@tencent.com
 * @Date: 2024-07-06 00:09:37
 * @LastEditors: tedjmzhang tedjmzhang@tencent.com
 * @LastEditTime: 2024-07-06 16:03:21
 * @FilePath: /webpack-org/blog/src/backend/go/hello/hello.go
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
package main

import (
	"fmt"
	"log"

	"example.com/greetings"
)

func main() {
	log.SetPrefix("greetings: ")
	log.SetFlags(0)

	names := []string{"Gladys", "Samantha", "Darrin"}
	messages, err := greetings.Hellos(names)
	if err != nil {
		log.Fatal((err))
	}
	fmt.Println(messages)
}
