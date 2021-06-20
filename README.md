# Planner App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run locally

Installs all the dependencies.

```shell
npm install
```

Runs the application locally.

```shell
npm start
```

Build the application to `.\build` directory.

```shell
npm run build
```

## Run using Docker

Build image from `Dockerfile` and apply appropriate version tag. The new image would get `latest` tag.

```shell
docker build -t plannerapp:<version> -t plannerapp:latest .
```

Create the container using latest image and map ports from `80` on container to `targetPort`.

```shell
docker run --name plannerapp -p <targetPort>:80 --rm plannerapp:latest
```

Create a container and map shell to terminal.

```shell
docker run --name plannerapp -p <targetPort>:80 --rm -it plannerapp:latest /bin/sh
```

Map shell to terminal of a running container.

```shell
docker exec -it plannerapp sh
```

Clone the image with Docker Registry Name.

```shell
docker tag plannerapp:latest <DockerRegistryName>/plannerapp:latest
```

Push the image to Docker Registry

```shell
docker push <DockerRegistryName>/plannerapp:latest
```

Get the logs from the container. Argument `-f` is used to follow the logs and would reflect updates from the container.

```shell
docker container logs -f plannerapp
```

## Kubernetes deployment

Create the Nginx Ingress Controller using Helm in a new namespace.

```shell
kubectl create namespace ingress-nginx

helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx

helm install ingress-nginx ingress-nginx/ingress-nginx -n ingress-nginx --set controller.replicaCount=2
```

Deploy the application which creates a deployment and a service. Uses a new namespace `plannerapp` for the deployment.

```shell
kubectl apply -f .\manifests\plannerapp.yaml -n plannerapp
```

Deploy the ingress rules on the new namespace `plannerapp` which uses the Nginx Ingress Controller previously deployed.

```shell
kubectl apply -f .\manifests\ingress.yaml -n plannerapp
```

Map running pod shell to the terminal. Use `kubectl get pods` to get the pod name.

```shell
kubectl exec --stdin --tty <pod-name> -n plannerapp  -- sh
```

Get the logs of the ingress controller for debugging server failures.

```shell
kubectl logs -n ingress-nginx <ingress-controller-pod>
```
