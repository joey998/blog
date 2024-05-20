---
title: 搭建一个git服务器
---
1. 首先使用root登录，假设当前服务器ip为123.12.123.12
2. 新建一个gitpros用户，用来管理所有的代码仓
	```bash
	useradd -d /home/gitpros -m gitpros
	```
	**说明**：
	*username* ： linux创建用户命令
	 *-d [directory]* ： 指定用户主目录，这一步最好加上，会自动添加用户配置文件，如`.bashrc`等文件
	 *-m* ： 若上面指定的文件夹不存在，则自动创建
	 *gitpros* ： 要创建的用户名

	```
	passwd gitpros
	```
	**说明**：下面会让设置gitpros的密码，假设为gitpros

3. 切换到刚创建的gitpros用户（接下来不需要root用户），进入其主目录，创建一个文件夹projects来放所有项目
	```bash
	su gitpros
	cd /home/gitpros  或者直接 cd ~
	mkdir projects
	cd projects
	```
4. 新建一个git服务端代码仓，服务端代码仓一般只用来远程操作，不需要存放实际代码，所以一般会加上`--bare`参数，文件夹结尾一般为.git。
	```bash
	git init --bare firstDir.git
	```
	**至此服务端工作已经做完了，下面都是客户端所做工作**
	***
	
5. 使用git从一台客户端克隆远程仓库
	```bash
	git clone gitpros@123.12.123.12:/home/gitpros/firstDir.git
	```
	期间会让输入密码， 密码为服务端gitpros密码：gitpros
	
	后面就是基本的add， commit，pull，push的操作了

***tips：***
- 你可能还需要[git免密推送](https://blog.csdn.net/qq_34111969/article/details/107843003)
