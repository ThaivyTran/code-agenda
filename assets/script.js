function updateTime() { // update time
    let today = moment();
    // set the time element in the header so it appears
    $("#current-date").text(today.format("dddd, MMMM Do YYYY"));
    // timeblock is color coded to indicate whether it is in the past(grey), present(red), or future(green)
    let now = moment().format("kk");
    for (let i = 0; i < scheduleElArray.length; i++) {
        scheduleElArray[i].removeClass("future past present");
        if (now > scheduleElArray[i].data("hour")) {
            scheduleElArray[i].addClass("past");
        } else if (now === scheduleElArray[i].attr("data-hour")) {
            scheduleElArray[i].addClass("present");
        } else {
            scheduleElArray[i].addClass("future");
        }
    }
}

// Linking HTML tags into JS tags
let saveBtn = $(".save-Btn");
let containerEl = $(".container");
let schedule9am = $("#9AM");
let schedule10am = $("#10AM");
let schedule11am = $("#11AM");
let schedule12pm = $("#12PM");
let schedule1pm = $("#1PM");
let schedule2pm = $("#2PM");
let schedule3pm = $("#3PM");
let schedule4pm = $("#4PM");
let schedule5pm = $("#5PM");

//array for time
let scheduleElArray = [
    schedule9am,
    schedule10am,
    schedule11am,
    schedule12pm,
    schedule1pm,
    schedule2pm,
    schedule3pm,
    schedule4pm,
    schedule5pm,
];

renderLastRegistered();
updateTime();
setInterval(updateTime, 1000); 

// render schedule saved in users local storage
function renderLastRegistered() {
    for (let el of scheduleElArray) {
        el.val(localStorage.getItem("time block " + el.data("hour")));

    }
}
// To save reminder 
function handleFormSubmit(event) {
    event.preventDefault();
    let btnClicked = $(event.currentTarget);
    let targetText = btnClicked.siblings("textarea");
    let targetTimeBlock = targetText.data("hour");
    localStorage.setItem("time block " +  targetTimeBlock, targetText.val());
}
saveBtn.on("click", handleFormSubmit);
