 // Get the input and button elements from the DOM
 let numberInput: HTMLInputElement = document.getElementById('numberInput') as HTMLInputElement;
 let submitButton: HTMLButtonElement = document.getElementById('submitButton') as HTMLButtonElement;
 let result: HTMLElement = document.getElementById('result');

 // Add an event listener to the button that runs when the form is submitted
 submitButton.addEventListener('click', (event: Event) => {
   // Prevent the form from refreshing the page
   event.preventDefault();

   // Get the value of the number input
   let number: number = parseInt(numberInput.value);

   // Create a variable that gets the power of the first variable
   let power: number = number ** 2;

   // Set the text of the result element to the power
   result.textContent = `The power of ${number} is ${power}.`;
   console.log(`The power of ${number} is ${power}.`);
 });