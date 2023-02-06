//class for details about the condition of club member in each store
var Store = /** @class */ (function () {
    function Store(storeName, amountOfPoints, //-1== no points, 0== points
    bdayDscntDuration, //in days
    bithdayDiscount //amount of bitrhday discount
    ) {
        this.storeName = storeName;
        this.amountOfPoints = amountOfPoints;
        this.bdayDscntDuration = bdayDscntDuration;
        this.bithdayDiscount = bithdayDiscount;
    }
    return Store;
}());
//data
var castro = new Store("Castro", 0, 45, "20%");
var renuar = new Store("Renuar", 0, 30, "20%");
var theNorthFace = new Store("The North Face", 0, 1, "20%");
var colombia = new Store("Colombia", 0, 1, "20%");
var zara = new Store("Zara", -1, 7, "20%");
var hamashbir = new Store("Hamashbir", -1, 30, "20%");
var dreamCard = new Store("Fox, FoxHome, Mango, BillaBong, Laline, Yanga, FootLocker", 0, 30, "20%");
var nike = new Store("Nike", 0, 14, "20%");
var adidas = new Store("Adidas", -1, 14, "20%");
var zometSefarim = new Store("Zomet Sefarim", -1, 45, "20%");
var golf = new Store("Golf", 0, 30, "20%");
//array of stores
var storeList = [
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
var ClubCards = /** @class */ (function () {
    function ClubCards(userId, store, amountOfPoints) {
        this.userId = userId;
        this.store = store;
        this.amountOfPoints = amountOfPoints;
    }
    return ClubCards;
}());
//data
var noaCastro = new ClubCards("209966001", castro, 23.6);
var noaDreamCard = new ClubCards("209966001", dreamCard, 201.5);
var noatheNorthFace = new ClubCards("209966001", theNorthFace, 70.8);
var sagivDreamCard = new ClubCards("301154268", dreamCard, 0);
var sagivNike = new ClubCards("301154268", nike, 40.2);
var sagivZometSefarim = new ClubCards("301154268", zometSefarim, 0);
var sagivZara = new ClubCards("301154268", zara, 0);
var talCastro = new ClubCards("209966019", castro, 57);
var talAdidas = new ClubCards("209966019", adidas, 0);
var nirColombia = new ClubCards("052406521", colombia, 32.3);
var nirRenuar = new ClubCards("052406521", renuar, 6.17);
var shalevZara = new ClubCards("332640564", zara, 0);
var hilaGolf = new ClubCards("058796554", golf, 41.2);
var hilaDreamCard = new ClubCards("058796554", dreamCard, 94.7);
var hilaHamashbir = new ClubCards("058796554", hamashbir, 0);
var ethanGolf = new ClubCards("400625435", golf, 15.2);
var LaviDreamCard = new ClubCards("235588649", dreamCard, 85.6);
var Lavi = new ClubCards("235588649", hamashbir, 0);
//array of all club cards for all the users
var clubCardsList = [
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
var User = /** @class */ (function () {
    function User(userId, userPassword, userFullName, dateOfBirth, email, phoneNumber, clubCard) {
        this.userId = userId;
        this.userPassword = userPassword;
        this.userFullName = userFullName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.clubCard = clubCard;
        this.clubCard = getClubCardsForUser(this.userId);
    }
    return User;
}());
//data
var noaMeillet = new User("209966001", "noa0512", "Noa Meillet", "2001-02-05", "noam@gmail.com", "0525643254");
var sagivKelly = new User("301154268", "sagiv1908", "Sagiv Kelly", "2000-05-19", "sagivk@gmail.com", "0529531221");
var talVaknin = new User("209966019", "tal0301", "Tal Vaknin", "1999-03-01", "talv@gmail.com", "0505785965");
var nirJacob = new User("052406521", "nir2511", "Nir Jacob", "1986-11-25", "nirj@gmail.com", "0548579658");
var shalevLevi = new User("332640564", "shalev0204", "shalev Levi", "1978-11-14", "shalevl@gmail.com", "0521225436");
var hilaWasker = new User("058796554", "hila2809", "Hila Wasker", "2000-09-28", "hilaw@gmail.com", "0525381648");
var ethanAzriel = new User("400625435", "ethan1405", "Ethan Azriel", "1997-04-05", "ethana@gmail.com", "0505649254");
var jhonSmith = new User("745820011", "jhon0805", "Jhon Smith", "2000-05-08", "jhons@gmail.com", "058-9405856");
//array for all the users
var usersList = [
    noaMeillet,
    sagivKelly,
    talVaknin,
    nirJacob,
    shalevLevi,
    hilaWasker,
    ethanAzriel,
    jhonSmith,
];
