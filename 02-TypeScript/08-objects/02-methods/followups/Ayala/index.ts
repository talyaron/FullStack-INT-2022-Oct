


  
interface Video {
    title: string,
    price: number,
    rentBy: string
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

  function priceInNis(video: Video) {
    console.log(video.price * 3.53);
}

//priceInNis(videos[0]);
console.log(priceInNis(xMan.price));
  
console.log(xMan.toNIS());