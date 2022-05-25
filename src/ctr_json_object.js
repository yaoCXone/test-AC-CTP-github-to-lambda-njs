
class ctr_json_object{
    constructor(json_obj){
        this.json_obj=json_obj;
    };

    is_ctr_json(){
        return (this.contains_key("AWSContactTraceRecordFormatVersion") &&
        this.contains_key("AWSAccountId") &&
        this.contains_key("ContactId") &&
        this.contains_key("Recordings"));
    };
    contains_key(keyword){
		return this.json_obj.hasOwnProperty(keyword);
    };
}

module.exports = {
    ctr_json_object
};