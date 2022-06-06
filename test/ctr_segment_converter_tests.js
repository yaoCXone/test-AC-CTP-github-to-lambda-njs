var expect = require("chai").expect;
const UuidGenerator = require("../src/unique_id_generator").UniqueIdGenerator;
const EventChecker = require("../src/ignore_event_checker").IgnoreEventChecker



describe("unique_id_generator tests", function(){
    describe("Is unique id generator generate a uuid", function(){
        const generator = new UuidGenerator();

        it("Should not undefine", function(){
            var uuid = generator.generate_id();
            console.log(uuid);
            expect(uuid).to.not.equal('undefined');
        });

        it("Should not be equals between two generated uuid", function(){
            var uuid_1 = generator.generate_id();
            var uuid_2 = generator.generate_id();
            console.log(uuid_1);
            console.log(uuid_2);
            expect(uuid_1).to.not.equal(uuid_2);
        });
    });
});

describe("ignore event checker tests", function(){
    describe("check ctr event has required fields", function(){
        const generator = new UuidGenerator();
        let contactId=generator.generate_id();
        const checker = new EventChecker();
        const event_with_agent={"ContactId":`${contactId}`, "Agent":{"a":"a","b":"b"}};
        const event_without_agent={"ContactId":`${contactId}`,"NotAgent":{"a":"a","b":"b"}};
        const event_with_agent_timestamp={"ContactId":`${contactId}`, "Agent":{"a":"a","ConnectedToAgentTimestamp":"b"}};

        const event_with_agent_lower_case_timestamp={"ContactId":`${contactId}`, "Agent":{"a":"a","connectedToAgentTimestamp":"b"}};
        it("Should ignored", function(){
            var ignore = checker.should_ignore(event_with_agent);
            expect(ignore).to.equal(true);
        });

        it("Should ignored", function(){
            var ignore = checker.should_ignore(event_without_agent);
            expect(ignore).to.equal(true);
        });

        it("Should not ignored when event has agent and Timestamp", function(){
            var ignore = checker.should_ignore(event_with_agent_timestamp);
            expect(ignore).to.equal(false);
        });
        it("Should ignored when event has agent and lower case Timestamp", function(){
            var ignore = checker.should_ignore(event_with_agent_lower_case_timestamp);
            expect(ignore).to.equal(true);
        });
    });
});


