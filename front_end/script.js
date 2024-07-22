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
    "username": "hello",
    "password": "idk",
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
            mystring += "<div class = 'dates' style = 'border: 2px solid var(--red); background-color: var(--light);' id =" + y + "/" + (m+1) + "/" + (i+1) + " onclick = 'changeDateInfo(this.innerHTML)'>" + (i + 1) + "</div>"
        } else {
            mystring += "<div class = 'dates' id =" + y + "/" + (m+1) + "/" + (i+1) + " onclick = 'changeDateInfo(this.innerHTML)'>" + (i + 1) + "</div>"
        }
    }
    return mystring
}

// when a left/right button is pressed, change the month
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
    info.date = 1
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
}

// displays the clicked date on the right div
function displayDateOnRight(){
    document.querySelector("#date").innerHTML = "<h1>" + (info.month + 1) + "/" + info.date + "/" + info.year + "</h1>"
}

function downloadPNG(){
    const screenshotTarget = document.querySelector(".right-block");
    html2canvas(screenshotTarget).then((canvas) => {
        let a = document.createElement("a")
        a.download = (info.month + 1) + "/" + info.date + "/" + info.year + ".png"
        a.href=canvas.toDataURL("image/png")
        a.click()
    })
}


function openLink(link){
    window.open("https://" + link, "_blank")
}

function copyThis(thing, type){
    console.log(thing)
    navigator.clipboard.writeText(thing)
    alert("Copied " + type + " to clipboard!")
}



// searchs the day that's in the input box
function searchDate(){
    y = document.querySelector("#Y").value
    m = document.querySelector("#M").value - 1
    if((y <= 2000 || y > 2500) || (m <= -1 || m >= 12)){
        alert("Date unavailble")
        document.querySelector("#Y").value = ""
        document.querySelector("#M").value = ""
    } else{
        info.year = y
        info.month = m
        info.date = 1
        document.querySelector(".date").innerHTML = months_eng[info.month] + " " + info.year 
        document.querySelector(".days").innerHTML = document.querySelector(".days").innerHTML = "<div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>" + buildCalendar(info.year, info.month)
        displayDateOnRight()
        document.querySelector("#Y").value = ""
        document.querySelector("#M").value = ""
    }

}

// returns a list of T/F based on if classes were checked
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
    if(username == info.username && password == info.password){
        console.log("hooray")
    } else{
        console.log("ohno")
    }
    hidelightbox()
}

