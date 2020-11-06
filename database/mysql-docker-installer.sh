#/bin/sh

#Install Docker and mysql

echo "Updating packages"
sudo apt update

echo "Installing prerequisites"
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common 

echo "Adding key"
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

echo "Checking key"
sudo apt-key fingerprint 0EBFCD88

echo "Adding repository"
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

echo "Updating packages"
sudo apt update

echo "Installing docker"
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

echo "Adding current user to docker group"
sudo groupadd docker
sudo gpasswd -a $USER docker
newgrp docker

echo "Installing mysql/mysql-server:5.7 docker image"
docker pull mysql/mysql-server:5.7

echo "Creating instance"
docker run -p 3306:3306 --name mysql1 -d mysql/mysql-server:5.7


docker logs mysql1 >> mysql-docker.log
