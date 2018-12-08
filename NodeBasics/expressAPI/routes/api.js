const API_BASE = "/api";
const db = require("../database");

module.exports = function(app)
{
    app.get(`${API_BASE}/users`,async (request, response) =>
    {
        const query = await db.getUsers();
        response.json(query);
    }),
    app.get(`${API_BASE}/user/:id`,(request, response) =>
    {
        const query = db.getUserById(request.params.id);
        response.json(query);
    })
};