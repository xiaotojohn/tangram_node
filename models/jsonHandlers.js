
async function scheduleWeekFormatter(schedule){
    // this function takes a master schedule from db in JSONARRAY format
    // and format it as a new json, with 7 days
    // each day is a json array containing all courses of that day
    let weekSchedule = {};
    let weekindex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 0; i < 7; i++) {
        let courselist = []; // list of courses for each day
        for (let j = 0; j < schedule.length; j++) { // loop through all courses
            if (schedule[j].weekday === weekindex[i]) {
                delete schedule[j].weekday;
                courselist.push(schedule[j]);
            }
        }
        weekSchedule[weekindex[i]] = courselist;
    }
    return weekSchedule;
}

module.exports = { scheduleWeekFormatter };