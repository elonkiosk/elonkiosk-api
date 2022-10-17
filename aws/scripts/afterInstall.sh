#!/bin/bash

# Setup Node and PM2
cd /home/ec2-user/api

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export HOME="/home/ec2-user/"
export PM2_HOME="/home/ec2-user/.pm2"

# Restart application
pm2 stop all && pm2 delete all

source /home/ec2-user/api/prod.env
pm2 start /home/ec2-user/api/dist/main.js --name elonkiosk
