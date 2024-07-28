const pool = require('./pool.js');

async function getStudentByName(username) {
    const query = 'SELECT * FROM dummystudents WHERE username = $1'; // query here
    const result = await pool.query(query, [username]);
    return result.rows[0];
}

async function getStudentById(id) {
    const query = 'SELECT * FROM dummystudents WHERE id = $1'; // query here
    const result = await pool.query(query, [id]);
    return result.rows[0];
}

async function getAllStudents() { // this is a function that returns all students
    const query = 'SELECT * FROM dummystudents'; // query here
    
    const result = await pool.query(query);
    return result.rows;

}

async function getAllTeachers() { // this is a function that returns all teachers
    const query = 'SELECT * FROM dummyteachers'; // query here
    const result = await pool.query(query);
    return result.rows;
}

async function createNewStudent(name,password) {
    const query = "INSERT INTO dummystudents (username, password) VALUES ($1, $2)"; // query here, wait wut? So the indexing starts at 1? wtf?
    console.log(query, [name, password]);
    const result = await pool.query(query, [name, password]);
    return 0;
}

async function createNewTeacher(name,password) {
    const query = "INSERT INTO dummyteachers (username, password) VALUES ($1, $2)"; // query here, wait wut? So the indexing starts at 1? wtf?
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

async function getWeekSchedule() {
    const query = "SELECT\
    c.courseid,\
    c.coursename,\
    c.starttime,\
    c.endtime,\
    s.username AS student_name,\
    t.username AS teacher_name,\
    c.weekday\
    FROM \
    weekcourses c\
    JOIN \
    dummystudents s ON c.studentid = s.id\
    JOIN \
    dummyteachers t ON c.teacherid = t.id\
    ORDER BY \
    c.courseid\
" // query here
    
    const result = await pool.query(query);
    return result.rows;
}

module.exports = { 
    getStudentByName,
    getAllStudents, 
    getAllTeachers,
    createNewStudent, 
    createNewTeacher,
    getLatestChats, 
    createNewChat,
    getWeekSchedule,
 };