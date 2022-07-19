/*
    Name: Mike Villeneuve
    Date: 07/19/2022
*/

const EventEmitter = require("events");
class Logger extends EventEmitter {
   log(message) {
       console.log(message);
       this.emit("messageLogged", {"message": message});
   } 
}



/*
const log = message => {
    console.log(`here is your message: ${message}`);
}
*/

// module.exports = log;
module.exports = Logger;
