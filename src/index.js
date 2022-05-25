console.log('Loading function');

var dt = require('./testmodule');
var ctr_loader = require('./ctr_loader').s3_ctr_loader;
const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });


exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    // Get the object from the event and show its content type
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    
    try {
        console.log("The date and time are currently: " + dt.currentDateTime());
        var loader = new ctr_loader(bucket, key);
        var ctr_json = loader.processS3File();
        if(ctr_json!=undefined && ctr_json!=null)
        {
            console.log('Ctr event:', ContentType);
        }
        return 0;
    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }
};
