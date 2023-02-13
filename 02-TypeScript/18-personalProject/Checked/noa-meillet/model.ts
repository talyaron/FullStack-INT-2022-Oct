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
  golf,
];

//class for details about each club member that belong to a user
class ClubCards {
  constructor(
    public userId: string,
    public store: Store,
    public amountOfPoints: number
  ) {}
}

//data
const noaCastro = new ClubCards("209966001", castro, 23.6);
const noaDreamCard = new ClubCards("209966001", dreamCard, 201.5);
const noatheNorthFace = new ClubCards("209966001", theNorthFace, 70.8);
const sagivDreamCard = new ClubCards("301154268", dreamCard, 0);
const sagivNike = new ClubCards("301154268", nike, 40.2);
const sagivZometSefarim = new ClubCards("301154268", zometSefarim, 0);
const sagivZara = new ClubCards("301154268", zara, 0);
const talCastro = new ClubCards("209966019", castro, 57);
const talAdidas = new ClubCards("209966019", adidas, 0);
const nirColombia = new ClubCards("052406521", colombia, 32.3);
const nirRenuar = new ClubCards("052406521", renuar, 6.17);
const shalevZara = new ClubCards("332640564", zara, 0);
const hilaGolf = new ClubCards("058796554", golf, 41.2);
const hilaDreamCard = new ClubCards("058796554", dreamCard, 94.7);
const hilaHamashbir = new ClubCards("058796554", hamashbir, 0);
const ethanGolf = new ClubCards("400625435", golf, 15.2);
const LaviDreamCard = new ClubCards("235588649", dreamCard, 85.6);
const Lavi = new ClubCards("235588649", hamashbir, 0);

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
class User {
  clubCards: ClubCards[] | undefined;
  constructor(
    public userId: string,
    public userPassword: string,
    public userFullName: string,
    public dateOfBirth: string,
    public email: string,
    public phoneNumber: string,
    public clubCard?: ClubCards[]
  ) {
    this.clubCard = getClubCardsForUser(this.userId);
  }
}

//data
const noaMeillet = new User(
  "209966001",
  "noa0512",
  "Noa Meillet",
  "2001-02-05",
  "noam@gmail.com",
  "0525643254"
);
const sagivKelly = new User(
  "301154268",
  "sagiv1908",
  "Sagiv Kelly",
  "2000-05-19",
  "sagivk@gmail.com",
  "0529531221"
);
const talVaknin = new User(
  "209966019",
  "tal0301",
  "Tal Vaknin",
  "1999-03-01",
  "talv@gmail.com",
  "0505785965"
);
const nirJacob = new User(
  "052406521",
  "nir2511",
  "Nir Jacob",
  "1986-11-25",
  "nirj@gmail.com",
  "0548579658"
);
const shalevLevi = new User(
  "332640564",
  "shalev0204",
  "shalev Levi",
  "1978-11-14",
  "shalevl@gmail.com",
  "0521225436"
);
const hilaWasker = new User(
  "058796554",
  "hila2809",
  "Hila Wasker",
  "2000-09-28",
  "hilaw@gmail.com",
  "0525381648"
);
const ethanAzriel = new User(
  "400625435",
  "ethan1405",
  "Ethan Azriel",
  "1997-04-05",
  "ethana@gmail.com",
  "0505649254"
);
const jhonSmith = new User(
  "745820011",
  "jhon0805",
  "Jhon Smith",
  "2000-05-08",
  "jhons@gmail.com",
  "058-9405856"
);

//array for all the users
const usersList: User[] = [
  noaMeillet,
  sagivKelly,
  talVaknin,
  nirJacob,
  shalevLevi,
  hilaWasker,
  ethanAzriel,
  jhonSmith,
];
