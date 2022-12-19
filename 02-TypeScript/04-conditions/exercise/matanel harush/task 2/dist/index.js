var formElement = document.getElementById('calculator-form');
formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    var inputElement = document.getElementById('amount-input');
    var amount = parseFloat(inputElement.value);
    var vatRate = 1.17;
    var vat = amount * vatRate;
    var total = amount + vat;
    var resultsElement = document.getElementById('results');
    resultsElement.textContent = "VAT: " + vat + " | Total: " + total;
    console.log("VAT: " + vat);
    console.log("Total: " + total);
});
