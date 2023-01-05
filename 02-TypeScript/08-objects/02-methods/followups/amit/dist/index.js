var yellow = {
    title: "yellow",
    price: 100,
    color: "yellow",
    discount: function () {
        return this.price * 0.80;
    }
};
console.dir("the price of " + yellow.title + " after discount " + yellow.discount() + " ");
