
 let numberInput: HTMLInputElement = document.getElementById('numberInput') as HTMLInputElement;
 let submitButton: HTMLButtonElement = document.getElementById('submitButton') as HTMLButtonElement;
 let result: HTMLElement = document.getElementById('result');


 submitButton.addEventListener('click', (event: Event) => {
   event.preventDefault();
   let number: number = parseInt(numberInput.value);
   let power: number = number ** 2;
   result.textContent = `The power of ${number} is ${power}.`;
   console.log(`The power of ${number} is ${power}.`);
 });