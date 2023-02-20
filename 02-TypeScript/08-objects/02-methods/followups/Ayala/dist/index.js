var xMan = {
    title: "x-man",
    sn: "sdfgjkhsdkjghskdjghdkhgsdg",
    price: 10,
    toNIS: function () {
        //method
        return this.price * 3.45;
    }
};
function priceInNis(video) {
    console.log(video.price * 3.53);
}
//priceInNis(videos[0]);
console.log(priceInNis(xMan.price));
console.log(xMan.toNIS());
