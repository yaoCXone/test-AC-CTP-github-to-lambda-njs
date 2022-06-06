

class ignore_event_checker{
    /** @param Json evt*/
    should_ignore(evt){
        if(!evt.Agent){
            console.log(`ignoring CTR without agent. contact id:${evt.ContactId}`);
            return true;
        }
        if(!evt.Agent.ConnectedToAgentTimestamp){
            console.log(`ignoring CTR without connected to agent timestamp. contact id:${evt.ContactId}`);
            return true;
        }
        return false;
    }
}

module.exports={
    IgnoreEventChecker:ignore_event_checker
};