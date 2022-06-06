
var expect = require("chai").expect;
let ctr_json = require("../src/ctr_json_object").ctr_json_object;
var mockS3Events = require("./mockevents").all_s3_events;
var mockCtrEvents = require("./mockevents").all_ctr_events;
var mockS3Evt_01 = require("./mockevents").s3_event_01;

var ctrLoader = require("../src/ctr_loader").s3_ctr_loader;

describe("CTR Json Object tests", function(){
    describe("Is Json Object contains CTR keys", function(){
        it("Should be false if assign none CTR json object", function(){
            var ctrObj = new ctr_json(mockS3Evt_01);
            var isCtr = ctrObj.is_ctr_json();
            expect(isCtr).to.equal(false);
        });

        it("Should be true if assign CTR json object", function(){
            var ctrObj = new ctr_json(mockCtrEvents[0]);
            var isCtr = ctrObj.is_ctr_json();
            expect(isCtr).to.equal(true);
        });
    });
});

describe("S3 bucket object loader tests",function(){
    describe("Load Json object", function(){
        it("should load json object from json file", async function(){
            var config={path:'./test/ctr_evt_01.json'};
            var ctr_loader = new ctrLoader();
            var data = await ctr_loader.readData(config);
            expect(data).to.not.null;
            // console.log(data.Body);
            var ctr_json = ctr_loader.parseJsonReadStream(data.Body);
            expect(ctr_json).to.not.null;
            var rec= ctr_json['Recording'];
            expect(rec).to.not.null;
            var act = ctr_json["should_not_exists"];
            expect(act).to.undefined;
        });
    });
});



