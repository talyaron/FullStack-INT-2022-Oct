interface Doit {
    name: string;
    cardType: string;
    cardNo: number;
    cardDate: string;
    cardIncrypt: Function;
}

const Go:Doit = {
    name: "shalom",
    cardType: "mastercard",
    cardNo: 231,
    cardDate: "12-07-1985",
    cardIncrypt : function () {
        return this.cardNo*12;
    }
}