echo "Installing mysql/mysql-server:5.7 docker image"
docker pull mysql/mysql-server:5.7

echo "Creating instance"
docker run -p 3306:3306 --name mysql1 -d --restart unless-stopped -e MYSQL_ROOT_PASSWORD=1234 mysql/mysql-server:5.7

docker logs mysql1 >> mysql-docker.log