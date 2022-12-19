var numberInput = document.getElementById('numberInput');
var submitButton = document.getElementById('submitButton');
var result = document.getElementById('result');
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    var number = parseInt(numberInput.value);
    var power = Math.pow(number, 2);
    result.textContent = "The power of " + number + " is " + power + ".";
    console.log("The power of " + number + " is " + power + ".");
});
