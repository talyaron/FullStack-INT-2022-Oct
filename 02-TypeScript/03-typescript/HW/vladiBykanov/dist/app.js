// const main = document.querySelector('.main')
var nameInput = document.getElementById('name');
var ageInput = document.getElementById('salary');
var calculateBtn = document.querySelector('#calculateBtn');
var saveBtn = document.querySelector('#saveBtn');
var resetBtn = document.querySelector('#resetBtn');
var output = document.querySelector('.output');
var salaryArr = [];
var namesArr = [];
var totalPpl = 0;
saveBtn === null || saveBtn === void 0 ? void 0 : saveBtn.addEventListener('click', function () {
    if (nameInput.value == '' || ageInput.value == '') {
        ageInput.value = '';
        nameInput.value = '';
        return output === null || output === void 0 ? void 0 : output.textContent = 'please provide full data';
    }
    salaryArr.push(parseInt(ageInput.value));
    namesArr.push(nameInput.value);
    console.log(salaryArr);
    console.log(namesArr);
    totalPpl++;
    ageInput.value = '';
    nameInput.value = '';
});
calculateBtn === null || calculateBtn === void 0 ? void 0 : calculateBtn.addEventListener('click', function () {
    if (salaryArr.length == 0 || namesArr.length < 0) {
        ageInput.value = '';
        nameInput.value = '';
        return output === null || output === void 0 ? void 0 : output.textContent = 'No Date Entered';
    }
    else if (salaryArr.length < 3 || namesArr.length < 3) {
        return output === null || output === void 0 ? void 0 : output.textContent = 'please provide at least 3 inputs';
    }
    var fullSum = salaryArr.reduce(function (a, b) { return a + b; }, 0);
    var textOutput = "The avrage salaries of " + namesArr.join(', ') + " is " + fullSum / totalPpl;
    output === null || output === void 0 ? void 0 : output.textContent = textOutput;
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', function () {
    output === null || output === void 0 ? void 0 : output.textContent = 'Cleaned';
    if (salaryArr.length == 0 || namesArr.length == 0) {
        ageInput.value = '';
        nameInput.value = '';
        return;
    }
    salaryArr = [];
    namesArr = [];
});
