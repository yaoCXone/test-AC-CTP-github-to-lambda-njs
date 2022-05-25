const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });
var fs = require('fs')

class s3_ctr_loader{
    constructor(bucket, key){
        this.s3Config = {
            Bucket: bucket,
            Key: key,
        };
    }
    processS3File(){        
        try {
            let readStream = this.createReadStream(this.s3Config);
            return this.parseJsonReadStream(readStream);
        } catch (err) {
            console.log(err);
            const message = `Error getting object ${this.s3Config.Key} from bucket ${this.s3Config.Bucket}. Make sure they exist and your bucket is in the same region as this function.`;
            console.log(message);
            throw new Error(message);
        }
    }

    parseJsonReadStream(data){
        if(data.Body==='undefined')
            return null;
        return JSON.parse(data.Body.toString('utf-8'));
    }

    createReadStream(config){
        if(config==null){
            return s3.getObject(this.s3Config).promise();
        }
        else{
            if(config['path']!=null){
                return {Body:fs.readFileSync(config['path'])};
            }
        }
    }
}

module.exports = {
    s3_ctr_loader
};
