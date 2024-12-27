### Build docker image
```shell
docker build -t ghcr.io/viliusvv/http-sink:latest .
````

### Push image
```shell
docker push ghcr.io/viliusvv/http-sink:latest
```

### Run
```shell
docker run --rm -p 8888:8888 ghcr.io/viliusvv/http-sink:latest
```