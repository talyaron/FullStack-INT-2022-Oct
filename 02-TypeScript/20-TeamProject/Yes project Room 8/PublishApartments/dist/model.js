var UserProfil = /** @class */ (function () {
    function UserProfil(name, address, city, area, animal, smoke, flor, rooms, partersNo, price, imgSrc) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.area = area;
        this.animal = animal;
        this.smoke = smoke;
        this.flor = flor;
        this.rooms = rooms;
        this.partersNo = partersNo;
        this.price = price;
        this.imgSrc = imgSrc;
        this.uid = uid();
    }
    return UserProfil;
}());
var userProfil = { uid: "", name: "", address: "", city: "", area: "", animal: "", smoke: "", flor: "", rooms: "", partersNo: "", price: "", imgSrc: "" };
var UserProfilList = [];
