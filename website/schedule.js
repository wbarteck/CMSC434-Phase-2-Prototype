const dayStartHour = 8; //MILITARY TIME
const hoursOfficeisOpen = 10;
let eventColor = "success"; //Bootstrap button classes
let eventList = [];


function fillEmptySchedule() {
    var tableBody = "";
    for (var i = 0; i <= hoursOfficeisOpen; i++) {
        tableBody = tableBody + "<tr>";
        for (var j = 0; j <= 7; j++) {
            tableBody = tableBody + "<td align='right'>"
            if (j == 0) {
                if (dayStartHour + i == 12) {
                    tableBody = tableBody + (dayStartHour + i) + ":00 PM";
                }
                else if (dayStartHour + i > 12) {
                    tableBody = tableBody + (dayStartHour + i - 12) + ":00 PM";
                }
                else {
                    tableBody = tableBody + (dayStartHour + i) + ":00 AM";
                }
            }
            tableBody = tableBody + "</td>"
        }
        tableBody = tableBody + "</tr>"
    }
    document.getElementById('scheduleBody').innerHTML = tableBody;
}


function formTime(time) {
    var hour = time.split(":")[0];
    var min = time.split(":")[1];
    if (hour > 12) {//PM
        hour = hour - 12;
        var formatted = hour + ":" + min + " PM";
        return formatted;
    }
    else {
        var formatted = hour + ":" + min + " AM";
        return formatted;
    }
}

function Event(date, time, name, info, important, id, colPos, rowPos) {
    this.date = date;
    this.time = time;
    this.name = name;
    this.info = info;
    this.important = important;
    this.id = id;
    this.colPos = colPos;
    this.rowPos = rowPos;
    this.important = important;
}

function clearEventModal() {
    document.getElementById('selectedDate').value = ""; //Resets hidden date field
    document.getElementById("modalBody").innerHTML = "";
    document.getElementById("modalBody").innerHTML = " <div class=\"modal-body\" id=\"modalBody\">\n" +
        "\n" +
        "                <div class=\"form-group\">\n" +
        "                    <label for=\"date\">Date: </label>\n" +
        "\n" +
        "                    <div class=\"dropdown\">\n" +
        "                        <button id=\"date\" name=\"date\" class=\"btn btn-primary dropdown-toggle\" type=\"button\"\n" +
        "                                data-toggle=\"dropdown\">Select Day\n" +
        "                            <span class=\"caret\"></span></button>\n" +
        "                        <ul class=\"dropdown-menu\">\n" +
        "                            <li onmousedown=\"selectDate(this)\"><a href=\"#!\">Monday</a></li>\n" +
        "                            <li onmousedown=\"selectDate(this)\"><a href=\"#!\">Tuesday</a></li>\n" +
        "                            <li onmousedown=\"selectDate(this)\"><a href=\"#!\">Wednesday</a></li>\n" +
        "                            <li onmousedown=\"selectDate(this)\"><a href=\"#!\">Thursday</a></li>\n" +
        "                            <li onmousedown=\"selectDate(this)\"><a href=\"#!\">Friday</a></li>\n" +
        "                            <li onmousedown=\"selectDate(this)\"><a href=\"#!\">Saturday</a></li>\n" +
        "                            <li onmousedown=\"selectDate(this)\"><a href=\"#!\">Sunday</a></li>\n" +
        "                        </ul>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"form-group col-lg-7\">\n" +
        "                        <label for=\"time\">Time: </label>\n" +
        "                        <input id=\"time\" name=\"time\" type=\"time\" class=\"form-control\">\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "                <div class=\"row\"></div>\n" +
        "\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"form-group col-xs-3 col-lg-7 \">\n" +
        "\n" +
        "                        <label for=\"eventName\">Title: </label>\n" +
        "                        <input id=\"eventName\" name=\"eventName\" type=\"text\" class=\"form-control\">\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"form-group col-xs-3 col-lg-7 \">\n" +
        "                        <label for=\"eventInfo\">Description: </label>\n" +
        "                        <textarea id=\"eventInfo\" name=\"eventInfo\" class=\"form-control\"></textarea>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"form-group col-xs-5 col-lg-2 \">\n" +
        "                        <label for=\"important\">Important: </label>\n" +
        "                        <input type=\"checkbox\" class=\"form-control\" id=\"important\">\n" +
        "                    </div>\n" +
        "                    <div class=\"form-group col-xs-5 col-lg-2 \">\n" +
        "                        <label for=\"repeat\">Repeat: </label>\n" +
        "                        <input type=\"checkbox\" class=\"form-control\" id=\"repeat\">\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";
}

function selectDate(listItem) {
    document.getElementById('selectedDate').value = listItem.innerText;
    document.getElementById('date').innerHTML = listItem.innerText;
}

function selectColor(listItem) {
    document.getElementById('colorPick').innerHTML = listItem.innerText;
    let color = listItem.innerText.trim();
    if (color === "Blue") eventColor = "primary";
    else if (color === "Light Blue") eventColor = "info";
    else if (color === "Gray") eventColor = "secondary";
    else if (color === "Yellow") eventColor = "warning";
    else if (color === "Red") eventColor = "danger";
    else if (color === "Green") eventColor = "success";
    else return "Not a color";
}

function determineDay(date) {
    date = String(date).trim();
    if (date === "Monday") return 1;
    else if (date === "Tuesday") return 2;
    else if (date === "Wednesday") return 3;
    else if (date === "Thursday") return 4;
    else if (date === "Friday") return 5;
    else if (date === "Saturday") return 6;
    else if (date === "Sunday") return 7;
    else return "Not a Day";
}

function deleteTheEvent(e) {
    console.log(e);
    for(let i = 0; i<eventList.length; i++){
        if(eventList[i]== e){
           eventList[i]="";
        }
        fillEmptySchedule();
        displayEvents();
    }
}

function editTheEvent(event) {
    //Needs to be done through database
}

function create() {
    var date = document.getElementById('selectedDate').value;
    var time = document.getElementById('time').value;
    var name = document.getElementById('eventName').value;
    var info = document.getElementById('eventInfo').value;
    var important = document.getElementById('important').checked;

    var stringTime = formTime(time);
    var formatTime = time.split(':');
    var startHour = formatTime[0];
    var rowPos = startHour - dayStartHour + 1;
    var colPos = determineDay(date);

    var eventID = document.getElementById('eventID').value;
    eventID = parseInt(eventID);
    eventID = eventID + 1;
    document.getElementById('eventID').value = eventID;

    if (!date) {
        alert("You need to select a day!");
        return -1;
    }
    if (!time) {
        alert("Select a time for the event.");
        $('#modal').modal('show'); //Brings back the event prompt so users can fix error
        return -1;
    }
    if (startHour < dayStartHour || startHour > (dayStartHour + hoursOfficeisOpen)) {
        if (dayStartHour > 12) {
            formattedStartHour = dayStartHour - 12;
            formattedStartHour += " PM";
            formattedEnd = dayStartHour + hoursOfficeisOpen - 12 + " PM";
            alert("Select a time within operating hours. Operating hours are between "
                + formattedStartHour + " and " + formattedEnd);
            $('#modal').modal('show'); //Brings back the event prompt so users can fix error
            return -1;
        }
        else {
            formattedStartHour = dayStartHour;
            formattedStartHour += " AM";
            if (hoursOfficeisOpen + dayStartHour > 12) {
                endHour = hoursOfficeisOpen + dayStartHour - 12;
                endHour += " PM";
            }
            else {
                endHour = hoursOfficeisOpen + dayStartHour;
                endHour += " PM";
            }
            alert("Select a time within operating hours. Operating hours are between "
                + formattedStartHour + " and " + endHour);
            $('#modal').modal('show'); //Brings back the event prompt so users can fix error
            return -1;
        }

    }
    if (!name) {
        alert("Your event needs a title!");
        $('#modal').modal('show'); //Brings back the event prompt so users can fix error
        return -1;
    }


    var newEvent = new Event(date, stringTime, name, info, important, eventID, colPos, rowPos);
    eventList.unshift(newEvent);
    displayEvents();
    //resetting the modal after a new event has been entered
    clearEventModal();
}

function displayEvents() {
    fillEmptySchedule();//Clears events already in schedule

    for (let i = 0; i < eventList.length; i++) {
        var schedule = document.getElementById('schedule');
        let e = eventList[i];
        let editButton = "<button class='btn btn-small btn-warning' onclick='editTheEvent(e)'>Edit</button>";
        let deleteButton = "<button class='btn btn-small btn-danger' onclick='deleteTheEvent(e)'>Delete</button>";

        if (eventList[i].important) {
            schedule.rows[eventList[i].rowPos].cells[eventList[i].colPos].innerHTML +=
                "<button id=\"event" + eventList[i].id + "\" type=\"button\" " +
                "class=\"btn btn-" + eventColor + " btn-small\" data-toggle=\"popover\"\n" +
                "   title=\"" + "!- " + eventList[i].name + " -!" + "\" data-html ='true' data-content=\"Time: " +
                eventList[i].time + " \<br><br>Description:<br> " + eventList[i].info + " \<br><br>" +
                "<br>" + editButton + deleteButton +
                "\">" + "!-" + eventList[i].name + "-!" + "</button>";
        }
        else {
            schedule.rows[eventList[i].rowPos].cells[eventList[i].colPos].innerHTML +=
                "<button id=\"event" + eventList[i].id + "\" type=\"button\" " +
                "class=\"btn btn-" + eventColor + " btn-small\" data-toggle=\"popover\"\n" +
                "   title=\""  + eventList[i].name + "\" data-html ='true' data-content=\"Time: " +
                eventList[i].time + " \<br><br>Description:<br> " + eventList[i].info + " \<br><br>" +
                "<br><button class='btn btn-small btn-warning' onclick='editTheEvent(e)'>Edit</button>" +
                "<button class='btn btn-small btn-danger' onclick='deleteTheEvent(e)'>Delete</button> " +

                "\">" + eventList[i].name + "</button>";
        }
        $(document).ready(function () {
            $('[data-toggle="popover"]').popover();
        }); //This gets the popover to initialize.
    }
}


//Saving and loading events should be done once we have a database setup
function saveEvent(event) {
}

function loadEvent(event) {
}

