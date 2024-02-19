---
title: 部署一套npm私有仓库
date: 2023-02-21 19:35:03
tags: 总结
---

## 实现思路

使用 [Verdaccio](!https://verdaccio.org/) 这个开源工具，通过 `npm` 全局安装后启动服务 或通过 `docker` 部署

## docker部署实现步骤

前置步骤：安装 docker

1. 拉取 Verdaccio 的 docker 镜像

```bash
docker pull verdaccio/verdaccio
```

2. 创建verdaccio文件夹
```bash
cd /workspace
mkdir verdaccio
cd verdaccio
# config.yaml和htpasswd存放在这里
mkdir conf 
# 存放包文件
mkdir storage 
cd conf
# 配置文件
touch config.yaml
# 账号及密码文件
touch htpasswd
```

3. 补充配置文件 config.yaml
- 文件中配置可 包存储，权限账号，下载代理方式，服务启动端口，日志等 
```

# path to a directory with all packages
storage: ../storage

auth:
  htpasswd:
    file: ./htpasswd
    # Maximum amount of users allowed to register, defaults to "+inf".
    # You can set this to -1 to disable registration.
    max_users: 100
    # max_users: -1

# a list of other known repositories we can talk to
uplinks:
  npmjs:
    url: https://registry.npm.taobao.org

packages:
  '@*/*':
    # scoped packages
    access: $authenticated
    publish: $authenticated
    proxy: npmjs

  '*':
    # allow all users (including non-authenticated users) to read and
    # publish all packages
    #
    # you can specify usernames/groupnames (depending on your auth plugin)
    # and three keywords: "$all", "$anonymous", "$authenticated"
    # access: $authenticated
    access: $all

    # allow all known users to publish packages
    # (anyone can register by default, remember?)
    publish: $authenticated

    # if package is not available locally, proxy requests to 'npmjs' registry
    proxy: npmjs

# log settings
logs:
  - {type: stdout, format: pretty, level: http}
  #- {type: file, path: sinopia.log, level: info}

listen:
  - 0.0.0.0:4873
```

4. 设置部署服务的文件夹权限，root权限下登录不需要设置
- chown [-cfhvR] [--help] [--version] user[:group] file...

  - chown : (change owner）命令用于设置文件所有者和文件关联组的命令。
  - -R : 处理指定目录以及其子目录下的所有文件
```
chown -R 0:0 /workspace/verdaccio
```

5. 启动镜像，做容器的文件映射和端口i映射
```
docker run --name verdaccio -d -v /workspace/verdaccio/conf:/verdaccio/conf  -v /workspace/verdaccio/storage:/verdaccio/storage  -p 4873:4873 verdaccio/verdaccio
```

6. 验证

- 访问服务 localhost:4873 （本机） 

- 将npm的源设置为 verdaccio 的服务
```
# 设置镜像源
npm set register localhost:4873
# 登录
npm login
# 推送包
npm publish
```