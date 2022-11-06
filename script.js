let saveIconBtn = $(". save-icon");
let container =$(".container");
let time9am = $(document.createElementById('nine'))
let time10am = $(document.createElementById('ten'))
let time11am = $(document.createElementById('eleven'))
let time12pm = $(document.createElementById('tweleve'))
let time1pm = $(document.createElementById('one'))
let time2pm = $(document.createElementById('two'))
let time3pm = $(document.createElementById('three'))
let time4pm = $(document.createElementById('four'))
let time5pm = $(document.createElementById('five'))

function timeUpdate() {
    let today =moment();

    // update the time elemennt in the header
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));

    // for colorging the past,  present, and future time blocks
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

saveDate();
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
    
    let targetText =btnClicked.siblings(textarea);

    let targetTimeBlock = targetText.data("hour");

    localStorage.setItem("time block " + targetTimeBlock, targetText.val());
}

saveIconBtn.on("click", handSubmit);

