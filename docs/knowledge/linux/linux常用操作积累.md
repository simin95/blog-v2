
## 文件操作
vim cat


## 文件压缩/解压缩


## 远程文件传输
### 使用工具 `lrzsz` 
    lrzsz 是 Linux/Unix同Windows进行ZModem文件传输的命令行工具。
1. 安装
```sh
# For CentOS/RHEL
yum -y install lrzsz

# For Ubuntu
sudo apt-get install lrzsz
```

2. 上传命令，可通过将文件拖到到Xshell窗口代替输入命令
```sh
 rz
```

3. 下载
```sh
## 下载一个文件： 
 sz filename 
## 下载多个文件： 
 sz filename1 filename2
## 下载dir目录下的所有文件，不包含dir下的文件夹： 
 sz dir/*
```

## 查看及清理空间

```sh
# 列出本机存储情况
df -h

```

## 开放端口

## 防火墙设置

## 