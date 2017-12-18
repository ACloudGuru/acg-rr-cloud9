#!/bin/bash

echo "Hello cloud gurus!"

echo "Release Review - Amazon Cloud9 - removal script v1"
echo "=================================================="

cd ./ops

echo "Removing all pictures from S3 bucket"
node emptyBucket.js

echo "Removing your infrastructure"
node_modules/.bin/sls remove

echo "Deleting ops dependencies"
rm -rf node_modules
rm -rf .serverless

cd ../code/frontend

echo "Deleting frontend dependencies"
rm -rf node_modules

echo "Removing frontend compiled code"
rm -rf dist

echo "Removing configs"
rm -rf config.json
rm -rf ../backend/config.json