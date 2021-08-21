#!/bin/bash
docker stop static
docker rm static -f
docker rmi static-config -f
