
const { S3 } = require('aws-sdk');
const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });
const jsonStream = require('JSONStream');
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
            let readStream = createReadStream(config);//S3.getObject(s3Config).createReadStream();
            return parseJsonReadStream(readStream);
        } catch (err) {
            console.log(err);
            const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
            console.log(message);
            throw new Error(message);
        }
    }

    parseJsonReadStream(rs){
        var parser = jsonStream.parse('*');
        return rs.pipe(parser);
    }

    createReadStream(config){
        if(config==null){
            return S3.getObject(s3Config).createReadStream();
        }
        else{
            if(config['path']!=null){
                return fs.createReadStream(config['path'], { encoding: 'utf8' });
            }
        }
    }
}

module.exports = {
    s3_ctr_loader
};
