var priceInUSD = function (price) {
    return price * 3.52;
};
var SHIRTS = [
    {
        name: "shiret",
        price: 6,
        priceInUSD: priceInUSD
    },
    {
        name: "shiiiiit",
        price: 7,
        priceInUSD: priceInUSD
    },
    {
        name: "fuuuuck",
        price: 4,
        priceInUSD: priceInUSD
    },
];
var avgShirtsPrice = function (shirts) {
    var avgPrice = 0;
    shirts.forEach(function (element) {
        avgPrice += element.priceInUSD(element.price);
    });
    return avgPrice / shirts.length;
};
var lowerShirtsPrice = function (shirts, lowerPrice) {
    var priceShirtsLow = shirts.map(function (element) {
        if (element.price > lowerPrice) {
            element.price = lowerPrice;
        }
        return element;
    });
    console.log(priceShirtsLow);
    return priceShirtsLow;
};
lowerShirtsPrice(SHIRTS, 5);
