// only run it once to populate the database
// READ ME: HOW TO USE THIS
// before writing your query, check if it is aleady in the historical queries
// which are commented out below, if it is, dont run it again
// if not follow the instructions below
// write your query in this_query
// write your params in this_params
// run node db_populate.js
// check the console for the output and test the database for changes
// if it works, comment out the query and params and add them to the historical queries
// if it doesnt work, check the console for errors and fix them
// if you cant fix them, let @xiaotojohn know
const pool = require('./db/pool.js');
// const bcrypt = require('bcrypt');

async function populate(query,params) {
    const result = await pool.query(query, params);
    console.log(query, params);
    console.log('working.....');
    return 0;
}

const this_query = ""; // write your query here
const this_params = []; // write your params here

// last line: execute the query
populate(this_query,this_params);

// HISTORICAL QUERIES: FOR REFERENCE ONLY, DO NOT RUN THEM //

// ------------------------------------ encryted password in server side --------------------------------

// async function getAllStudents() { // this is a function that returns all students
//     const query = 'SELECT * FROM dummystudents'; // query here
    
//     const result = await pool.query(query);
//     return result.rows;

// }


// async function updateStudentPasswords() {
//     const students = await getAllStudents();
//     console.log(students);

//     for (let i = 0; i < students.length; i++) {
//         let student = students[i];
//         console.log(student);

//         let query = 'UPDATE dummystudents SET password = $1 WHERE id = $2';
//         let params = [bcrypt.hashSync(student.password, 10), student.id];
        
//         await populate(query, params); // await each populate call
//     }
// }

// updateStudentPasswords();

// ------------------------------------ populating schedule------------------------------------------------
// const this_query = "\
//     INSERT INTO weekcourses (coursename, starttime, endtime, studentid, teacherid, weekday) VALUES\
//     ('Math', '08:00:00', '09:00:00', 1, 1, 'Monday'),\
//     ('Astrology', '10:00:00', '12:00:00', 1, 2, 'Tuesday'),\
//     ('Sniper 101', '18:00:00', '19:30:00', 3, 1, 'Wednesday'),\
//     ('Intro to Mars', '08:00:00', '19:00:00', 2, 2, 'Sunday'),\
//     ('Dragons!', '10:00:00', '12:00:00', 2, 1, 'Friday')\
// ";
// const this_params = [];


// ------------------------------------ setting up week schedule table ------------------------------------
// const this_query = "\
//     CREATE TABLE weekcourses(\
//         courseid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,\
//         coursename VARCHAR(255),\
//         weekday VARCHAR(255),\
//         starttime TIME,\
//         endtime TIME,\
//         studentid INTEGER,\
//         teacherid INTEGER,\
//         FOREIGN KEY (teacherid) REFERENCES dummyteachers(id),\
//         FOREIGN KEY (studentid) REFERENCES dummystudents(id)\
// );";
// const this_params = [];

// ------------------------------------ setting up dummy teachers table ------------------------------------
// const this_query = "CREATE TABLE dummyteachers(\
//     id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,\
//     username VARCHAR(255) NOT NULL,\
//     password VARCHAR(255) NOT NULL\
// );";
// const this_params = [];



// ------------------------------------ populating chat table ----------------------------------------------
// const this_query = 'INSERT INTO chat (name,timestamp,msg) VALUES ($1, $2, $3), ($4, $5, $6)';
// const this_params = ['Dexin', new Date(), 'Yes.', 'Dexin', new Date(), 'But no.'];




