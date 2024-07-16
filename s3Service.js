// s3Service.js
const s3 = require('./awsConfig');

const uploadFile = (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  return s3.upload(params).promise();
};

const deleteFile = (key) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  };

  return s3.deleteObject(params).promise();
};

module.exports = {
  uploadFile,
  deleteFile,
};
