---
title: docker 部署前端工程
date: 2020-01-10 12:30:00
tags: 总结
---

## 简单思路是把nginx直接当作文件服务器来用
1. 在本地打包出前端工程的静态文件
``` js
    yarn build
```
在根目录下将生成 dist 文件夹

2. 编写 Dockerfile 使用nginx 构建镜像，把静态文件拷贝到nginx的静态文件服务文件夹里  
- Dockerfile 示例：
``` Dockerfile
    # 设置基础镜像
    FROM nginx
    # 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
    COPY dist/  /usr/share/nginx/html/
```

- 构建镜像
``` 
    # -t 是给镜像取名。
    # 最后有一个点 “.”，表示使用当前路径下的 dockerfile 文件，也可以指定使用其它路径的。
    docker build -t demo .
```

3. 启动容器即可，按照暴露出的端口访问
- 启动容器
``` 
    # -p ：配置端口映射，格式是：外部访问端口：容器内端口
    # -d ：后台运行  
    # --name : 给容器取名
    # 最后有 2 个 名字,前面一个是给容器取的名字，后面一个是使用的镜像的名字
    docker run -p 3000:80 -d --name gentle-vue gentle-vue
```

可通过 `docker images` 查看所有镜像，通过 `docker ps` 查看正在运行的容器  
通过 ip:3000 来访问



## 改进方向是：
1. 自动打包静态文件，工程依赖不进入容器
2. 推送代码自动部署