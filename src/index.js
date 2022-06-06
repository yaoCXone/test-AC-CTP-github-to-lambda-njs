console.log('Loading function');

var dt = require('./testmodule');
var ctr_loader = require('./ctr_loader').s3_ctr_loader;
const aws = require('aws-sdk');
//const config = require('config');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log(`NODE_EVN:${process.env.NODE_EVN}`);
    const region_code = process.env.AWS_REGION;
    console.log(`On region:${region_code}`);
    // Get the object from the event and show its content type
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const message = `receive event s3 bucket: ${bucket}, object: ${key}`;
    console.log(message);
    try {
        console.log("The date and time are currently: " + dt.currentDateTime());

        var params={
            Bucket: bucket,
            Key: key,
        };
        var loader = new ctr_loader(bucket, key);
        var data = await loader.processS3File();
        console.log(`data:${data}`);
        if(data===undefined || data===null){
            console.log('Invalid Ctr event.');
        }
        else{
            console.log(data);
        }
        return 0;
    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }
};
