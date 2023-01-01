var Black_Adam = {
    name: 'Black_Adam',
    parice: 44.99,
    Last_rental: 25 - 4 - 2021,
    rented: 'No',
    type_of_movie: 'Action'
};
var Spirited = {
    name: 'Spirited',
    parice: 49.99,
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
    phone: 123
};
var matan = {
    name: 'Matan',
    age: 46,
    Address: 'Moses Nussbaum, 23, Tel Aviv',
    phone: 2232325
};
var Welcome = prompt("Welcome to BLOCKBUSTER\nEnter a username and click OK");
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
// const myButton = document.getElementById('myBtn');
// myButton?.addEventListener(`clic`, function (e) {
//   const name = alert(`this move rent`)
//   console.log(name);
// });
