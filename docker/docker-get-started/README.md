# usage

[Get Started with Docker](https://docs.docker.com/get-started/)

__build__

```
docker build -t docker-get-started .
```

__run__

```
docker run -p 4000:80 --rm --name docker-get-started-app docker-get-started
docker run -p 4000:80 --rm --name docker-get-started-app juancarlosqr/docker-get-started:part2
```

__tag__

```
docker tag docker-get-started juancarlosqr/docker-get-started:part2
```

__push__

```
docker push juancarlosqr/docker-get-started:part2
```

__docker-compose__

```
docker-compose up -d
```

__stacks and services__

```
# STACK   = getstartedlab
# SERVICE = getstartedlab_web

# start up swarm
# A swarm is a group of machines that are running Docker and joined into a cluster
docker swarm init

# create stack
docker stack deploy -c docker-compose.yml getstartedlab

# list stacks
docker stack ls

# list services
docker service ls

# list services of a stack
docker stack services getstartedlab

# list all tasks of a stack (different services)
# A single container running in a service is called a task
docker stack ps getstartedlab

# list tasks of a specific service
docker service ps getstartedlab_web

# inspect a specific service
docker service inspect getstartedlab_web

# list logs of a specific service or task
docker service logs getstartedlab_web
docker service logs TASK_ID

# take down the service
docker stack rm getstartedlab

# take down the swarm
docker swarm leave --force
```
