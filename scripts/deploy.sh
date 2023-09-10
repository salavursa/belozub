#!/bin/bash

#this file obtained permission from git via
#

#update git
cd /var/www/belozub
git pull
git status

#install & build
npm install --force
npm run build

#deploy
pm2 stop belozub
pm2 delete belozub
pm2 start npm --name belozub -- start
