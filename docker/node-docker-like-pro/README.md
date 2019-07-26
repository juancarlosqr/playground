# Usage

## commands

__build__

```
docker build -t node-docker-like-pro .
docker build -t node-docker-like-pro:v1 .
docker build  --build-arg APP_DIR=var/app -t node-docker-like-pro:v1 .
```

__run__

```
docker run -d -p 5000:5000 --name node-docker-like-pro-app node-docker-like-pro
docker run -d -p 5000:5000 --name node-docker-like-pro-app node-docker-like-pro:v1
```

__start__

```
docker container start node-docker-like-pro-app
```

__stop__

```
docker container stop node-docker-like-pro-app
```

__delete__

```
docker container rm node-docker-like-pro-app
```

## resource

- https://blog.bitsrc.io/manage-your-node-app-using-docker-like-a-pro-6266f6516cf