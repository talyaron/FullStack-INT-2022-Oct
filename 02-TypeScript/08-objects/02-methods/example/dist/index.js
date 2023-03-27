var xMan = {
    title: "x-man",
    sn: "sdfgjkhsdkjghskdjghdkhgsdg",
    price: 10,
    toNIS: function () {
        //method
        console.dir(this);
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
console.log(dollarToNis(xMan.price));
console.log(xMan.toNIS());
