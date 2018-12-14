module.exports = () =>
{
    // defining the pool
    let players = {},
        onWait = [],
        //  room for players registered
        onMatch = {};

    // CODE HERE
    const loop = setInterval(checkQueue, 5000);

    function checkQueue()
    {
        console.info(`Queues: { players: ${ Object.keys(players).length }, onWait: ${onWait.length }`)
        // print pool values
        while(onWait.length > 2)
        {
            console.log("Constructing room...");
            const p1 = players[onWait.pop()].user.name;
            const p2 = players[onWait.pop()].user.name;
            console.log(`We created a match for ${p1} and ${p2}`);
        }
    }

    return {
        // user: { socket, user }
        userConnect: ({ socket, user }) =>
        {
            if(!players[socket.id])
            {
                players[socket.id] = { user, socket };
                onWait.push(socket.id);
            }
        },
        clear: () => clearInterval(loop),
        userDisconnet: (id) => {
            console.log("On disconnect, id");
            if(players[id].roomID && onMatch[players[id].roomID])
            {
                const roomID = players[id].roomID;
                // put all players back onWait
                onMatch[roomID].players.map(player => onWait.push(player.id));
                // delete match room
                delete onMatch[players[id].room];
                // if the object gets deleted, reset it
                if(!onMatch) onMatch = {};
            }
            // delete all instances of disconnecting player from waiting list
            // if any
            onWait = onWait.filter(el => el !== id);
            // delete from players list
            if(players[id])
            {
                delete players[id];
                // reset the players
                if(!players) players = {};
            }
        }
    }
};