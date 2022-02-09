##　最基础的镜像

```shell
FROM alpine:latest
Maintainer loksin
CMD echo "hi loksin"
```
docker run build

## 启动一个nginx镜像服务

```
FROM ubuntu
Maintainer stark
RUN apt-get update
RUN apt-get install -y install
COPY index.html /var/www/html
ENTRYPOINT ["usr/sbin/nginx", "-g", "daemon off;"]
EXPOSE 80
```

###　生成镜像
`docker build -t test2 .`

## 查看镜像
`docker ps`

## 启动镜像

相当于在test2中启动了nginx，访问端口为8080
`docker run -p 8080:80 -d test2`

## 停止镜像
`docker stop 4808c2d2304e`
## 访问镜像

`docker exec -it 6b21ba56ed5e sh`  // 通过这个命令，进去我们刚才的 nginx 容器
`cat /etc/issue` // 可以看是什么系统
