const pool = require('./pool.js');

async function getAllStudents() {
    const query = 'SELECT * FROM dummystudents'; // query here
    
    const result = await pool.query(query);
    return result.rows;
    // todo: it's not returning id, why?
}

async function createNewStudent(name,password) {
    const query = "INSERT INTO dummystudents (username, password) VALUES ($1, $2)"; // query here, wait wut? So the indexing starts at 1? wtf?
    console.log(query, [name, password]);
    const result = await pool.query(query, [name, password]);
    return 0;
}

async function getLatestChats() {
    const query = "\
    SELECT * FROM chat \
    ORDER BY timestamp ASC\
    LIMIT 50"; // query here
    
    const result = await pool.query(query);
    return result.rows;
}

async function createNewChat(name, msg) {
    chat = {
        name: name,
        timestamp: new Date(),
        msg: msg
    };
    const query = 'INSERT INTO chat (name,timestamp,msg) VALUES ($1, $2, $3)'; // query here

    const result = await pool.query(query, [chat.name, chat.timestamp, chat.msg]);
    return 0;
}

module.exports = { getAllStudents, createNewStudent, getLatestChats, createNewChat };