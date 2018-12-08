const MongoClient = require("mongodb").MongoClient;
const { DB_HOST, DB_PORT, DB_NAME } = require("./config");
const connectionUrl = `mongodb://${DB_HOST}:${DB_PORT}`;

module.exports = (() =>
{
    let instance = null,
        isDisconnecting = false;

    function connect()
    {
        return new Promise((resolve, reject) =>
        {
            MongoClient.connect(connectionUrl,
                { useNewUrlParser: true },
                function(err, client)
                {
                    if(err) { reject(err); }
                    console.log("[CONNECTED TO MONGODB SUCCESSFULLY]");
                    instance = client;
                    resolve(client.db(DB_NAME));
                });
        });
    }

    function disconnect()
    {
        if(instance && !isDisconnecting)
        {
            isDisconnecting = true;
            console.log("[DESCONNECTING INSTANCE TO MONGODB]");
            return new Promise((resolve, reject) =>
            {
               instance.close((err, result) =>
               {
                   if(err) { reject(err); isDisconnecting = false; return; }
                   console.log("[MONGODB INSTANCE IS DESCONNECTED]");
                   resolve();
               });
            });
        }
    }

    return {
        connect,
        disconnect,
        instance: () => instance
    }
})();