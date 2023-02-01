//class for details about the condition of club member in each store
class Store {
  constructor(
    public storeName: string,
    public amountOfPoints: number, //-1== no points, 0== points
    public bdayDscntDuration: number, //in days
    public bithdayDiscount: string //amount of bitrhday discount
  ) {}
}

//data
const castro = new Store("Castro", 0, 45, "20%");
const renuar = new Store("Renuar", 0, 30, "20%");
const theNorthFace = new Store("The North Face", 0, 1, "20%");
const colombia = new Store("Colombia", 0, 1, "20%");
const zara = new Store("Zara", -1, 7, "20%");
const hamashbir = new Store("Hamashbir", -1, 30, "20%");
const dreamCard = new Store(
  "Fox, FoxHome, Mango, BillaBong, Laline, Yanga, FootLocker",
  0,
  30,
  "20%"
);
const nike = new Store("Nike", 0, 14, "20%");
const adidas = new Store("Adidas", -1, 14, "20%");
const zometSefarim = new Store("Zomet Sefarim", -1, 45, "20%");
const golf = new Store("Golf", 0, 30, "20%");

//array of stores
const storeList: Store[] = [
  castro,
  renuar,
  theNorthFace,
  colombia,
  zara,
  hamashbir,
  dreamCard,
  nike,
  adidas,
  zometSefarim,
  golf
];


//class for details about each club member that belong to a user
class ClubCards {
  constructor(
    public userId: string,
    public store: Store,
    public amountOfPoints?: number
  ) {}
}

//data
const noaCastro = new ClubCards("209966001", castro, 23.6);
const noaDreamCard = new ClubCards("209966001", dreamCard, 201.5);
const noatheNorthFace = new ClubCards("209966001", theNorthFace, 70.8);
const sagivDreamCard = new ClubCards("301154268", dreamCard, 0);
const sagivNike = new ClubCards("301154268", nike, 40.2);
const sagivZometSefarim = new ClubCards("301154268", zometSefarim);
const sagivZara = new ClubCards("301154268", zara);
const talCastro = new ClubCards("209966019", castro, 57);
const talAdidas = new ClubCards("209966019", adidas);
const nirColombia = new ClubCards("052406521", colombia, 32.3);
const nirRenuar = new ClubCards("052406521", renuar, 6.17);
const shalevZara = new ClubCards("332640564", zara);
const hilaGolf = new ClubCards("058796554", golf, 41.2);
const hilaDreamCard = new ClubCards("058796554", dreamCard, 94.7);
const hilaHamashbir = new ClubCards("058796554", hamashbir);
const ethanGolf = new ClubCards("400625435", golf, 15.2);

//array of all club cards for all the users
const clubCardsList: ClubCards[] = [
  noaCastro,
  noaDreamCard,
  noatheNorthFace,
  sagivDreamCard,
  sagivNike,
  sagivZometSefarim,
  sagivZara,
  talCastro,
  talAdidas,
  nirColombia,
  nirRenuar,
  shalevZara,
  hilaGolf,
  hilaDreamCard,
  hilaHamashbir,
  ethanGolf,
];


//class for details about each user
class Users {
  clubCards?: ClubCards[] | undefined;
  constructor(
    public userId: string,
    public userPassword: string,
    public userName: string,
    public dateOfBirth: string,
    public email: string,
    public clubCard?: ClubCards[]
  ) {
    this.clubCard = this.getClubCardsForUser(this.userId);
  }

  getClubCardsForUser(id){
    if (clubCardsList.length==0)
      return undefined;
    return clubCardsList.filter(user => user.userId == id);
  }
}
