class Book {
  public constructor(
    public title: string,
    public price: number,
    public genre: string,
    public language: string,
    public sn: number,
    public camelCaseTitle: string
  ) {}
}

const theLordOfTheRings = new Book(
  "The Lord Of The Rings",
  130,
  "Fiction",
  "English",
  4120,
  "theLordOfTheRings"
);
const theNeverEndingStory = new Book(
  "The Never Ending Story",
  120,
  "Fiction",
  "English",
  4130,
  "theNeverEndingStory"
);
const aPigeonAndABoy = new Book(
  "A Pigeon and A Boy",
  90,
  "Fiction",
  "Hebrew",
  4150,
  "aPigeonAndABoy"
);
const fontanelle = new Book(
  "Fontanelle",
  90,
  "Fiction",
  "Hebrew",
  4274,
  "fontanelle"
);
const nehamaTheLouse = new Book(
  "Nehama the Louse",
  20,
  "Children",
  "Hebrew",
  1050,
  "nehamaTheLouse"
);
const myRussianGrandmotherAndHerAmericanVacuum = new Book(
  "My Russian Grandmother and Her American Vacuum",
  90,
  "Auto-biography",
  "Hebrew",
  3730,
  "myRussianGrandmotherAndHerAmericanVacuum"
);
const lesMiserables = new Book(
  "Les Miserables",
  100,
  "Historical",
  "French",
  4285,
  "lesMiserables"
);
const doNotRaiseAHandAgainstTheBoy = new Book(
  "Do Not Raise a Hand Against the Boy",
  70,
  "Memoir",
  "Hebrew",
  3030,
  "doNotRaiseAHandAgainstTheBoy"
);
const fromTheKitchenWithLove = new Book(
  "From The Kitchen With Love",
  50,
  "Cooking",
  "Hebrew",
  4700,
  "fromTheKitchenWithLove"
);
const aTaleOfFiveBalloons = new Book(
  "A Tale of Five Balloons",
  20,
  "Children",
  "Hebrew",
  2010,
  "aTaleOfFiveBalloons"
);

const allBooksArray: Book[] = [
  theLordOfTheRings,
  theNeverEndingStory,
  aPigeonAndABoy,
  fontanelle,
  nehamaTheLouse,
  myRussianGrandmotherAndHerAmericanVacuum,
  lesMiserables,
  doNotRaiseAHandAgainstTheBoy,
  fromTheKitchenWithLove,
  aTaleOfFiveBalloons,
];

const bookData: HTMLDivElement | null = document.querySelector("#bookData");
if (bookData) {
  for (let i = 0; i < allBooksArray.length; i++) {
    const book = document.createElement("div");
    book.innerHTML = `
        <div id=${allBooksArray[i].sn} class="results__book results__book__image--${allBooksArray[i].camelCaseTitle}">
            <div class="results__book__wrapper">
                <span>Title: ${allBooksArray[i].title} </span>
                <span>Price: ${allBooksArray[i].price} NIS </span>
                <span>Genre: ${allBooksArray[i].genre} </span>
                <span>Language: ${allBooksArray[i].language} </span>
                <span>sn: ${allBooksArray[i].sn} </span>
            </div>    
        </div>
        `;
    document.querySelector("#bookData")?.appendChild(book);
  }
}

function search(): void {
  try {
    const userInput: any = document.querySelector("#userInput");
    userInput?.addEventListener("input", (search) => {
      let userInputValue = search.target?.value;
      userInputValue = userInputValue.toLocaleLowerCase();

      let results = document.querySelectorAll<HTMLElement>(".results__book");

      for (let i = 0; i < results.length; i++) {
        if (results[i].innerText.toLocaleLowerCase().includes(userInputValue)) {
          results[i].style.display = "";
        } else {
          results[i].style.display = "none";
        }
      }
    });
  } catch (error) {
    console.error(error);
    return error;
  }
}
