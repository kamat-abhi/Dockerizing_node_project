clean up the whole system and delete rvery image container etc;
```
docker system prune -a
```

Build a dockerfile and create an image 
(execute the below command either from the directory where dockerfile is present, or replace . with path to dockerfile)
```
docker build -t <tag-name> .
```

Run a container from an image
```
docker run -it --init -p <host_port>:<container_port> <image_name>
```

Create a pileline between container and local
```
docker run -it --init -p 3002:3000 -v"$(pwd)":<path of the project inside your container> <image-name>
```
