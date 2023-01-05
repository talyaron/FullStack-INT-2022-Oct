var avatar2 = {
    title: "avatar2",
    sn: "tomerwgewgd",
    price: 29.99,
    toNIS: function () {
        return this.price * 3.45;
    }
};
function dollarToNis(dollar) {
    try {
        return 3.45 * dollar;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
console.log(dollarToNis(avatar2.price));
console.log(avatar2.toNIS());
