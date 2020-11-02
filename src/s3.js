const aws = require('aws-sdk');
const AWS_ACCESS_KEY = "XXXXXXXX";
const AWS_SECRET_KEY = "xxxxxxxx";
const BUCKET = "xxxxxxx";

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY
});

function PutObject() {
  const s3 = new aws.S3();
  var params = {Bucket: BUCKET, Key: 'sample', Body: "sample-data"};
  s3.upload(params, function(err, data) {
    console.log(err, data);
  });
}

export default PutObject;