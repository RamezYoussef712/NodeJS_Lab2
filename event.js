const util = require("util");
const EventEmitter = require("events");

function test(){
    EventEmitter.call(this);
}
util.inherits(test, EventEmitter);

module.exports = test;