### Build docker image
```shell
docker build -t http-sink .
````
### Run
```shell
docker run --rm -p 8888:8888 http-sink
```