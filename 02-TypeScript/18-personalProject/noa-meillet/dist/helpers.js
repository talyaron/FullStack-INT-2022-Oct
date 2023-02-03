function getClubCardsForUser(id) {
    try {
        if (!clubCardsList) {
            console.error("there is no club cards at all");
            return undefined;
        }
        return clubCardsList.filter(function (user) { return user.userId == id; });
    }
    catch (error) {
        console.error("error loading club cards for user");
    }
}
function addOptionToDayOfBirthElement() {
    var dayOfBirth = document.querySelector("#dayOfBirth");
    if (!dayOfBirth)
        console.error("day of birth element don't exist in the program");
    else
        for (var i = 1; i <= 31; i++)
            dayOfBirth.innerHTML += "<option value=\"" + i + "\">" + i + "</option>";
}
function addOptionToMonthOfBirthElement() {
    var monthOfBirth = document.querySelector("#monthOfBirth");
    if (!monthOfBirth)
        console.error("month of birth element don't exist in the program");
    else
        for (var i = 1; i <= 12; i++)
            monthOfBirth.innerHTML += "<option value=\"" + i + "\">" + i + "</option>";
}
function addOptionToYearOfBirthElement() {
    var yearOfBirth = document.querySelector("#yearOfBirth");
    if (!yearOfBirth)
        console.error("year of birth element don't exist in the program");
    else
        for (var i = 1900; i <= 2023; i++)
            yearOfBirth.innerHTML += "<option value=\"" + i + "\">" + i + "</option>";
}
function getAmountOfPoints(storePoints, userPoints) {
    try {
        if (storePoints == -1)
            return "this store do not acumulate points";
        else
            return userPoints;
    }
    catch (error) {
        console.error("error loading amount of points for user");
        return -1;
    }
}
function getBirthdayDiscount(birthdayDiscountDuration, userDateOfBirth) {
    try {
    }
    catch (error) {
        console.error("error loading club cards for user");
    }
}
