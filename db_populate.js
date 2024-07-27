// only run it once to populate the database

const pool = require('./db/pool.js');




function populate(query,params) {
    const result = pool.query(query, params);
    console.log(query, params);
    console.log('working.....');
    return 0;
}


const this_query = "\
    INSERT INTO weekcourses (coursename, starttime, endtime, studentid, teacherid, weekday) VALUES\
    ('Math', '08:00:00', '09:00:00', 1, 1, 'Monday'),\
    ('Astrology', '10:00:00', '12:00:00', 1, 2, 'Tuesday'),\
    ('Sniper 101', '18:00:00', '19:30:00', 3, 1, 'Wednesday'),\
    ('Intro to Mars', '08:00:00', '19:00:00', 2, 2, 'Sunday'),\
    ('Dragons!', '10:00:00', '12:00:00', 2, 1, 'Friday')\
";
const this_params = [];

// historical queries

// setting up week schedule table
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

// setting up dummy teachers table
// const this_query = "CREATE TABLE dummyteachers(\
//     id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,\
//     username VARCHAR(255) NOT NULL,\
//     password VARCHAR(255) NOT NULL\
// );";
// const this_params = [];



// populating chat
// const this_query = 'INSERT INTO chat (name,timestamp,msg) VALUES ($1, $2, $3), ($4, $5, $6)';
// const this_params = ['Dexin', new Date(), 'Yes.', 'Dexin', new Date(), 'But no.'];


// last line
populate(this_query,this_params);

