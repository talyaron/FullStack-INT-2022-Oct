function reversedNum(num) {
    return (parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num));
}
//arrow function returns reversed number as a string
var revNum = function (num) {
    return (parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)).toString();
};
console.log(reversedNum(123456789));
console.log(reversedNum(-123456789));
console.log(revNum(32546758654));
console.log(revNum(-6754341232145364));
var inputNumber = document.querySelector("#number");
var output = document.querySelector("#output");
inputNumber.addEventListener("keydown", function (e) {
    e.defaultPrevented;
    if (e.key == "Enter") {
        output.textContent = revNum(parseFloat(inputNumber.value));
        inputNumber.value = '';
    }
});
