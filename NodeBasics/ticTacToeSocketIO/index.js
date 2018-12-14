 const server = require("http").Server();
// io is a event emiter
const io = require("socket.io")(server);
const port = require("./config").SERVER_PORT;

const banner = `
    ********************************
        TIC TAC TOE SERVER (>.<)
    ********************************
    Status: Online
    Listening on port: ${port}`
;

 // connection handler
 io.on("connection", (socket) =>
 {
     socket.on("register", (user) =>
     {
         console.info(`User registered: ${user.name}`);
     });
 });

 server.listen(port, () =>
 {
     console.info(banner);
 });