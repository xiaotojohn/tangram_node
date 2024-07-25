// only run it once to populate the database

const pool = require('./db/pool.js');




function populate(query,params) {
    const result = pool.query(query, params);
    console.log(query, params);
    console.log('is this working?');
    return 0;
}

// historical queries


// const this_query = 'INSERT INTO chat (name,timestamp,msg) VALUES ($1, $2, $3), ($4, $5, $6)';
// const this_params = ['Dexin', new Date(), 'Yes.', 'Dexin', new Date(), 'But no.'];


// last line
populate(this_query,this_params);

