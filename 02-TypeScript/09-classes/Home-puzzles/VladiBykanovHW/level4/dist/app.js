var Dates = /** @class */ (function () {
    function Dates(date) {
        this.date = date;
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.seconds = date.getSeconds();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.day = parseInt(JSON.stringify(date).slice(9, 11));
    }
    Dates.prototype.dateFormat = function () {
        try {
            var dateToString = JSON.stringify(this.date)
                .replace(/[A-Z"]/g, " ")
                .trim()
                .split(" ");
            var properDateFormat = this.day + "/" + this.month + "/" + this.year;
            return "Date Entered: " + properDateFormat + " at " + dateToString[1];
        }
        catch (error) {
            console.log(error);
            return false;
        }
    };
    Dates.prototype.timePassed = function () {
        try {
            var theTimeOfUserInput = this.date.getTime();
            var currentTime = new Date().getTime();
            var timePassed_1 = (currentTime - theTimeOfUserInput) / 1000;
            return timePassed_1 + " seconds passed since this date was created";
        }
        catch (error) {
            console.log(error);
            return false;
        }
    };
    return Dates;
}());
var aDate = new Date();
var newDate = new Dates(aDate);
console.log(aDate);
console.log(newDate);
console.log(newDate.hour);
console.log(newDate.minute);
console.log(newDate.seconds);
console.log(newDate.year);
console.log(newDate.month);
console.log(newDate.day);
console.log(newDate.timePassed());
console.log(newDate.dateFormat());
// created an app that will tell you how long have passed since your birth
var userInput = document.querySelector("#userInput");
var ulEl = document.querySelector(".appContainer__output");
var miliToSeconds = 1000;
var miliToMinutes = 1000 * 60;
var miliToHours = 1000 * 60 * 60;
var miliToDays = 1000 * 60 * 60 * 24;
var miliToWeeks = 1000 * 60 * 60 * 24 * 7;
var miliToYears = 1000 * 60 * 60 * 24 * 365;
window.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && userInput.value) {
        // const currentTime = new Date().getTime() / (1000 * 60);
        // const timeEntered = new Date(userInput.value);
        // console.log(timeEntered.getFullYear())
        timePassed(miliToSeconds, "Seconds");
        timePassed(miliToMinutes, "Minutes");
        timePassed(miliToHours, "Hours");
        timePassed(miliToDays, "Days");
        timePassed(miliToWeeks, "Weeks");
        timePassed(miliToYears, "Years");
    }
});
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var timePassed = function (convertRatio, timeName) {
    try {
        var currentTime = new Date().getTime() / convertRatio;
        var timeEntered = Date.parse(userInput.value) / convertRatio;
        var difference = currentTime - timeEntered;
        var li = document.createElement("li");
        li.textContent = timeName + ": " + numberWithCommas(Math.floor(difference));
        ulEl.append(li);
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
// output.textContent = numberWithCommas((currentTime - timeEntered).toFixed());
