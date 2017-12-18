const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const fs   = require('fs');
const path   = require('path');

try {

    const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, './config.json'), 'utf8'));
    
    const params = {
        Bucket: config.bucketName
    };

    return S3.listObjectsV2(params).promise()
        .then((data) => {

            const keys = [];
            
            data.Contents.map((content) => {
                keys.push({Key: content.Key});
            });
        
            return keys;
        })
        .then((objects) => {
            return S3.deleteObjects({
                Bucket: config.bucketName,
                Delete: {
                    Objects: objects
                }
            }).promise();
        })
        .then(() => {
            console.log('Emptied bucket');
        })
        .catch((error) => {
            throw error;
        });

} catch (e) {

    console.log(e);

}