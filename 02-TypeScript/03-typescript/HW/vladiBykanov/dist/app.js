// const main = document.querySelector('.main')
var nameInput = document.getElementById('name');
var ageInput = document.getElementById('age');
var output = document.querySelector('.output');
var totalAge = 0;
var totalPpl = 0;
window.addEventListener('keydown', function (e) {
    if (e.key == 'Enter' && !nameInput.value == '' && !ageInput.value == '') {
        console.log('check');
        totalAge += parseInt(ageInput.value);
        totalPpl++;
        ageInput.value = '';
    }
});
// let nameOne = 'vladi'
// let nameTwo = 'itay'
// let ageOne = 33
// let ageTwo = 25
// let avrage = (ageOne + ageTwo) / 2
// let output = `The avrage age of ${nameOne} and ${nameTwo} is ${avrage}`
// console.log(output)
