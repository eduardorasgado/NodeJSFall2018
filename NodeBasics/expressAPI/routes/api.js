const API_BASE = "/api";
const db = require("../database");

module.exports = function(app)
{
    app.get(`${API_BASE}/users`,async (request, response) =>
    {
        const query = await db.getUsers();
        response.json(query);
    });
    app.get(`${API_BASE}/user/:id`, async (request, response) =>
    {
        const query = await db.getUserById(request.params.id);
        response.json(query);
    });
    // can be called like this: localhost:3000/api/users/age?l=20&h=30
    app.get(`${API_BASE}/users/age`, async (request, response) =>
    {
        const { l, h } = request.query;
        let query = await db.getUserByAgeRange(l, h);
        response.json(query);
    });
};