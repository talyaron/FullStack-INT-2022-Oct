let copyDeck = CardsDeck();
let playerCards: NewCard[] = [];
let houseCards: NewCard[] = [];
let sumPlayer: number, sumHouse: number;
let isAlive = true;
let hasBlackJack = false;

class NewCard {
  public cardName: string;
  public cardValue: number;
  public cardImageLink: string;
  constructor() {
    this.cardName = this.getRndmCard();
    this.cardValue = this.getCardValue(this.cardName);
    this.cardImageLink = this.returnImgLink(this.cardName);
  }

  getRndmCard() {
    const cardIndex = Math.floor(Math.random() * copyDeck.length);
    const card = copyDeck[cardIndex];
    //remove card from deck
    copyDeck.splice(cardIndex, 1);
    return card;
  }

  getCardValue(aCard: string) {
    //checks if the drown card is a 10 (second char at card is 0)
    if (aCard[1] == "0") {
      return 10;
    } else if (aCard[0] == "j" || aCard[0] == "q" || aCard[0] == "k") {
      return 10;
    } else if (aCard[0] == "a") {
      return 11;
    } else {
      return parseInt(aCard[0]);
    }
  }
  returnImgLink(aCard: string): string {
    for (let i = 0; i < cardImg.length; i++) {
      if (aCard == cardImg[i][0]) {
        return cardImg[i][1];
      }
    }
    return "no image found";
  }
}

const cardImg: string[][] = [
  ["2d", "./PNG-cards-1.3/2_of_diamonds.png"],
  ["3d", "./PNG-cards-1.3/3_of_diamonds.png"],
  ["4d", "./PNG-cards-1.3/4_of_diamonds.png"],
  ["5d", "./PNG-cards-1.3/5_of_diamonds.png"],
  ["6d", "./PNG-cards-1.3/6_of_diamonds.png"],
  ["7d", "./PNG-cards-1.3/7_of_diamonds.png"],
  ["8d", "./PNG-cards-1.3/8_of_diamonds.png"],
  ["9d", "./PNG-cards-1.3/9_of_diamonds.png"],
  ["10d", "./PNG-cards-1.3/10_of_diamonds.png"],
  ["jd", "./PNG-cards-1.3/jack_of_diamonds2.png"],
  ["qd", "./PNG-cards-1.3/queen_of_diamonds2.png"],
  ["kd", "./PNG-cards-1.3/king_of_diamonds2.png"],
  ["ad", "./PNG-cards-1.3/ace_of_diamonds.png"],
  ["2h", "./PNG-cards-1.3/2_of_hearts.png"],
  ["3h", "./PNG-cards-1.3/3_of_hearts.png"],
  ["4h", "./PNG-cards-1.3/4_of_hearts.png"],
  ["5h", "./PNG-cards-1.3/5_of_hearts.png"],
  ["6h", "./PNG-cards-1.3/6_of_hearts.png"],
  ["7h", "./PNG-cards-1.3/7_of_hearts.png"],
  ["8h", "./PNG-cards-1.3/8_of_hearts.png"],
  ["9h", "./PNG-cards-1.3/9_of_hearts.png"],
  ["10h", "./PNG-cards-1.3/10_of_hearts.png"],
  ["jh", "./PNG-cards-1.3/jack_of_hearts2.png"],
  ["qh", "./PNG-cards-1.3/queen_of_hearts2.png"],
  ["kh", "./PNG-cards-1.3/king_of_hearts2.png"],
  ["ah", "./PNG-cards-1.3/ace_of_hearts.png"],
  ["2s", "./PNG-cards-1.3/2_of_spades.png"],
  ["3s", "./PNG-cards-1.3/3_of_spades.png"],
  ["4s", "./PNG-cards-1.3/4_of_spades.png"],
  ["5s", "./PNG-cards-1.3/5_of_spades.png"],
  ["6s", "./PNG-cards-1.3/6_of_spades.png"],
  ["7s", "./PNG-cards-1.3/7_of_spades.png"],
  ["8s", "./PNG-cards-1.3/8_of_spades.png"],
  ["9s", "./PNG-cards-1.3/9_of_spades.png"],
  ["10s", "./PNG-cards-1.3/10_of_spades.png"],
  ["js", "./PNG-cards-1.3/jack_of_spades2.png"],
  ["qs", "./PNG-cards-1.3/queen_of_spades2.png"],
  ["ks", "./PNG-cards-1.3/king_of_spades2.png"],
  ["as", "./PNG-cards-1.3/ace_of_spades.png"],
  ["2c", "./PNG-cards-1.3/2_of_clubs.png"],
  ["3c", "./PNG-cards-1.3/3_of_clubs.png"],
  ["4c", "./PNG-cards-1.3/4_of_clubs.png"],
  ["5c", "./PNG-cards-1.3/5_of_clubs.png"],
  ["6c", "./PNG-cards-1.3/6_of_clubs.png"],
  ["7c", "./PNG-cards-1.3/7_of_clubs.png"],
  ["8c", "./PNG-cards-1.3/8_of_clubs.png"],
  ["9c", "./PNG-cards-1.3/9_of_clubs.png"],
  ["10c", "./PNG-cards-1.3/10_of_clubs.png"],
  ["jc", "./PNG-cards-1.3/jack_of_clubs2.png"],
  ["qc", "./PNG-cards-1.3/queen_of_clubs2.png"],
  ["kc", "./PNG-cards-1.3/king_of_clubs2.png"],
  ["ac", "./PNG-cards-1.3/ace_of_clubs.png"],
];

// function renderUserDownsideCards() {
//   const backSideCard1 = new Image();
//   backSideCard1.src = "./PNG-cards-1.3/card_back_red.png";
//   const backSideCard2 = new Image();
//   backSideCard2.src = "./PNG-cards-1.3/card_back_red.png";
//   userCardsDiv.append(backSideCard1);
//   userCardsDiv.append(backSideCard2);
//   backSideCard1.setAttribute("class", "displayedCard");
//   backSideCard2.setAttribute("class", "displayedCard");
// }
// renderUserDownsideCards();


function CardsDeck() {
  return [
    "2d",
    "3d",
    "4d",
    "5d",
    "6d",
    "7d",
    "8d",
    "9d",
    "10d",
    "jd",
    "qd",
    "kd",
    "ad",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "8s",
    "9s",
    "10s",
    "js",
    "qs",
    "ks",
    "as",
    "2h",
    "3h",
    "4h",
    "5h",
    "6h",
    "7h",
    "8h",
    "9h",
    "10h",
    "jh",
    "qh",
    "kh",
    "ah",
    "2c",
    "3c",
    "4c",
    "5c",
    "6c",
    "7c",
    "8c",
    "9c",
    "10c",
    "jc",
    "qc",
    "kc",
    "ac",
  ];
}