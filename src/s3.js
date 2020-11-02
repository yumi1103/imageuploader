const aws = require('aws-sdk');
const AWS_ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
const AWS_SECRET_KEY = process.env.REACT_APP_AWS_SECRET_KEY;
const BUCKET = process.env.REACT_APP_BUCKET;

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY
});

function PutObject() {
  function upload(file) {
    const s3 = new aws.S3();
    var params = {Bucket: BUCKET, Key: 'sample', Body: file};
    s3.upload(params, function(err, data) {
      console.log(err, data);
    });
  }
  return (
    <div className="PutObject">
      <button onClick={upload.bind(this, "filed")}>upload</button>
    </div>
  )
}

export default PutObject;