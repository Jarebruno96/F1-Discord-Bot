CONTAINER_NAME=f1-myslq

echo "Installing mysql/mysql-server:5.7 docker image"
docker pull mysql/mysql-server:5.7

echo "Creating container"
docker create  -p 3306:3306 --name $CONTAINER_NAME --restart unless-stopped -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql/mysql-server:5.7

echo "Copying file into volumen"
docker cp schema.sql $CONTAINER_NAME:/docker-entrypoint-initdb.d/

echo "Starting ${CONTAINER_NAME} container"
docker start $CONTAINER_NAME

echo "Saving logs into ${CONTAINER_NAME}-docker.log"
docker logs $CONTAINER_NAME >> $CONTAINER_NAME-docker.log