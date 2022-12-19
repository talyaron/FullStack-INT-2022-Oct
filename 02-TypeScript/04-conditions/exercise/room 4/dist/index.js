var loanAmount;
var yearlyPre;
var years;
var loanAmountStr = prompt('enter loan amount:');
if (loanAmountStr) {
    loanAmount = parseInt(loanAmountStr);
    if (isNaN(loanAmount)) {
        while (true) {
            alert("You didnt put a number please reload page");
        }
    }
}
var yearlyPreStr = prompt('enter yearly increase %:');
if (yearlyPreStr) {
    yearlyPre = parseInt(yearlyPreStr);
    if (isNaN(yearlyPre)) {
        alert("You didnt put a number");
        while (true) {
            alert("You didnt put a number please reload page");
        }
    }
}
var yearsStr = prompt('how many years');
if (yearsStr) {
    years = parseInt(yearsStr);
    if (isNaN(years)) {
        alert("You didnt put a number");
        while (true) {
            alert("You didnt put a number please reload page");
        }
    }
}
var joeBidenStr;
if (yearlyPre < 50) {
    joeBidenStr = prompt("would you like a loan from gray shark?");
    if (joeBidenStr) {
        alert(' how nice of you to accept our conditions');
        loanAmount = 200000;
        yearlyPre = 1.50;
        alert("you will have to pay " + loanAmount * Math.pow(yearlyPre, years));
    }
}
if (!joeBidenStr) {
    yearlyPre = (yearlyPre + 100) / 100;
    alert("you will have to pay " + loanAmount * Math.pow(yearlyPre, years));
    alert("mam = " + loanAmount / 1.17);
    alert("mam = " + loanAmount * 1.17);
}
