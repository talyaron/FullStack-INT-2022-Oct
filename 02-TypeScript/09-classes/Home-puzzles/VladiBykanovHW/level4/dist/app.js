var Dates = /** @class */ (function () {
    function Dates(date) {
        this.date = date;
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.seconds = date.getSeconds();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.day = date.getDay() + 1;
    }
    Dates.prototype.dateFormat = function () {
        var dateToString = JSON.stringify(this.date)
            .replace(/[A-Z"]/g, " ")
            .trim()
            .split(" ");
        var properDateFormat = this.day + "/" + this.month + "/" + this.year;
        return "Date Entered: " + properDateFormat + " at " + dateToString[1];
    };
    Dates.prototype.timePassed = function () {
        var theTimeOfUserInput = this.date.getTime();
        var currentTime = new Date().getTime();
        var timePassed = (currentTime - theTimeOfUserInput) / 1000;
        return timePassed + " seconds past from that date";
    };
    return Dates;
}());
var aDate = new Date();
var newDate = new Dates(aDate);
console.log(newDate);
console.log(newDate.hour);
console.log(newDate.minute);
console.log(newDate.seconds);
console.log(newDate.year);
console.log(newDate.month);
console.log(newDate.day);
console.log(newDate.timePassed());
console.log(newDate.dateFormat());
var userInput = document.querySelector("#userInput");
var output = document.querySelector(".output");
window.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && userInput.value) {
        var currentTime = new Date().getTime() / (1000 * 60);
        var timeEntered = Date.parse(userInput.value) / (1000 * 60);
        output.textContent = numberWithCommas((currentTime - timeEntered).toFixed());
    }
});
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
