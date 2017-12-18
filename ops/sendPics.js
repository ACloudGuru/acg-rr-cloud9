const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const fs   = require('fs');
const path   = require('path');

const upload = (bucketName, filename) => {

    const data = fs.readFileSync(filename);
    const base64data = new Buffer(data, 'binary');

    return S3.putObject({
        'Bucket': bucketName,
        'Key': path.basename(filename),
        'Body': base64data,
        'ACL': 'public-read'
    }).promise();
}

const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, './config.json'), 'utf8'));
const argPath = process.argv[2];
const imageDir = path.resolve(__dirname, argPath);

const params = {
    Bucket: config.bucketName
};

const promises = [];

fs.readdirSync(imageDir).forEach(file => {
    promises.push(upload(config.bucketName, path.resolve(imageDir, file)));
});

