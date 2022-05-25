var expect = require("chai").expect;
let ctr_json = require("../src/ctr_json_object").ctr_json_object;
var mockS3Events = require("../test/mockevents").all_s3_events;
var mockCtrEvents = require("../test/mockevents").all_ctr_events;
var mockS3Evt_01 = require("../test/mockevents").s3_event_01;

var ctrLoader = require("../src/ctr_loader").s3_ctr_loader;



test('S3 bucket object loader - Load Json object - should load json object from json file',()=>{
    var config={path:'./test/ctr_evt_01.json'};
    var ctr_loader = new ctrLoader();
    var rs = ctr_loader.createReadStream(config);
    expect(rs).to.not.null;
    var ctr_json = ctr_loader.parseJsonReadStream(rs);
    expect(ctr_json).to.not.null;
    var rec= ctr_json['Recording'];
    expect(rec).to.not.null;
    var act = ctr_json["should_not_exists"];
    expect(act).to.undefined;
});