module.exports = (app) =>
{
    app.get("/", (request, response) =>
    {
        response.send("[HOME PAGE]");
    });
    app.get("/route", (request, response) =>
    {
        response.send("[ROUTE PAGE]");
    });
    app.get("*", (request, response) =>
    {
        response.send("[PAGE NOT FOUND] Why not going home? <a href='/'>HOME</a>")
    });
};