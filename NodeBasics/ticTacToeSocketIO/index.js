 const server = require("http").Server();
// io is a event emiter
const io = require("socket.io")(server);
const port = require("./config").SERVER_PORT;

// passing io object directly
require("./backend/connect")(io);

const banner = `
    ********************************
        TIC TAC TOE SERVER (>.<)
    ********************************
    Status: Online
    Listening on port: ${port}`
;

 server.listen(port, () =>
 {
     console.info(banner);
 });