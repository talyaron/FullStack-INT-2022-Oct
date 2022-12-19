//1) get a password from the user, and if the password is "open sesami",
// then say "you got all the gold in the cave" else say "You are done!"

//test 1

// var password = prompt(`enter a password`);

// if(password == `open sesami`){
//     alert(`you got all the gold in the cave`);
// } else {
//     alert(`you are done`)
// }

//test2

// var amountStr = prompt(`enter a amount`);

// var amount= parseInt(amountStr);

// var vat= amount*1.17;

// alert(vat);

//test3//

var loanamountStr= prompt(`enter loan amount`);

// var loanamount= parseInt(loanamountStr);

var yearlyprecentageStr= prompt(`enter yearly precentage`);

// var yearlyprecentage= parseInt(yearlyprecentageStr);
 
var yearsStr= prompt(`for how many years`);

// var years= parseInt(yearsStr);


var result= loanamount*yearlyprecentage*years;
alert(result);