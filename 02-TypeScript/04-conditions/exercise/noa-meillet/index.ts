alert("First exercise");

var password = prompt("Please enter the password:");
if(password == "open sesami"){
    alert("you got all the gold in the cave");
} else {
    alert("You are done!");
}

alert("Second exercise");

var priceStr = prompt("Please enter the price of the item:");
if (priceStr){
    var price = parseInt(priceStr);
    if(!isNaN(price)){
        if (price > 0){
            alert("The price of the item after vat is " + price*1.17);
        } else if (price <0){
            alert("The price of the item can not be less then 0...");
        } else {
            alert("The item is FREE!!!!!");
        }
    } else {
        alert("You didnt put a number");
    }
} else {
    alert("You should enter something");
}

alert("Third exercise");

var loan;var years;var yearlyPrc;
var loanStr = prompt("Please enter the loan amount you need:");
if (loanStr){
    loan = parseInt(loanStr);
    if(!isNaN(loan)){
    } else {
        alert("You didnt put a number");
    }
} else {
    alert("You should enter something");
}
var yearsStr = prompt("Please enter in how much year you will return the loan:");
if (yearsStr){
    years = parseInt(yearsStr);
    if(!isNaN(years)){
    } else {
        alert("You didnt put a number");
    }
} else {
    alert("You should enter something");
}
var yearlyPrcStr = prompt("Please the yearly percentage:");
if (yearlyPrcStr){
    yearlyPrc = parseInt(yearlyPrcStr);
    if(!isNaN(yearlyPrc)){
    } else {
        alert("You didnt put a number");
    }
} else {
    alert("You should enter something");
}
var finalLoan= loan+(loan/yearlyPrc*years);
alert (`for a loan of ${loan} for ${years} years, with a yearly percentage of ${yearlyPrc}%, you will return in the end ${finalLoan}`);
