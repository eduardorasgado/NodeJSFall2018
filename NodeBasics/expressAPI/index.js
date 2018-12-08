const express = require("express");

// crreating an instance for server
const app = express();

// loading some settings for server enviroment
const { PORT } = require("./config");

const mongo = require("./database/connect");

require("./routes/api")(app);
require("./routes/views")(app);

async function initDB()
{
    const db = await mongo.connect();
    if(db)
    {
        initExpress();
    }
}

function initExpress()
{
    console.log("[EXPRESS IS INITIALIZED]");
    app.listen(PORT, () =>
    {
        console.log("[EXPRESS SERVER IS ONLINE]");
    });
    // awaiting two signals in case express is closed
    process.on("SIGINT", closeApp);
    process.on("SIGTERM", closeApp);
};

function closeApp()
{
    mongo.disconnect()
        .then(() =>
        {
            process.exit(0);
        })
}

initDB();