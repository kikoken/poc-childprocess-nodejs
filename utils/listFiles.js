const dotenv = require('dotenv');
const AWS = require('aws-sdk');
dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const getAllKeys = async (allKeys = []) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
    };
    const data = await s3.listObjectsV2(params).promise();
    response.Contents.forEach(obj => allKeys.push(obj.Key));

    if (response.NextContinuationToken) {
        params.ContinuationToken = response.NextContinuationToken;
        await getAllKeys(params, allKeys); // RECURSIVE CALL
      }
        
    return allKeys;
}

module.exports = getAllKeys;