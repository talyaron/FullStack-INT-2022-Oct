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
var allBooksTitlesArray = [];
for (var i = 0; i < allBooksArray.length; i++) {
    allBooksTitlesArray.push(allBooksArray[i].title);
}
function search(userSearch) {
    try {
        var matches = allBooksTitlesArray.filter(function (search) { return search.includes(userSearch); });
        alert(matches.length + " results: " + matches);
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
function main() {
    try {
        var userSearch = null;
        while (!userSearch) {
            userSearch = prompt("search a book by it's title:");
            if ((userSearch !== "") && (userSearch !== null)) {
                search(userSearch);
            }
            else if (userSearch === "") {
                alert("you didn't enter anything");
            }
            else if (userSearch === null) {
                userSearch = "the user clicked  on cancel";
                alert("bye bye");
            }
        }
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
main();
