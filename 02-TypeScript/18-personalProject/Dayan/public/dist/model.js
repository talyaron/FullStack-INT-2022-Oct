//-----Class User-----//
var User = /** @class */ (function () {
    function User(name, username, email, phone, password, gender) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.gender = gender;
    }
    return User;
}());
var users = [];
//-----Class Gallery-----//
var Gallery = /** @class */ (function () {
    function Gallery(name, src) {
        this.name = name;
        this.src = src;
    }
    return Gallery;
}());
var gallery = [
    {
        name: "people practicing yoga",
        src: "https://as1.ftcdn.net/v2/jpg/03/05/59/32/1000_F_305593240_tsLw1F5Nk22hVpuVUNjOPdQrE4WF6zyq.jpg"
    },
    {
        name: "Young woman doing ashtanga yoga practice in a loft studio",
        src: "https://as1.ftcdn.net/v2/jpg/02/11/45/70/1000_F_211457006_QhdmjtYqAklkJKOnW2VPsdGOaI14cLqs.jpg"
    },
    {
        name: "Beautiful Attractive Asian woman practice yoga Lotus pose",
        src: "https://as2.ftcdn.net/v2/jpg/02/36/45/37/1000_F_236453770_5YHNr9dPQS6DyIcVqTfKy9sVj3XW70Q2.jpg"
    },
    {
        name: "Yoga lotus",
        src: "https://as2.ftcdn.net/v2/jpg/01/02/21/19/1000_F_102211925_h0Gjs5gZnxDsDPePLeG8zGb2V5OHKvsr.jpg"
    },
    {
        name: "young asian beauty woman doing yoga at home",
        src: "https://as2.ftcdn.net/v2/jpg/03/38/36/41/1000_F_338364178_OUyHx230AI63ccHeWLaWSUB71LuUog53.jpg"
    },
    {
        name: "woman practicing yoga at seashore",
        src: "https://as2.ftcdn.net/v2/jpg/00/52/72/37/1000_F_52723787_gekCDsX7HyUc90VeiRWIIFPPr0x0bxM8.jpg"
    }
];
