// Get the input and button elements from the DOM
var numberInput = document.getElementById('numberInput');
var submitButton = document.getElementById('submitButton');
var result = document.getElementById('result');
// Add an event listener to the button that runs when the form is submitted
submitButton.addEventListener('click', function (event) {
    // Prevent the form from refreshing the page
    event.preventDefault();
    // Get the value of the number input
    var number = parseInt(numberInput.value);
    // Create a variable that gets the power of the first variable
    var power = Math.pow(number, 2);
    // Set the text of the result element to the power
    result.textContent = "The power of " + number + " is " + power + ".";
    console.log("The power of " + number + " is " + power + ".");
});
