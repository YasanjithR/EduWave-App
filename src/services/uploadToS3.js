import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION,
});

export const uploadToS3 = (file) => {
  return new Promise((resolve, reject) => {
    const filename = `${uuidv4()}-${file.name}`;

    const params = {
      Bucket: 'eduwave',
      Key: filename,
      Body: file,
      ACL: 'public-read',
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error('File upload failed:', err);
        reject(err);
      }
    
      console.log('File uploaded:', data);
      resolve(data.Location);
    });  
  });
};  