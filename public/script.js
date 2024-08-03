//TO-DO LIST:
// keyboard events if possible?


let months_eng = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let days_eng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const date = new Date()
let info = {
    "today": [date.getFullYear(), date.getMonth(), date.getDate(), date.getDay()], // [YYYY, MM - 1, DD, WWW - 1]
    "prev_chosen": date.getFullYear() + "/" + (date.getMonth() + 1)  + "/" + date.getDate(),
    "year": date.getFullYear(),
    "month": date.getMonth(),
    "date": date.getDate(),
    "data": ""
}

// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************

// functions for d-schedule.html

// fetch info from a given url
function getClassData(url){
    fetch(url)
    .then(response => response.json())
    .then(data => displayClassInfo(data))
}

// displays the class information of a given weekday
function displayClassInfo(data){
    //console.log(data)
    info.data = data
    document.querySelector("#events").innerHTML = ""
    weekday = getWeekDayName(info.year, info.month, info.date)
    if (data[weekday].length > 0){
        for(let i = 0; i < data[weekday].length; i++){
            let coursename = data[weekday][i].coursename
            let starttime = data[weekday][i].starttime
            starttime = starttime.substring(0, starttime.length - 3)
            let endtime = data[weekday][i].endtime
            endtime = endtime.substring(0, endtime.length - 3)
            let student = data[weekday][i].student_name
            let teacher = data[weekday][i].teacher_name
            let newClass = document.createElement("p")
            newClass.innerHTML = coursename + " (" + starttime + "-" + endtime + ") " + "<input type='checkbox' class='checkbox hideable' id=" + i + " onclick='check(this)'>" + "<br>" + teacher + "<br>" + student
            document.querySelector("#events").appendChild(newClass)
        }
    }else{
        document.querySelector("#events").innerHTML = "Woohoo, no class today :D"
    }
}


// return an html string that contains all calendar info for given year and month
// each cell contains the changeDateInfo function
// each cell has id of yyyy/mm/dd
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
            mystring += "<div class = 'dates' style = 'border: 2px solid var(--light); background-color: var(--light);' id =" + y + "/" + (m+1) + "/" + (i+1) + " onclick = 'changeDateInfo(this.innerHTML)'>" + (i + 1) + "</div>"
        } else {
            mystring += "<div class = 'dates' id =" + y + "/" + (m+1) + "/" + (i+1) + " onclick = 'changeDateInfo(this.innerHTML)'>" + (i + 1) + "</div>"
        }
    }
    return mystring
}

// when a left/right button is pressed, change the month
// chosen date is the same as previous chosen day
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
    info.prev_chosen = info.year + "/" + (info.month + 1) + "/" + info.date
    document.getElementById(info.prev_chosen).style.border = "2px solid var(--red)"
    displayDateOnRight()
}

// changes the date when user clicks on the calendar
function changeDateInfo(d){
    info.date = d
    displayDateOnRight()
    // restore previous element to NOT have red outline
    if (info.prev_chosen != ""){
        if (info.prev_chosen == info.today[0] + "/" + (info.today[1] + 1) + "/" + info.today[2]){
            document.getElementById(info.prev_chosen).style.border = "2px solid var(--light)"
        }else {
            document.getElementById(info.prev_chosen).style.border = "2px solid var(--yellow)"
        }
    }
    // change current element to have red outline
    document.getElementById(info.year + "/" + (info.month + 1) + "/" + d).style.border = "2px solid var(--red)"
    info.prev_chosen = info.year + "/" + (info.month + 1) + "/" + d
    displayClassInfo(info.data)
}

// displays the clicked date on the right div
function displayDateOnRight(){
    document.querySelector("#date").innerHTML = "<h1>" + (info.month + 1) + "/" + info.date + "/" + info.year + "</h1>"
}

// downloads the right div as a png
function downloadPNG(){
    const screenshotTarget = document.querySelector(".right-block");
    html2canvas(screenshotTarget).then((canvas) => {
        let a = document.createElement("a")
        a.download = (info.month + 1) + "/" + info.date + "/" + info.year + ".png"
        a.href=canvas.toDataURL("image/png")
        a.click()
    })
}


// searchs the day that's in the input box
// function searchDate(){
//     y = document.querySelector("#Y").value
//     m = document.querySelector("#M").value - 1
//     if((y <= 2000 || y > 2500) || (m <= -1 || m >= 12)){
//         alert("Date unavailble")
//         document.querySelector("#Y").value = ""
//         document.querySelector("#M").value = ""
//     } else{
//         info.year = y
//         info.month = m
//         document.querySelector(".date").innerHTML = months_eng[info.month] + " " + info.year 
//         document.querySelector(".days").innerHTML = document.querySelector(".days").innerHTML = "<div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>" + buildCalendar(info.year, info.month)
//         displayDateOnRight()
//         document.querySelector("#Y").value = ""
//         document.querySelector("#M").value = ""
//         console.log(info)
//     }
// }

// prints T/F based on if classes were checked
function UpdateRecords(){
    numClasses = document.getElementById("events").children.length
    for (i = 0; i < numClasses; i++){
        console.log(document.getElementById(i).checked)
    }
    alert("Records Updated Sucessfully")
}

function check(elem){
    if (document.getElementById("events").children[elem.id].style.backgroundColor != "var(--red)"){
        document.getElementById("events").children[elem.id].style.backgroundColor = "var(--red)"
    } else {
        document.getElementById("events").children[elem.id].style.backgroundColor = "var(--yellow)"
    }
}

function getWeekDayName(y, m, d){
    const tempDate = new Date(y + "-" + (m + 1) + "-" + d)
    return days_eng[tempDate.getDay()]
}

// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************

// functions for w-schedule.html

// builds the week days
function buildWeek(){
    d = info.today[2]
    if(info.today[3] == 0){
        w = 7
    }else{
        w = info.today[3]
    }
    for(let i = 0; i < 7; i++){
        document.querySelector("." + days_eng[i]).innerHTML += " " + (d - w + i)
    }
}


// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************


// Functions for index.html

//shows the sign in light box
function showlightbox(){
    document.querySelector(".lightbox").style.display = "block"
    document.querySelector("#overlay").style.display = "block"
}

// hides the sign in light box
function hidelightbox(){
    document.querySelector(".lightbox").style.display = "none"
    document.querySelector("#overlay").style.display = "none"
    document.querySelector("#username").value = ""
    document.querySelector("#password").value = ""
}

// gets sign in information
function signIn(){
    username = document.querySelector("#username").value
    password = document.querySelector("#password").value
    hidelightbox()
}

function openLink(link){
    window.open("https://" + link, "_blank")
}

function copyThis(thing, type){
    console.log(thing)
    navigator.clipboard.writeText(thing)
    alert("Copied " + type + " to clipboard!")
}
