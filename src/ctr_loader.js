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
    async processS3File(){        
        try {
            const { ContentType, Body } = await this.readData(this.s3Config);//s3.getObject(this.s3Config).promise(); //
            // console.log(`ContentType:${ContentType}`);
            // console.log(`Body:${Body}`);
            // let data = Body.toString('utf-8');
            // console.log(data);
            return this.parseJsonReadStream(Body);
        } catch (err) {
            console.log(err);
            const message = `Error getting object ${this.s3Config.Key} from bucket ${this.s3Config.Bucket}. Make sure they exist and your bucket is in the same region as this function.`;
            console.log(message);
            throw new Error(message);
        }
    }

    parseJsonReadStream(body){
        try{
            if(body==='undefined'){
                return null;
            }
            // console.log(body);
            return JSON.parse(body.toString('utf-8'));
        }catch (err) {
            console.log(err);
            console.log(`Invalid Json file: ${this.s3Config.Key} from bucket ${this.s3Config.Bucket}.`);
        }
    }

    async readData(config){
        if(config['path']!=null){
            return {Body:fs.readFileSync(config['path'])};
        }
        else{
            return await s3.getObject(config).promise();
        }
    }

    async deleteS3File(bucket, key) {
        const params = {
            Bucket: bucket,
            Key: key,
        }
        try {
            const getFileObjectFromS3 = s3.deleteObject(params).promise();
            //return await Promise.resolve(getFileObjectFromS3);
            return Promise.resolve(getFileObjectFromS3).then(response => {
                console.log('Successfully deleted AWS S3 file: ' + response.status);
            })
                .catch(response => {
                    console.log('Failed to delete AWS S3 file:' + response.status);
                });
        } catch (err) {
            console.error(err);
            const message = `Error deleting s3 object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
            console.log(message);
            throw new Error(message);
        }
    }
    uploadJsonFile(bucket, key, data) {
        const params = {
            Bucket: bucket,
            Key: key,
            Body:JSON.stringify(data,null,2)
        }
        try {
            console.log(`Start uploading file:(${key}) to bucket: ${bucket}`);
            await s3.putObject(params).promise();
            console.log(`File (${key}) uploaded successfully to bucket: ${bucket}`);
        } catch (err) {
            console.error(err);
            const message = `Error uploading s3 object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
            console.log(message);
            throw new Error(message);
        }
    }
}

module.exports = {
    s3_ctr_loader
};
