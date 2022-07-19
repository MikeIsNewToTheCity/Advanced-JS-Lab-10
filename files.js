/*
    Name: Mike Villeneuve
    Date: 07/19/2022
*/

const fs = require("fs");

let fileName = "dummy.txt";

fs.readFile(fileName, (err, data) => {
    if(err) console.error(err);

    console.log(data.toString());
})