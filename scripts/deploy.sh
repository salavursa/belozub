#!/bin/bash

# this file obtained permission from git via
# https://gist.github.com/oelbaga/5019647715e68815c602ff05cff2416e#file-ubuntu-nextjs-nginx-config-file

#update git
cd /var/www/belozub
git reset --hard
git pull
git status

#install & build
npm install --force
npm run build

#deploy
pm2 stop belozub
pm2 delete belozub
pm2 start npm --name belozub -- start
