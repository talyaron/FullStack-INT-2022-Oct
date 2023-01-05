var avatar = {
    title: "Avatar",
    price: 10,
    toNIS: function () {
        return this.price * 3.45;
    }
};
function dollar(dollarTo) {
    try {
        return dollarTo * 3.35;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
console.log(dollar(avatar.price));
console.log(avatar.toNIS());
