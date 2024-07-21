//TO-DO LIST:
// keyboard events if possible?
// go to certain date?
// make selected dates red outlined
// make a certain page printable


let months_eng = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let days_eng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const date = new Date()
let info = {
    "today": [date.getFullYear(), date.getMonth(), date.getDate(), date.getDay()], // [YYYY, MM - 1, DD, WWW - 1]
    "prev_chosen": "",
    "year": date.getFullYear(),
    "month": date.getMonth(),
    "date": date.getDate()
}


window.onload = function(){
    let download = document.getElementById('download')
    download.addEventListener('click', function(){downloadTXT(document.querySelector(".right-block").innerText, "Schedule for " + info.month + "-" + info.date + "-" + info.year)})
    document.querySelector(".date").innerHTML = months_eng[info.month] + " " + info.year 
    document.querySelector(".days").innerHTML = document.querySelector(".days").innerHTML = "<div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>" + buildCalendar(info.year, info.month)
    displayDateOnRight()
}

function buildCalendar(y, m){
    let mystring = ""

    // number of days in a month
    const numDays = (y, m) => new Date(y, m, 0).getDate() 
    // the date of the first weekday
    const firstWeekday = (y, m) => new Date(y, m, 1).getDay()


    // find the weekday that the 1st of each month starts on
    let extras = firstWeekday(y, m)
    if(extras == 0){
        extras = 7
    }
    if(extras != 1){
        // for loop to add all days in the month in grid
        for(let i = 0; i < extras - 1; i++){
            mystring += "<div>" + "</div>"
        }
    }
    for(let i = 0; i < numDays(y, m+1); i++){
        if ((i + 1) == info.today[2] && info.month == info.today[1] && info.year == info.today[0]){
            mystring += "<div class = 'dates' style = 'border: 2px solid var(--red); background-color: burlywood;' onclick = 'changeDateInfo(this.innerHTML)'>" + (i + 1) + "</div>"
        } else {
            mystring += "<div class = 'dates' onclick = 'changeDateInfo(this.innerHTML)'>" + (i + 1) + "</div>"
        }
    }
    return mystring
}

function changeMonth(n){ // n is either +1 or -1 depending on which arrow was clicked
    if(n > 0){ // increase month
        if(info.month == 11){
            info.month = 0
            info.year += 1
        } else {
            info.month += n
        }
    } else { // decrease month
        if(info.month == 0){
            info.month = 11
            info.year -= 1
        } else {
            info.month += n
        }
    }
    document.querySelector(".date").innerHTML = months_eng[info.month] + " " + info.year
    document.querySelector(".days").innerHTML = "<div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>" + buildCalendar(info.year, info.month)
}

function changeDateInfo(d){
    info.date = d
    displayDateOnRight()
    // change current element to have red outline

    // restore previous element to NOT have red outline
}

function displayDateOnRight(){
    document.querySelector("#date").innerHTML = "<h1>" + (info.month + 1) + "/" + info.date + "/" + info.year + "</h1>"
}

function downloadJSON(data, filename){
    console.log(data)
    // Convert the JSON data to a string
    var json = JSON.stringify(data);

    // Create a new Blob object with the JSON data and set its type
    var blob = new Blob([json], { type: 'application/json' });

    // Create a temporary URL for the file
    var url = URL.createObjectURL(blob);

    // Create a new link element with the download attribute set to the desired filename
    var link = document.createElement('a');
    link.setAttribute('download', filename);

    // Set the link's href attribute to the temporary URL
    link.href = url;

    // Simulate a click on the link to trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up the temporary URL and link element
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

}