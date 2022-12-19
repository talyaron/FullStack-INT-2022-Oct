var output = document.querySelector(".output");
var loanAmount = document.querySelector("#amount");
var loanPeriod = document.querySelector("#period");
var loanPercentage = document.querySelector("#percentage");
window.addEventListener("keydown", function (e) {
    e.defaultPrevented;
    if (e.key == "Enter") {
        console.log("It's working");
        if ((loanAmount === null || loanAmount === void 0 ? void 0 : loanAmount.value) == "" ||
            (loanPeriod === null || loanPeriod === void 0 ? void 0 : loanPeriod.value) == "" ||
            (loanPeriod === null || loanPeriod === void 0 ? void 0 : loanPeriod.value) == "") {
            output.textContent = "Please provide full info";
        }
        else {
            var intAmount = parseInt(loanAmount.value);
            var intPeriod = parseInt(loanPeriod.value);
            var intPercentage = parseInt(loanPercentage.value);
            var finalOutput = calculateLoan(intAmount, intPeriod, intPercentage);
            output.textContent =
                "The amount you will have to pay back when you loan " + intAmount + "$ for " + intPeriod + " years at " + intPercentage + "% a year is: " + finalOutput;
            output === null || output === void 0 ? void 0 : output.style.fontSize = '2rem';
            output === null || output === void 0 ? void 0 : output.style.margin = '2rem';
        }
    }
});
function calculateLoan(amount, period, percentage) {
    return amount * (percentage / 100) * period + amount;
}
