const express = require("express");
// http service instance
const app = express();

// Server ROUTES
/*
* NOTE: Express always solve routing by sequential reading, so, * should
* be at the end or the other routes wont response correctly
* */
app.get("/", (request, response) =>
{
    response.send("[HOME ROUTE] => <a href='/app'>Go App</a>");
});
app.get("/app", (request, response) =>
{
    response.send("[APP ROUTE] => <a href='/'>Go Home</a>");
});
app.get("*", (request, response) =>
{
    // user tries to access routes do not exist
    response.send("[ SITE NOT FOUND ] => Why dont you go home? <a href='/'>Go home</a>");
});

// start server
app.listen(3000, () =>
{
    // server
    console.log("[Express server is listening | Port: 3000]");
});