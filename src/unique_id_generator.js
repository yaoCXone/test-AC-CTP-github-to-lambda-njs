const crypto = require('crypto');


class unique_id_generator{
    constructor(){
    }

    generate_id() {
        return crypto.randomUUID();
    }
}

module.exports = {
    UniqueIdGenerator : unique_id_generator
};