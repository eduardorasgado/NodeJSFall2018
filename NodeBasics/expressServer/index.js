const express = require("express");
// http service instance
const app = express();

// Server ROUTES
app.get("/", (request, response) =>
{
    response.send("[HOME ROUTE] => <a href='/app'>Go App</a>");
});
app.get("/app", (request, response) =>
{
    response.send("[APP ROUTE] => <a href='/'>Go Home</a>");
});

// start server
app.listen(3000, () =>
{
    // server
    console.log("[Express server is listening | Port: 3000]");
});