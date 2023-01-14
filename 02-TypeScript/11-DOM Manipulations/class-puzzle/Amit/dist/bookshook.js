var _a;
var Book = /** @class */ (function () {
    function Book(title, price, genre, language, sn) {
        this.title = title;
        this.price = price;
        this.genre = genre;
        this.language = language;
        this.sn = sn;
    }
    return Book;
}());
var theLordOfTheRings = new Book("The Lord Of The Rings", 130, "fiction", "english", 4120);
var gameOfThrones = new Book("Game Of Thrones", 120, "fiction", "english", 4130);
var aPigeonAndABoy = new Book("A Pigeon and A Boy", 90, "fiction", "hebrew", 4150);
var fontanelle = new Book("Fontanelle", 90, "fiction", "hebrew", 4274);
var nehamaTheLouse = new Book("Nehama the Louse", 20, "children", "hebrew", 1050);
var myRussianGrandmotherAndHerAmericanVacuum = new Book("My Russian Grandmother and Her American Vacuum", 90, "fiction", "hebrew", 3730);
var lesMiserables = new Book("Les Miserables", 100, "historical", "french", 4285);
var doNotRaiseAHandAgainstTheBoy = new Book("Do Not Raise a Hand Against the Boy", 70, "memoir", "hebrew", 3030);
var fromTheKitchenWithLove = new Book("From The Kitchen With Love", 50, "cooking", "hebrew", 4700);
var aTaleOfFiveBalloons = new Book("A Tale of Five Balloons", 20, "fiction", "hebrew", 2010);
var allBooksArray = [theLordOfTheRings, gameOfThrones, aPigeonAndABoy, fontanelle, nehamaTheLouse, myRussianGrandmotherAndHerAmericanVacuum, lesMiserables, doNotRaiseAHandAgainstTheBoy, fromTheKitchenWithLove, aTaleOfFiveBalloons];
var bookData = document.querySelector("#bookData");
if (bookData) {
    for (var i = 0; i < allBooksArray.length; i++) {
        var book = document.createElement("div");
        book.innerHTML = "\n        <div id=" + allBooksArray[i].sn + " class=\"results__book\">\n            <span>Title: " + allBooksArray[i].title + " </span>\n            <span>Price: " + allBooksArray[i].price + " </span>\n            <span>Genre: " + allBooksArray[i].genre + " </span>\n            <span>Language: " + allBooksArray[i].language + " </span>\n            <span>sn: " + allBooksArray[i].sn + " </span>\n        </div>\n        ";
        (_a = document.querySelector("#bookData")) === null || _a === void 0 ? void 0 : _a.appendChild(book);
    }
}
function search() {
    try {
        var userInput = document.querySelector("#userInput");
        userInput === null || userInput === void 0 ? void 0 : userInput.addEventListener("input", function (search) {
            var _a;
            var value = (_a = search.target) === null || _a === void 0 ? void 0 : _a.value;
            value = value.toLocaleLowerCase();
            console.log("value = " + value);
            var x = document.querySelectorAll(".results__book");
            for (var i = 0; i < x.length; i++) {
                if (x[i].innerHTML.toLocaleLowerCase().includes(value)) {
                    x[i].style.display = "";
                }
                else {
                    x[i].style.display = "none";
                }
            }
        });
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
