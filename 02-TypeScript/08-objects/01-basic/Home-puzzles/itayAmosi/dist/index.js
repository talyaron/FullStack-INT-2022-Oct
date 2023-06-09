var Black_Adam = {
    name: 'Black_Adam',
    parice: 44.99,
    Last_rental: 25 - 4 - 2021,
    rented: 'No',
    type_of_movie: 'Action'
};
var Spirited = {
    name: 'Spirited',
    parice: 34.99,
    Last_rental: 20 - 11 - 2022,
    rented: 'Yes',
    type_of_movie: 'Musical/Comedy'
};
var Emancipation = {
    name: 'Emancipation',
    parice: 69.99,
    Last_rental: 31 - 11 - 2022,
    rented: 'Yes',
    type_of_movie: 'Drama/Action'
};
var Nope = {
    name: 'Nope',
    parice: 39.99,
    Last_rental: 5 - 4 - 2019,
    rented: 'No',
    type_of_movie: 'Horror'
};
var tomer = {
    name: 'Tomer',
    age: 21,
    Address: 'Rachel the poet, 65, Haifa',
    phone: 5896523
};
var matan = {
    name: 'Matan',
    age: 46,
    Address: 'Moses Nussbaum, 23, Tel Aviv',
    phone: 2232325
};
var Welcome = prompt("Welcome to BLOCKBUSTER\nEnter a username and click OK");
var enter = function () {
    try {
        if (Welcome == ' ' || !Welcome) {
            alert("It is not possible to register without a username\n  Please refresh the site and enter a username again");
            enter();
        }
        else {
            alert("Hi," + Welcome + ",\n      thanks for signing up!");
            return Welcome;
        }
    }
    catch (error) { }
};
enter();
console.log("A username has been entered: " + Welcome);
var dollarToShekel = function (dTS) {
    try {
        return dTS * 3.35;
    }
    catch (error) {
        alert("Error");
        console.error(Error);
        return false;
    }
};
var myButton1 = document.getElementById('Black_Adam');
var clickedRent = myButton1.click;
myButton1.addEventListener("click", function (e) {
    ;
    +alert("this movie rent by " + matan.name + "\n  is " + matan.age + " years old\n  and is lives in " + matan.Address + "\n  is phone number " + matan.phone);
});
var myButton2 = document.getElementById('Spirited');
var clickedNoRent = myButton2.click;
myButton2.addEventListener("click", function (e) {
    alert("this move is no rent by nobody!\n    You can rent the movie for " + Spirited.parice + " Dollars,\n    (Enter OK to Continue to Rent)");
    if (myButton2) {
        return alert("Thanks " + Welcome + " You rented the movie for " + Spirited.parice + ",\n      by the way the price in shekels is " + dollarToShekel(Spirited.parice) + ".");
    }
});
var myButton3 = document.getElementById('Emancipation');
var clickedRent2 = myButton3.click;
myButton3.addEventListener("click", function (e) {
    ;
    +alert("this movie rent by " + tomer.name + "\n  is " + tomer.age + " years old\n  and is lives in " + tomer.Address + "\n  is phone number " + tomer.phone);
});
var comingSoon = document.getElementById('Nope');
var notArrived = comingSoon.click;
comingSoon.addEventListener("click", function (e) {
    alert("this movie Not Arrived");
});
var comingSoon2 = document.getElementById('White_Noise');
var notArrived2 = comingSoon2.click;
comingSoon2.addEventListener("click", function (e) {
    alert("this movie Not Arrived");
});
var comingSoon3 = document.getElementById('Strange_World');
var notArrived3 = comingSoon3.click;
comingSoon3.addEventListener("click", function (e) {
    alert("this movie Not Arrived");
});
var checkMoney1 = document.getElementById('checkMoney1');
var clicked1 = checkMoney1.click;
checkMoney1.addEventListener("click", function (e) {
    alert("44.99 dollars,\n  Click OK for the rental and the price in shekels ");
    try {
        if (myButton1) {
            return alert("This movie is already rented by " + matan.name + ",\n       by the way its price is " + dollarToShekel(Black_Adam.parice) + " Shekels");
        }
    }
    catch (error) { }
});
var checkMoney2 = document.getElementById('checkMoney2');
var clicked2 = checkMoney2.click;
checkMoney2.addEventListener("click", function (e) {
    alert(Spirited.parice + " Dollars,\n  Click OK for the rental and the price in shekels ");
    try {
        if (myButton1) {
            return alert(dollarToShekel(Spirited.parice) + " in shekel");
        }
    }
    catch (error) { }
});
var checkMoney3 = document.getElementById('checkMoney3');
var clicked3 = checkMoney3.click;
checkMoney3.addEventListener("click", function (e) {
    alert(Emancipation.parice + " Dollars,\n  Click OK for the rental and the price in shekels ");
    try {
        if (myButton3) {
            return alert("This movie is already rented by " + tomer.name + ",\n       by the way its price is " + dollarToShekel(Emancipation.parice) + " Shekels");
        }
    }
    catch (error) { }
});
