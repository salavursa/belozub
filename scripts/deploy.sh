#!/bin/bash

#update git
cd /var/www/belozub
git pull
git status

#install & build
npm install
npm build

#deploy
pm2 stop belozub
pm2 delete belozub
pm2 start npm --name belozub -- start
