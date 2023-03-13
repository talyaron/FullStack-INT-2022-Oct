class Restaurant {
  constructor(
    public name: string,
    public address: string,
    public phoneNumber: string
  ) {}
}

const ashdod = new Restaurant(
  "Sushi-Bar Ashdod",
  "Herzel 1 Ashdod",
  "08-9401057"
);
const tlv = new Restaurant(
  "Sushi-Bar TLV",
  "Dizengof 147 Tel-Aviv",
  "07-9401057"
);
const eilat = new Restaurant("Sushi-Bar Eilat", "Zahal 8 Eilat", "09-9401057");

const restaurantList: Restaurant[] = [ashdod, tlv, eilat];
