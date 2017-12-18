#!/bin/bash

echo "Hello cloud gurus!"

echo "Release Review - Amazon Cloud9 - setup script v1"
echo "================================================"

cd ./ops

echo "Installing ops dependencies"
npm install

echo "Deploying your infrastructure"
node_modules/.bin/sls deploy -v

echo "Copying pictures to S3 bucket"
node sendPics.js ./images

echo "Copying config"
cp ./config.json ../code/frontend
cp ./config.json ../code/backend

cd ../code/frontend

echo "Installing frontend dependencies"
npm install

echo "Building frontend code"
npm run build