const dayStartHour = 8; //MILITARY TIME
const hoursOfficeisOpen = 9;

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

function Event(date, time, name, info, important, id) {
    this.date = date;
    this.time = time;
    this.name = name;
    this.info = info;
    this.important = important;
    this.id = id;
}

function clearEvent() {
    document.getElementById("modalBody").innerHTML = "";
    document.getElementById("modalBody").innerHTML = "    <div class=\"modal-body\" id=\"modalBody\">\n" +
        "\n" +
        "                      <div class=\"form-group\">\n" +
        "                          <label for=\"date\">Date: </label>\n" +
        "\n" +
        "                          <div class=\"dropdown\">\n" +
        "                              <button id=\"date\" name=\"date\" class=\"btn btn-primary dropdown-toggle\" type=\"button\"\n" +
        "                                      data-toggle=\"dropdown\">Select Day\n" +
        "                                  <span class=\"caret\"></span></button>\n" +
        "                              <ul class=\"dropdown-menu\">\n" +
        "                                  <li onmousedown=\"selectDate(this)\"><a href=\"#\">Monday</a></li>\n" +
        "                                  <li onmousedown=\"selectDate(this)\"><a href=\"#\">Tuesday</a></li>\n" +
        "                                  <li onmousedown=\"selectDate(this)\"><a href=\"#\">Wednesday</a></li>\n" +
        "                                  <li onmousedown=\"selectDate(this)\"><a href=\"#\">Thursday</a></li>\n" +
        "                                  <li onmousedown=\"selectDate(this)\"><a href=\"#\">Friday</a></li>\n" +
        "                                  <li onmousedown=\"selectDate(this)\"><a href=\"#\">Saturday</a></li>\n" +
        "                                  <li onmousedown=\"selectDate(this)\"><a href=\"#\">Sunday</a></li>\n" +
        "                              </ul>\n" +
        "                          </div>\n" +
        "                      </div>\n" +
        "                      <div class=\"row\">\n" +
        "                          <div class=\"form-group col-lg-7\">\n" +
        "                              <label for=\"time\">Time: </label>\n" +
        "                              <input id=\"time\" name=\"time\" type=\"time\" class=\"form-control\">\n" +
        "                          </div>\n" +
        "                      </div>\n" +
        "\n" +
        "                      <div class=\"row\"></div>\n" +
        "\n" +
        "                      <div class=\"row\">\n" +
        "                          <div class=\"form-group col-xs-3 col-lg-7 \">\n" +
        "\n" +
        "                              <label for=\"eventName\">Title: </label>\n" +
        "                              <input id=\"eventName\" name=\"eventName\" type=\"text\" class=\"form-control\">\n" +
        "                          </div>\n" +
        "                      </div>\n" +
        "                      <div class=\"row\">\n" +
        "                          <div class=\"form-group col-xs-3 col-lg-7 \">\n" +
        "                              <label for=\"eventInfo\">Description: </label>\n" +
        "                              <textarea id=\"eventInfo\" name=\"eventInfo\" class=\"form-control\"></textarea>\n" +
        "                          </div>\n" +
        "                      </div>\n" +
        "\n" +
        "                      <div class=\"row\">\n" +
        "                          <div class=\"form-group col-xs-5 col-lg-2 \">\n" +
        "                              <label for=\"important\">Important: </label>\n" +
        "                              <input type=\"checkbox\" class=\"form-control\" id=\"important\">\n" +
        "                          </div>\n" +
        "                          <div class=\"form-group col-xs-5 col-lg-2 \">\n" +
        "                              <label for=\"repeat\">Repeat </label>\n" +
        "                              <input type=\"checkbox\" class=\"form-control\" id=\"repeat\">\n" +
        "                          </div>\n" +
        "                      </div>\n" +
        "                  </div>";
}

function selectDate(listItem) {
    document.getElementById('selectedDate').value = listItem.innerText;
    document.getElementById('date').innerHTML = listItem.innerText;

}

function determineDay(date) {
    date = String(date).trim();
    if (date === "Monday") return 1;
    else if (date === "Tuesday") return 2;
    else if (date === "Wednesday") return 3;
    else if (date == "Thursday") return 4;
    else if (date === "Friday") return 5;
    else if (date == "Saturday") return 6;
    else if (date == "Sunday") return 7;
    else return "Not a Day";
}

function deleteTheEvent(event) {
    //Needs to be done through database
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
    var schedule = document.getElementById('schedule');

    var eventID = document.getElementById('eventID').value;
    console.log(eventID);
    eventID = parseInt(eventID);
    eventID = eventID + 1;
    document.getElementById('eventID').value = eventID;

    if(!date){
        alert("You need to select a day!");
        return;
    }
    if(!time){
        alert("Select a time for the event.")
        return;
    }
    if(startHour < dayStartHour || startHour > (dayStartHour + hoursOfficeisOpen)){
        alert("Select a time within operating hours.");
        return;
    }
    if(!name){
        alert("Your event needs a title!");
        return;
    }



    var newEvent = new Event(date, time, name, info, eventID);

    if (important) {
        schedule.rows[rowPos].cells[colPos].innerHTML = schedule.rows[rowPos].cells[colPos].innerHTML +
            "<button id=\"event" + eventID + "\" type=\"button\" " +
            "class=\"btn btn-danger btn-small\" data-toggle=\"popover\"\n" +
            "   title=\"" + newEvent.name + "\" data-html ='true' data-content=\"Time: " +
            stringTime + " \<br><br>Description:<br> " + newEvent.info + " \<br><br>" +
            "<br><button class='btn btn-small btn-warning' onclick='" + editTheEvent(newEvent, eventID) + "'>Edit</button>" +
            "<button class='btn btn-small btn-danger' onclick='" + deleteTheEvent(eventID) + "'>Delete</button> " +

            "\">" + newEvent.name + "</button>";
    }
    else {
        schedule.rows[rowPos].cells[colPos].innerHTML = schedule.rows[rowPos].cells[colPos].innerHTML +
            "<button id=\"event" + eventID + "\" type=\"button\" " +
            "class=\"btn btn-success btn-small\" data-toggle=\"popover\"\n" +
            "   title=\"" + newEvent.name + "\" data-html ='true' data-content=\"Time: " +
            stringTime + " \<br><br>Description:<br> " + newEvent.info + " \<br><br>" +
            "<br><button class='btn btn-small btn-warning' onclick='" + editTheEvent(newEvent, eventID) + "'>Edit</button>" +
            "<button class='btn btn-small btn-danger' onclick='" + deleteTheEvent(eventID) + "'>Delete</button> " +

            "\">" + newEvent.name + "</button>";
    }
    $(document).ready(function () {
        $('[data-toggle="popover"]').popover();
    }); //This gets the popover to initialize.
    //resetting the modal after a new event has been entered
    clearEvent();
}


//Saving and loading events should be done once we have a database setup
function saveEvent(event) {
}

function loadEvent(event) {
}
