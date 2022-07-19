/*
    Name: Mike Villeneuve
    Date: 07/19/2022
*/


// const log = require("./logger.js");  // version from before using a class
const Logger = require("./logger");
let logger = new Logger();

logger.on("messageLogged", eventsArgs => {
    console.log("messageLogged event triggered")
    console.log("-----------------------------")
    console.log(eventsArgs);
    console.log("-----------------------------")

});

logger.log("Hello World!");



/*
let name = "Hello World!";

console.log(name);
*/

// Creates server to output desired message via the localhost and indicated port
const http = require("http");

http.createServer((req, res) => {
    res.write("Hello World! from the NodeJS server.");
    res.end();
}).listen(3333);

console.log("I'm listening from port 3333");
