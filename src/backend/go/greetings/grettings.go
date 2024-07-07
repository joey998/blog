/*
 * @Author: tedjmzhang tedjmzhang@tencent.com
 * @Date: 2024-07-06 15:18:55
 * @LastEditors: tedjmzhang tedjmzhang@tencent.com
 * @LastEditTime: 2024-07-06 16:17:31
 * @FilePath: /webpack-org/blog/src/backend/go/greetings/grettings.go
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
package greetings

import (
	"errors"
	"fmt"
	"math/rand"
)

func Hello(name string) (string, error) {
	if name == "" {
		return "", errors.New("empty name")
	}
	message := fmt.Sprintf(randomFormat(), name)
	// message := fmt.Sprint(randomFormat())
	return message, nil
}

func randomFormat() string {
	formats := []string{
		"HI, %v. Welcome",
		"Great to see you, %v!",
		"Hail, %v! Well met!",
	}
	return formats[rand.Intn(len(formats))]
}

func Hellos(names []string) (map[string]string, error) {
	messages := make(map[string]string)

	for _, name := range names {
		message, err := Hello(name)
		if err != nil {
			return nil, err
		}
		messages[name] = message
	}

	return messages, nil
}
