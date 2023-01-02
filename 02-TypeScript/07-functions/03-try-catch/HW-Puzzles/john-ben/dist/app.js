function Multiplication(x, y, z) {
    try {
        if (isNaN(x) || isNaN(y) || isNaN(z)) {
            throw new Error('Argument should be a number');
        }
        return x * y * z;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var answer1 = prompt("give me a number please");
var answer2 = prompt("give me a number please");
var answer3 = prompt("give me a number please");
var result = Multiplication(answer1, answer2, answer3);
if (result && !isNaN(result)) {
    alert("Your number returned as " + result);
}
else {
    alert("we have an error");
}
