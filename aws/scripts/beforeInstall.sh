#!/bin/bash

DIR=/home/ec2-user/api

if [ -d $DIR ]; then
    sudo rm -rf $DIR
fi
sudo mkdir -vp $DIR
