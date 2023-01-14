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


const bookData: HTMLDivElement | null = document.querySelector("#bookData");
if (bookData) {
    for (let i = 0; i < allBooksArray.length; i++) {
        const book = document.createElement("div");
        book.innerHTML = `
        <div id=${allBooksArray[i].sn} class="results__book">
            <span>Title: ${allBooksArray[i].title} </span>
            <span>Price: ${allBooksArray[i].price} </span>
            <span>Genre: ${allBooksArray[i].genre} </span>
            <span>Language: ${allBooksArray[i].language} </span>
            <span>sn: ${allBooksArray[i].sn} </span>
        </div>
        `
        document.querySelector("#bookData")?.appendChild(book);
    }
}


function search(): void {
    try {
        const userInput: HTMLInputElement | null | any= document.querySelector("#userInput");
        userInput?.addEventListener("input", search => {
            let value = search.target?.value;
            value = value.toLocaleLowerCase();
            console.log(`value = ${value}`);

            let x = document.querySelectorAll<HTMLElement>(".results__book");

            for (let i = 0; i < x.length; i++) {
                if (x[i].innerHTML.toLocaleLowerCase().includes(value)) {
                    x[i].style.display = "";
                } else {
                    x[i].style.display = "none";
                }
            }
        })
    }

    catch (error) {
        console.error(error);
        return error;
    }
}