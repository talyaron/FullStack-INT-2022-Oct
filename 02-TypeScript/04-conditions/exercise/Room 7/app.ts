// 3)

var loan;
var years;

loan = prompt("Please enter the amount of $ you want to take:");

if (loan) {
    loan =  parseInt(loan);
    if (!isNaN(loan)){
        years = prompt("For how many years?");
        if (years) {
            years =  parseInt(years);
        
            if (!isNaN(years)){
                var interest:number = 1;
                if (years <= 5){
                    interest = 1.2;
                }
                if (years >= 10){
                    interest = 1.3;
                }
                if (years >= 20){
                    interest = 5;
                }

                var totalLoan:number = loan * interest;
                alert(`Your total loan after adding ${interest} yearly percentage ${totalLoan} and your monthly payment will be ${totalLoan/(years*12)}$`);

            } else {
                alert("You didn't enter a number");
            }
        }
 } else {
    alert("You didn't enter a number");
 }
}


// 2)

var num;

num = prompt("Please enter a number:");

if (num) {
    num =  parseInt(num);
    if (!isNaN(num)){
        var total = num*1.17;
                alert(`Your total amount with vat ${total}`);

    } else {
        alert("You didn't enter a number");
    }
}
