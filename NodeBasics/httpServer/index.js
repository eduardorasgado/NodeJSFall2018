const http = require("http");
const fs = require("fs");

// creating the server object
const server = http.createServer((request, response) =>
{
    //reading html
    fs.readFile("./resources/index.html", (err, data) =>
    {
        if(err) { console.error(`ERROR: ${err}`); return;}
        // sending html data
        response.end(data);
    });
});

console.log("[Server is online]");
server.listen(3000);