let saveIconBtn = $(".save-icon");
let container =$(".container");
let time9am = $(document.getElementById('nine'))
let time10am = $(document.getElementById('ten'))
let time11am = $(document.getElementById('eleven'))
let time12pm = $(document.getElementById('tweleve'))
let time1pm = $(document.getElementById('one'))
let time2pm = $(document.getElementById('two'))
let time3pm = $(document.getElementById('three'))
let time4pm = $(document.getElementById('four'))
let time5pm = $(document.getElementById('five'))

function timeUpdate() {
    let today = moment();

    // update the time elemennt in the header
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));

    // for coloring the past,  present, and future time blocks
    let now = moment().format("kk");
    for (let i = 0; i < scheduleTime.length; i++) {
        scheduleTime[i].removeClass("present past future");

        if (now > scheduleTime[i].data("hour")) {
            scheduleTime[i].addClass("past");

        } else if (now === scheduleTime[i].attr("data-hour")) {
            scheduleTime[i].addClass("present");

        } else {

            scheduleTime[i].addClass("future");
        }
    }
}

let scheduleTime = [
    time9am,
    time10am,
    time11am,
    time12pm,
    time1pm,
    time2pm,
    time3pm,
    time4pm,
    time5pm,
];

saveData();
timeUpdate();
setInterval(timeUpdate, 1000);

function saveData() {
    for(let i = 0; i < scheduleTime.length; i++) {
        scheduleTime[i].val(localStorage.getItem("time block " + scheduleTime[i].data("hour")));
    }
}

function handleSubmit(e) {
    e.preventDefault();

    let btnClicked = $(e.currentTarget);
    
    let targetText =btnClicked.siblings("textarea");

    let targetTimeBlock = targetText.data("hour");

    localStorage.setItem("time block " + targetTimeBlock, targetText.val());
}

saveIconBtn.on("click", handleSubmit);

