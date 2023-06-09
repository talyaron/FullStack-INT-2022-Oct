const formElement = document.getElementById('calculator-form') as HTMLFormElement;
formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputElement = document.getElementById('amount-input') as HTMLInputElement;
  const amount = parseFloat(inputElement.value);
  const vatRate = 1.17;
  const vat = amount * vatRate;
  const total = amount + vat;
  const resultsElement = document.getElementById('results') as HTMLParagraphElement;
  resultsElement.textContent = `VAT: ${vat} | Total: ${total}`;
  console.log(`VAT: ${vat}`);
  console.log(`Total: ${total}`);
});