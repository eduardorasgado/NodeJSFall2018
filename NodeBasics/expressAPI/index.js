const express = require("express");

// crreating an instance for server
const app = express();

// loading some settings for server enviroment
const { PORT } = require("./config");

require("./routes/views")(app);
require("./routes/api")(app);

function init()
{
    console.log("[EXPRESS IS INITIALIZED]");
    app.listen(PORT, () =>
    {
        console.log("[EXPRESS SERVER IS ONLINE]");
    });
};

init();