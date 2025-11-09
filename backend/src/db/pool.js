const {Pool} = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "postgres",
    database: "problem_mapper",
    password: "troubador1",
    port: 5432
});