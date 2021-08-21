#!/bin/bash

# assume contianer name: static
# assume only want latest image: static-config
# port for build is 80

docker stop static
docker rm static -f
docker rmi static-config -f
docker build -t static-config .

# docker run --name static -d -p 80:80 static-config