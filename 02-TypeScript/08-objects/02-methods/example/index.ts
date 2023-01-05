interface Video {
  title: string;
  sn: string;
  price: number;
  toNIS: Function;
}

const xMan: Video = {
  title: "x-man", //propery
  sn: "sdfgjkhsdkjghskdjghdkhgsdg", //property
  price: 10, //property
  toNIS: function () {
    //method

    return this.price * 3.45;
  },
};

function dollarToNis(dollar: number): number | false {
  try {
    return 3.45 * dollar;
  } catch (error) {
    console.error(error);
    return false;
  }
}
console.log(dollarToNis(xMan.price));

console.log(xMan.toNIS());
