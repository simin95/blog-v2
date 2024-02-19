---
title: linux清理文件
date: 2023-02-28 13:35:03
tags: 总结
---

# 清理数据文件的方法

## 命令

linux [find](https://www.runoob.com/linux/linux-comm-find.html) 命令

```sh
find   path   -option   [   -print ]   [ -exec   -ok   command ]   {} \;
```

## 示例

### 列出文件
```sh
# 将当前目录及其子目录下所有最近 20 天内更新过的文件列出:
find . -ctime  20
```

### 按修改时间清理
```sh
# 查找 /var/log 下的一般文件，修改时间7天以前，并在删除之前询问它们：
find /var/log -type f -mtime +7 -ok rm {} \;
```

### 按创建时间清理
```sh
# 查找 /var/log 下的一般文件，创建时间7天以内，并在删除之前询问它们：
find /var/log -type f -ctime 7 -ok rm {} \;
```

### 按文件名
```sh
# 将当前目录及其子目录下所有文件后缀为 .c 的文件列出来:
find . -name "*.c"
```