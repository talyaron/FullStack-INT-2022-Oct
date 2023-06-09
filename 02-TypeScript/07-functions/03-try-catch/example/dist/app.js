function someFunction(x) {
    try {
        if (typeof x !== 'number') {
            throw new Error('Argument should be a number');
        }
        return x / 0;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var answer = prompt("give me a number please");
var result = someFunction(answer);
if (result && !isNaN(result)) {
    alert("Your number returned as " + result);
}
else {
    alert("we have an error");
}
