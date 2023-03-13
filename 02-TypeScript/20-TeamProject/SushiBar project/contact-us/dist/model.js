var Restaurant = /** @class */ (function () {
    function Restaurant(name, address, phoneNumber) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    return Restaurant;
}());
var ashdod = new Restaurant("Sushi-Bar Ashdod", "Herzel 1 Ashdod", "08-9401057");
var tlv = new Restaurant("Sushi-Bar TLV", "Dizengof 147 Tel-Aviv", "07-9401057");
var eilat = new Restaurant("Sushi-Bar Eilat", "Zahal 8 Eilat", "09-9401057");
var restaurantList = [ashdod, tlv, eilat];
