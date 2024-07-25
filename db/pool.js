const pg = require('pg');

require('dotenv').config(); // load the environment variables

const DB_HOST = process.env.DEV_DB_HOST;
const DB_PORT = process.env.DEV_DB_PORT;
const DB_USER = process.env.DEV_DB_USER;
const DB_PASSWORD = process.env.DEV_DB_PASSWORD;
const DB_NAME = process.env.DEV_DB_NAME;

module.exports = new pg.Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME
});