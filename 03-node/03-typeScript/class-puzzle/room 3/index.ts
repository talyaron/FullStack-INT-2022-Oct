// const reverseNumber = require("reverse_array_number");
// const number = reverseNumber([1, 2, 3, 4, 5]);

// console.log(number);
const sing = require('song')();
sing([
    {
        note : 'E3',
        durations : [ { beats : 0.3, text : 'hello' } ]
    },
    {
        note : 'F#4',
        durations : [ { beats : 0.3, text : 'cruel' } ]
    },
    {
        note : 'C3',
        durations : [ { beats : 0.3, text : 'world' } ]
    },
]);

console.log(sing)
