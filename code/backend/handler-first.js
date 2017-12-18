'use strict';

const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const fs = require('fs');
const path = require('path');

const CORS_HEADERS = {
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Methods': 'OPTIONS,GET',
    'Access-Control-Allow-Origin': '*',
};

module.exports.handler = (context, event, callback) => {
    
    const configFile = fs.readFileSync(path.resolve(__dirname, './config.json'));
    const configFileJSON = JSON.parse(configFile);
    const bucketName = configFileJSON.bucketName;

    const params = {
        Bucket: bucketName
    };

    S3.listObjectsV2(params, function(err, data) {

         if (err) {
            
            console.log(err, err.stack);
            callback(err);

        } else {

            const chosenIndex = [Math.floor(Math.random() * data.Contents.length)];
            const chosenKey = data.Contents[chosenIndex].Key;

            callback(null, {
                statusCode: 200,
                headers: CORS_HEADERS,
                body: JSON.stringify({
                    imageUrl: `https://s3.amazonaws.com/${bucketName}/${chosenKey}`
                })
            });

        }

    });
    
}
