const match = require("./matching");

module.exports = function(io)
{
    // connection handler
    io.on("connection", (socket) =>
    {
        // register event
        socket.on("register", (user) =>
        {
            // register should include name and id
            console.info(`User registered: {${ user.name }, id: ${ user.id }`);
            match().userConnect({socket, user});
        });
        // disconnection handler
        socket.on("disconnect", () =>
        {
            console.info(`User with ID: ${socket.id} has disconnected`);
            match().userDisconnect(socket.id);
        });
        // message event handler
        socket.on("message", (id, msg) =>
        {
            console.log(id, msg);
            console.info(`Message sent to ${id}`);
            // emit the message to the id room
            // in emit we have the payload: type and body
            socket.to(id).emit(msg.type,msg.body);
        })
    })
}