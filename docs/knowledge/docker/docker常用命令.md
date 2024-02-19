---
title: docker常用命令
date: 2020-01-10 12:30:00
tags: 总结
---

- 查看容器列表

    `docker ps`  
    `docker start 容器ID`  
    `docker run 容器ID`  
    `docker stop 容器ID`  
    `docker rm 容器ID`  

- 查看镜像列表

    `docker images`  
    `docker rmi 镜像ID` 

- 进入容器

    `docker exec -it 容器ID bash`

- 运行 docker-compose.yml 配置文件，并启动容器

    `docker-compose -f 文件名 up -d`