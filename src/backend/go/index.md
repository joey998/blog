# go

- 流程大概
  1. 使用`go mod init example/hello`创建module,命令会创建一个go.mod文件，文件包含包module名称
  ``` go
  // go.mod
  module example/hello

  go 1.20
  ```

  2. 编写`hello.go`文件，`go run .`会执行该目录下面的所有文件的package为main的函数
  ```
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

  ```

  3. 编写另外一个module，名为`example.com/greetings`,操作如上，该module有Hello和Hellos两个方法（方法首字母大写表示可由其他module调用，否则只能自己内部调用）

  4. 使用`go mod edit -replace example.com/greetings=../greetings`命令替换使用本地模块，不然会去pkg.go.dev下载远程已经发布的模块。运行完成之后hello/go.mod会改变
  ```
  // +++
  replace example.com/greetings => ../greetings
  ```

  5. 执行`go mod tidy`，会自动整理代码里面所有依赖，反应到go.mod文件中
  ```
  // +++
  require example.com/greetings v0.0.0-00010101000000-000000000000
  ```

  6. 执行`go run .`会执行该main方法

  7. 执行`go build`会在当前目录生成hello的二进制文件，可通过命令行`./hello`运行代码

  8. 执行`go install`会将hello文件生成到由`go list -f '\{\{.Target\}\}'`返回的目录之中，通过将该目录暴露到PATH，可以在全局直接`hello`执行该二进制程序

- 一些语法知识
  1. message := fmt.Sprintf("Hi, %v. Welcome!", name)   
  表示缩写，意思同以下      
  var message string      
  message = fmt.Sprintf("Hi, %v. Welcome!", name)
  2. messages, err := greetings.Hellos(names)   
  表示greetings.Hellos函数返回两个值，一个值为message，一个为err
  3. names := []string{"Gladys", "Samantha", "Darrin"}      
  表示names为一个slice（类似js的数组），有三个值，都是为string
  4. messages := make(map[string]int)      
  表示messages为一个map（类似js的map）map的key为string和value为int，通过messages[key] = value来添加
  5. for _, name := range names {...}     
  表示一个for循环，range返回两个值，index和item，如果不需要使用index，则可以使用_来优化代码

- 测试 go test    
  会执行该目录下，以_test.go结尾的程序。