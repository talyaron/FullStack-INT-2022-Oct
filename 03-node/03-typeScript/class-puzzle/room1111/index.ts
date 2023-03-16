var Stopwatch = require('timer-stopwatch');

var timer = new Stopwatch(60000); // A new countdown timer with 60 seconds
var stopwatch = new Stopwatch(); // 


timer.onTime(function(time) {
    console.log(time.ms); // number of milliseconds past (or remaining);
});
 