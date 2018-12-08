const mongo = require("./connect");
const argv = require("yargs").argv;
const usersData = require("../resources/users");

if(argv.fill)
{
    mongo.connect()
        .then((db) =>
        {
            db.collection("users").insertMany(usersData, (err, result) =>
            {
                if(err) { throw err; }
                console.log("[DATA WAS SUCCESSFULLY INSERTED IN DB]");
                mongo.disconnect();
            });
        });
    return;
}

if(argv.clear)
{
    mongo.connect()
        .then((db) =>
        {
           db.collection("users").drop((err, result) =>
            {
                if(err) { throw err; }
                console.log("[DATA WAS SUCCESSFULLY DROPED FROM DB]");
                db.disconnect();
            })
        });
    return;
}