var threeNumbers = function (num1, num2, num3) {
    try {
        if (typeof num1 !== "number" ||
            typeof num2 !== "number" ||
            typeof num3 !== "number") {
            throw new Error("not a number");
        }
        return num1 * num2 * num3;
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
var numberAllow = true;
function main() {
    var num1 = prompt("what is your first number");
    var num2 = prompt("what is your second number");
    var num3 = prompt("what is your third number");
    var result = threeNumbers(parseInt(num1), parseInt(num2), parseInt(num3));
    console.log(result);
}
main();
