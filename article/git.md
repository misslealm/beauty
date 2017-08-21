---
createTime: 2016/09/10 12:34:25
title:Array的用法
description:简单介绍了Array平时常用的一些方法
---

### 简介

* Git是一个分布式版本控制软件, 2005年发布
* 之前的版本管理工具: CVS、Subversion、SVN
* 通过Git进行版本控制的软件源代码托管服务的主流网站有: Github、Gitlab、Bitbucket
* 国产代码托管平台: [码云](https://git.oschina.net/)、[Coding](https://coding.net/)
* Git工具: 命令行、编辑器集成、Github客户端、Bitbucket客户端(SourceTree)


### 概念

* Workspace 工作区
* Stage 暂存区
* Repository 本地仓库
* Remote 远程仓库

![关系图](http://oloqdvms7.bkt.clouddn.com/git.png)


# Git常用命令

## 安装和配置

* git help：git子命令和核心概念一览表
  * git help [subcommand]：查看指定git子命令的简介
* git config
  * git config --list 查看git配置列表
  * git config -e [--global] 查看编辑git配置文件
  * git config user.name "YOUR_NAME" 查看/设置用户名(当前项目)
  * git config user.email "YOUR_EMAIL" 查看/设置用户邮箱(当前项目)
  * git config --global user.name "YOUR_NAME" 查看/设置用户名(全局)
  * git config --global user.email "YOUR_EMAIL" 查看/设置用户邮箱(全局)

* vim ~/.gitconfig：git配置文件

## 拉取项目

* git clone [url]

## 文件操作

* git add：添加文件或文件夹
  * git add .
  * git add [file1] [file2]
  * git add [dir1] [dir2]
* git rm：删除文件或文件夹
  * git rm .
  * git rm [file1] [file2]
  * git rm --cached [file1] [file2] 从版本控制中移除但保留文件
* git mv：重命名
  * git mv [file1] [file2]

## 提交代码

* git commit：提交指定文件或目录到本地仓库
  * git commit -m '注释'
  * git commit [file] [folder] -m '注释'
  * git commit -am '注释'：提交工作区自上次commit之后的变化，直接到仓库区
  * git commit --amend -m [message]：使用一次新的commit，替代上一次提交

# 撤销

* git checkout
  * git checkout .
  * git checkout [file1] [file2]
  * git checkout [commit_id] [file]
* git reset
  * git reset [file1] [file2]
  * git reset --hard
  * git reset [commit_id]
  * git reset --hard [commit_id]

# Stash

* git stash
  * git stash
  * git stash list
  * git stash pop
  * git stash drop

# 查看信息

* git status
* git diff
  * git diff：显示工作区和工作区的差异
  * git diff [file]：查看指定文件改动的地方(工作区与本地仓库文件内容的对比)
* git log
  * git log：显示commit历史
  * git log --stat：显示commit历史，以及每次commit发生变更的文件
  * git log -p [files]：显示指定文件的每次commit的diff
  * git log -[number] --pretty --oneline：显示最近number次的log
* git show
  * git show [commit_id]：显示指定commit_id的diff
  * git show [commit_id] [file]：显示指定commit_id下指定文件的diff

## 分支

* git branch
  * git branch：显示本地分支列表
  * git branch -r：显示远程分支列表
  * git branch -a：显示本地分支列表+远程分支列表
  * git branch [branch_name]：新建分支，不切换分支
  * git branch [branch_name] [commit_id]：新建分支，并指向指定commit_id
  * git branch -d [branch_name]：删除分支
* git checkout
  * git checkout [branch_name]：切换分支
  * git checkout -b [branch_name]：新建分支，并切换到该分支
  * git checkout -：切换到上一次所在分支
* git cherry-pick
  * git cherry-pick [commit_id]：将其他分支的commit提交到当前分支
* git merge
  * git merge [branch_name]：合并指定分支到当前分支


## 远程同步

* git pull
  * git pull [remote] [branch_name]：拉取远程仓库的指定分支的代码与当前分支合并
* git push
  * git push origin [branch_name]：提交当前分支与远程指定分支合并
  * git push origin :[branch_name]：删除远程分支

> 远程仓库（即`remote`）名一般就是 `origin`

# Git作业

* git clone git@git.lianjia.com:lianjia-fe/guide.git
* mkdir YOUR_NAME && cd YOUR_NAME
* 在个人目录下创建一些文件夹和文件
* git add [file or folder]
* git commit -m '写点注释'
* git log：查看提交commit的信息
* 继续删除或者修改些文件或目录
* git commit -m '再写点注释'
* git log
* 执行命令 `history` 并将显示的内容(与本次git相关的操作的记录)写入到文件 `YOUR_NAME/GitLog.txt` 里面
* ...
* git pull origin master
* git push origin master
* [查看是否提交成功](http://git.lianjia.com/lianjia-fe/guide/commits/master)

> 文件(图片除外)操作请尽量使用linux命令

# 参考资料

* [Git Pro](https://git-scm.com/book/zh/v2)
* [Git 常用命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)