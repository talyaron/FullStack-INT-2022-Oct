var _a;
var Book = /** @class */ (function () {
    function Book(title, price, genre, language, sn, camelCaseTitle) {
        this.title = title;
        this.price = price;
        this.genre = genre;
        this.language = language;
        this.sn = sn;
        this.camelCaseTitle = camelCaseTitle;
    }
    return Book;
}());
var theLordOfTheRings = new Book("The Lord Of The Rings", 130, "Fiction", "English", 4120, "theLordOfTheRings");
var theNeverEndingStory = new Book("The Never Ending Story", 120, "Fiction", "English", 4130, "theNeverEndingStory");
var aPigeonAndABoy = new Book("A Pigeon and A Boy", 90, "Fiction", "Hebrew", 4150, "aPigeonAndABoy");
var fontanelle = new Book("Fontanelle", 90, "Fiction", "Hebrew", 4274, "fontanelle");
var nehamaTheLouse = new Book("Nehama the Louse", 20, "Children", "Hebrew", 1050, "nehamaTheLouse");
var myRussianGrandmotherAndHerAmericanVacuum = new Book("My Russian Grandmother and Her American Vacuum", 90, "Auto-biography", "Hebrew", 3730, "myRussianGrandmotherAndHerAmericanVacuum");
var lesMiserables = new Book("Les Miserables", 100, "Historical", "French", 4285, "lesMiserables");
var doNotRaiseAHandAgainstTheBoy = new Book("Do Not Raise a Hand Against the Boy", 70, "Memoir", "Hebrew", 3030, "doNotRaiseAHandAgainstTheBoy");
var fromTheKitchenWithLove = new Book("From The Kitchen With Love", 50, "Cooking", "Hebrew", 4700, "fromTheKitchenWithLove");
var aTaleOfFiveBalloons = new Book("A Tale of Five Balloons", 20, "Children", "Hebrew", 2010, "aTaleOfFiveBalloons");
var allBooksArray = [theLordOfTheRings, theNeverEndingStory, aPigeonAndABoy, fontanelle, nehamaTheLouse, myRussianGrandmotherAndHerAmericanVacuum, lesMiserables, doNotRaiseAHandAgainstTheBoy, fromTheKitchenWithLove, aTaleOfFiveBalloons];
var bookData = document.querySelector("#bookData");
if (bookData) {
    for (var i = 0; i < allBooksArray.length; i++) {
        var book = document.createElement("div");
        book.innerHTML = "\n        <div id=" + allBooksArray[i].sn + " class=\"results__book results__book__image--" + allBooksArray[i].camelCaseTitle + "\">\n            <div class=\"results__book__wrapper\">\n                <span>Title: " + allBooksArray[i].title + " </span>\n                <span>Price: " + allBooksArray[i].price + " NIS </span>\n                <span>Genre: " + allBooksArray[i].genre + " </span>\n                <span>Language: " + allBooksArray[i].language + " </span>\n                <span>sn: " + allBooksArray[i].sn + " </span>\n            </div>    \n        </div>\n        ";
        (_a = document.querySelector("#bookData")) === null || _a === void 0 ? void 0 : _a.appendChild(book);
    }
}
function search() {
    try {
        var userInput = document.querySelector("#userInput");
        userInput === null || userInput === void 0 ? void 0 : userInput.addEventListener("input", function (search) {
            var _a;
            var userInputValue = (_a = search.target) === null || _a === void 0 ? void 0 : _a.value;
            userInputValue = userInputValue.toLocaleLowerCase();
            var results = document.querySelectorAll(".results__book");
            for (var i = 0; i < results.length; i++) {
                if (results[i].innerHTML.toLocaleLowerCase().includes(userInputValue)) {
                    results[i].style.display = "";
                }
                else {
                    results[i].style.display = "none";
                }
            }
        });
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
