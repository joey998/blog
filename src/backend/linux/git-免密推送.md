---
title: git免密推送
---

接上文 [linux建立git服务器](https://blog.csdn.net/qq_34111969/article/details/107835545)
下面做一下免密推送

全部是客户端操作
1. 查看公私钥，如果存在，一般在`~/.ssh`目录下面（id_rsa，id_rsa_pub），若不存在，创建之
	```bash
	ssh-keygen
	```
2. 上传公钥到服务器
	```bash
	ssh-copy-id -i ~/.ssh/id_rsa.pub gitpros@123.12.123.12
	```
	**说明：**
	上面命令其实就是写到服务器的gitpros用户主目录下的`.ssh/authorized_keys`，多个用户可以自动追加到该文件下面，不会覆盖原来用户的公钥

3. 测试免密登录
	```bash
	ssh gitpros@123.12.123.12
	```
***
**A&Q:**
1. ***免密未成功？***
	一般是服务端的`.ssh`，`.ssh/authorized_keys` 权限有问题
	去服务端使用gitpros账户输入
	```bash
	chmod 755 ~/.ssh
	chmod 644 ~/.ssh/authorized_keys
	```
