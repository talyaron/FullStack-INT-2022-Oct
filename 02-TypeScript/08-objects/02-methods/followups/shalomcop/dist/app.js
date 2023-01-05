var Go = {
    name: "shalom",
    cardType: "mastercard",
    cardNo: 231,
    cardDate: "12-07-1985",
    cardIncrypt: function () {
        return this.cardNo * 12;
    }
};
