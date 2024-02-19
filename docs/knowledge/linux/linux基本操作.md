---
title: linux基本操作
date: 2018-12-28 13:35:03
tags: 总结
---

最近买了阿里云的云主机，装的是 Ubuntu 16.04 系统，是想用来跑node服务和熟悉linux系统操作的，现在把一些常用操作记录下来

1. screen 命令
   
   要在远程主机跑服务，不受远程主机会话断开连接的影响，要用screen命令开一个新窗口来执行命令
   如： `screen node index.js`，`screen npm run dev`

  使用 `screen -ls` 来查看 所有的screen

  使用 `screen -r screenID`来进入某个screen，screenID一般为5位数字

  在screen中输入 `exit` 来关闭这个screen里的进程

  或者：使用 `screen -S screenID -X quit` 来直接退出某个screen

2. 安装node环境（得安装较高版本的 >8.9.0，否则安装依赖时出问题）

3. 