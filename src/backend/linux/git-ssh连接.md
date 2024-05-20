---
title：git的ssh连接方式
---

1. 在服务端使用`git init --bare bareDirectory`,或者新建一个`bareDirectory`,然后`cd`进去输入`git init --bare`		
	**note**：这里面需要使用到`--bare`参数,否则当在客户端提交时，客户端会报错
	```
	remote: error: refusing to update checked out branch: refs/heads/master
	remote: error: By default, updating the current branch in a non-bare repository
	remote: error: is denied, because it will make the index and work tree inconsistent
	remote: error: with what you pushed, and will require 'git reset --hard' to match
	remote: error: the work tree to HEAD.
	remote: error:
	remote: error: You can set 'receive.denyCurrentBranch' configuration variable to
	remote: error: 'ignore' or 'warn' in the remote repository to allow pushing into
	remote: error: its current branch; however, this is not recommended unless you
	remote: error: arranged to update its work tree to match what you pushed in some
	remote: error: other way.
	remote: error:
	remote: error: To squelch this message and still keep the default behaviour, set
	remote: error: 'receive.denyCurrentBranch' configuration variable to 'refuse'.
	To 121.42.12.48:/home/git/project/testDirectory/
	```
	**上面也提到了可以通过在服务端`git config receive.denyCurrentBranch  ignore`来解决，但是不推荐**
	
2. 服务端克隆仓库
	```
	git clone git@123.12.123.12:/home/git/bareDirectory
	git clone ssh://git@123.12.123.12:2222/home/git/bareDirectory
	# ssh链接方式为   
	1， 用户名@IP地址:文件夹绝对路径 （此种方法默认是22端口，：后面的为绝对路径）
	2， ssh://用户名@IP地址:端口号+绝对路径 
	```