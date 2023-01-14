var Dates = /** @class */ (function () {
    function Dates(day, month, year, hour, minute, second) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.date = function findDate() {
            return this.day + "/" + this.month + "/" + this.year + " " + this.hour + ":" + this.minute + ":" + this.second;
        };
        this.secondsFromDate = function timeElapsed() {
            var inputDate = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
            var secondsElapsed = (clientDate.getFullYear() - inputDate.getFullYear()) * 365 * 24 * 3600 + (clientDate.getMonth() - inputDate.getMonth()) * 30 * 24 * 3600 + (clientDate.getDay() - inputDate.getDay()) * 24 * 3600 + (clientDate.getHours() - inputDate.getHours()) * 3600 + (clientDate.getMinutes() - inputDate.getMinutes()) * 60 + clientDate.getSeconds() - inputDate.getSeconds();
            if (secondsElapsed < 0) {
                return "the date is in " + secondsElapsed * -1;
            }
            else {
                return secondsElapsed + " seconds have passed since that date";
            }
        };
    }
    return Dates;
}());
var clientDate = new Date();
var joeDay = new Dates(20, 1, 2021, 4, 23, 12);
console.log(joeDay.date());
console.log(joeDay.secondsFromDate());
