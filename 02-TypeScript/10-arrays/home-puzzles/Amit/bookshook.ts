class Book {
    public constructor(
        public title: string,
        public price: number,
        public genre: string,
        public language: string,
        public sn: number
    ) { }
}

const theLordOfTheRings = new Book("The Lord Of The Rings", 130, "fiction", "english", 4120);
const gameOfThrones = new Book("Game Of Thrones", 120, "fiction", "english", 4130);
const aPigeonAndABoy = new Book("A Pigeon and A Boy", 90, "fiction", "hebrew", 4150);
const fontanelle = new Book("Fontanelle", 90, "fiction", "hebrew", 4274);
const nehamaTheLouse = new Book("Nehama the Louse", 20, "children", "hebrew", 1050);
const myRussianGrandmotherAndHerAmericanVacuum = new Book("My Russian Grandmother and Her American Vacuum", 90, "fiction", "hebrew", 3730);
const lesMiserables = new Book("Les Miserables", 100, "historical", "french", 4285);
const doNotRaiseAHandAgainstTheBoy = new Book("Do Not Raise a Hand Against the Boy", 70, "memoir", "hebrew", 3030);
const fromTheKitchenWithLove = new Book("From The Kitchen With Love", 50, "cooking", "hebrew", 4700);
const aTaleOfFiveBalloons = new Book("A Tale of Five Balloons", 20, "fiction", "hebrew", 2010);

const allBooksArray: Book[] = [theLordOfTheRings, gameOfThrones, aPigeonAndABoy, fontanelle, nehamaTheLouse, myRussianGrandmotherAndHerAmericanVacuum, lesMiserables, doNotRaiseAHandAgainstTheBoy, fromTheKitchenWithLove, aTaleOfFiveBalloons];

const allBooksTitlesArray: string[] = [];
for (let i = 0; i < allBooksArray.length; i++) {
    allBooksTitlesArray.push(allBooksArray[i].title)
}

function search(userSearch: string): void {
    try {
        const matches = allBooksTitlesArray.filter(search => search.includes(userSearch));
        alert(`${matches.length} results: ${matches}`);
    }
    catch (error) {
        console.error(error);
        return error;
    }
}

function main() {
    try {
        let userSearch: string | null | undefined = null;
        while (!userSearch) {
            userSearch = prompt("search a book by it's title:");
            if ((userSearch !== "") && (userSearch !== null)) {
                search(userSearch);
            } else if (userSearch === "") {
                alert("you didn't enter anything");
            } else if (userSearch === null) {
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