const express = require("express");
// http service instance
const app = express();

app.listen(3000, () =>
{
    // server
    console.log("[Express server is listening | Port: 3000]");
});