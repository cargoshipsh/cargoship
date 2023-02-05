# Hostr Installation Script
# This installs Docker if necessary and installs the hostr server application

################
# BASIC CHECKS #
################

# Check if bash
[ ! -n "$BASH_VERSION" ] && echo "You can only run this script with bash, not sh / dash." && exit 1

# Check if user is root
if [ $WHO != 'root' ]; then
    echo 'You must run this script as root. Use: sudo bash ./install.sh'
    exit 1
fi

#################################
# INSTALL DOCKER (IF NECESSARY) #
#################################

configureDocker() {
    mkdir -p /etc/docker/ /var/snap/docker/current/config/
    mkdir -p /etc/docker/ /var/snap/docker/current/config/
    cat <<EOF | tee /etc/docker/daemon.json  /var/snap/docker/current/config/daemon.json > /dev/null
{
    "log-driver": "json-file",
    "log-opts": {
      "max-size": "100m",
      "max-file": "5"
    },
    "features": {
        "buildkit": true
    },
    "live-restore": true,
    "default-address-pools" : [
    {
      "base" : "172.17.0.0/12",
      "size" : 20
    },
    {
      "base" : "192.168.0.0/16",
      "size" : 24
    }
  ]
}
EOF
}

restartDocker() {
   # Restarting docker daemon
   sudo systemctl daemon-reload
   sudo systemctl restart docker
}

echo "Checking Docker Installation"

# Install Docker Engine if necessary
if [ -f "/etc/docker/daemon.json" ] || [ -f "/var/snap/docker/current/config/daemon.json" ]; then
    while true; do
        read -p "Docker is already configured. Need to overwrite config. Continue? [y/n] " yn
        case $yn in
        [Yy]*)
            configureDocker
            restartDocker
            break
            ;;
        [Nn]*)
            echo "Setting a new docker configuration is required. Abort."
            exit 1
            ;;
        *) echo "Please answer y or n." ;;
        esac
        done
else
    echo "Installing Docker"
    configureDocker
    restartDocker
fi

echo "Checking Docker Installation"

# Install Docker compose if necessary
if [ ! -x ~/.docker/cli-plugins/docker-compose ]; then
    echo "Installing Docker Compose CLI."
    if [ ! -d ~/.docker/cli-plugins/ ]; then
        sudo mkdir -p ~/.docker/cli-plugins/
    fi
    if [ ARCH == 'aarch64' ]; then
        sudo curl --silent -SL https://cdn.coollabs.io/bin/linux/aarch64/docker-compose-linux-2.6.1 -o ~/.docker/cli-plugins/docker-compose
        sudo chmod +x ~/.docker/cli-plugins/docker-compose
    fi
    if [ ARCH == 'amd64' ]; then 
        sudo curl --silent -SL https://cdn.coollabs.io/bin/linux/amd64/docker-compose-linux-2.6.1 -o ~/.docker/cli-plugins/docker-compose
        sudo chmod +x ~/.docker/cli-plugins/docker-compose
    fi
    if [ ARCH == 'arm64' ]; then
        sudo curl --silent -SL https://cdn.coollabs.io/bin/linux/arm64/docker-compose-linux-2.6.1 -o ~/.docker/cli-plugins/docker-compose
        sudo chmod +x ~/.docker/cli-plugins/docker-compose
    fi
fi

####################
# INSTALLING HOSTR #
####################

if [ ! -d ~/hostr ]; then
    mkdir ~/hostr
fi

echo "Pulling latest hostr image."
sudo docker pull -q docker pull ghcr.io/stackocean-official/hostr:main > /dev/null
echo "Starting hostr."
cd ~/hostr && sudo docker run -tid -v /var/run/docker.sock:/var/run/docker.sock -v hostr ghcr.io/stackocean-official/hostr:main /bin/sh -c "env | grep HOSTR > .env && docker compose up -d --force-recreate" > /dev/null

echo -e "Successfully installed hostr. You are ready to go!"
echo "Visit http://$(curl -4s https://ifconfig.io):3000 to get started."
echo "(It can take a minute or two until it's fully up and running)"