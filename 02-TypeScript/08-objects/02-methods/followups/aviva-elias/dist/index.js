var spiderMan = {
    title: "spiderman",
    sn: "hjgsfgfhj",
    price: 10,
    toNis: function () {
        console.dir(this.title);
        return this.price * 3.45;
    }
};
var dollarNis = function (dollar) {
    try {
        return dollar * 3.45;
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
console.log(dollarNis(spiderMan.price));
console.log(spiderMan.toNis());
