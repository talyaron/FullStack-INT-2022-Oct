var nameInput = document.getElementById('name');
var ageInput = document.getElementById('salary');
var calculateBtn = document.querySelector('#calculateBtn');
var saveBtn = document.querySelector('#saveBtn');
var resetBtn = document.querySelector('#resetBtn');
var makeListBtn = document.querySelector('#makeListBtn');
var output = document.querySelector('.output');
var listOutput = document.querySelector('#listOutput');
var inputPage = document.querySelector('.inputPage');
var ulEl = document.querySelector('.listOfNames');
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
var highestPayingJobs = {
    'Cardiologist': 353970,
    'Anesthesiologist': 331190,
    'Oral and Maxillofacial Surgeon': 311460,
    'Emergency Medicine Physician': 310640,
    'Orthopedic Surgeon, Except Pediatric': 306220,
    'Dermatologist': 302740,
    'Radiologist': 301720,
    'Surgeon (All Other)': 297800,
    'Obstetrician-Gynecologist': 296210,
    'Pediatric Surgeon': 290310
};
var totalIncome = Object.values(highestPayingJobs).reduce(function (a, b) { return a + b; }, 0);
var jobTitles = Object.keys(highestPayingJobs).join(', ');
var avrageOfIncome = totalIncome / Object.entries(highestPayingJobs).length;
var text = "The 10 highest paying jobs in the US currently are: " + jobTitles + ". And their average income is " + numberWithCommas(avrageOfIncome) + " $ a year";
if (listOutput != null)
    listOutput.textContent = text;
makeListBtn === null || makeListBtn === void 0 ? void 0 : makeListBtn.addEventListener('click', function () {
    inputPage.style.transform = 'translateY(0)';
});
var salaryArr = [];
var namesArr = [];
var totalPpl = 0;
saveBtn === null || saveBtn === void 0 ? void 0 : saveBtn.addEventListener('click', function () {
    if ((nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) == '' || ageInput.value == '') {
        ageInput.value = '';
        nameInput.value = '';
        return output === null || output === void 0 ? void 0 : output.textContent = 'please provide full data';
    }
    else if ((nameInput === null || nameInput === void 0 ? void 0 : nameInput.value.length) < 8)
        return output === null || output === void 0 ? void 0 : output.textContent = 'please provide full name';
    salaryArr.push(parseInt(ageInput.value));
    namesArr.push(nameInput.value);
    console.log(salaryArr);
    console.log(namesArr);
    totalPpl++;
    ageInput.value = '';
    nameInput.value = '';
    output === null || output === void 0 ? void 0 : output.textContent = 'Type in your data';
    renderArr(namesArr);
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
    var lastName = namesArr.pop();
    var textOutput = "The avrage salaries of " + namesArr.join(', ') + " and " + lastName + " is " + numberWithCommas(fullSum / totalPpl) + " \u20AA";
    namesArr.push(lastName);
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
function renderArr(arr) {
    ulEl === null || ulEl === void 0 ? void 0 : ulEl.replaceChildren();
    arr.forEach(function (element) {
        var li = document.createElement('li');
        li.textContent = element;
        ulEl === null || ulEl === void 0 ? void 0 : ulEl.append(li);
    });
}
