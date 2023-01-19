class GameShop {
    constructor(
      public name: string,
      public price: number,
      public department: string,
      public types: string,
      public imageLink: string
    ) {}
  }
  
  const fifa2022 = new GameShop(`fifa2022`, 159.9, `sport-game`, `game` , `https://cdn.shopify.com/s/files/1/0272/6084/6180/products/ps5-fifa2022-11_1000x.jpg?v=1633429984`)
  const fortnite = new GameShop(`fortnite`, 29.9, `survival-game`, `game` , `https://www.cjs-cdkeys.com/product_images/img/o/6649.jpg`)
  const godOfWar = new GameShop(`god of war`, 199.9, `action-game`, `game`, `https://i5.walmartimages.com/asr/80d588ee-f05e-4727-998a-bf05c743117a.5930d31ee72baf4b40f776aada31ceeb.png` )
  const controller = new GameShop(`controller`, 99.9, `Kits`, `consoles`, `https://scufgaming.com/media/prismic/5d36ce27-565c-4dae-866b-1fda40cc8e0a_pro_fps_light_gray_playstation_4_controller_850x600.png`)
  const hdmiCable = new GameShop(`hdmi cable`, 6.9, `cable`, `Multimedia`, `https://piitel.co.il/wp-content/uploads/2018/03/6451.jpg`)
  const lgTv = new GameShop(`lg tv`, 1259.9, `screens`, `multimedia`, `https://tidal-cms.s3.amazonaws.com/assets/696752e0-7b3e-11eb-a264-df2c48b80ec3/LGTV-product.jpg`)

  
  const items: GameShop[] = [
    fifa2022,
    fortnite,
    godOfWar,
    controller,
    hdmiCable,
    lgTv,
  ]  
  
  
  
  
  
  // UPADTE
  const searchBox = document.getElementById("query") as HTMLInputElement;

  searchBox.addEventListener("keyup", () => {
    const searchValue = searchBox.value;
  
    const filteredArray = items.filter(item => item.name.includes(searchValue));
  
    updateUI(filteredArray);
  });
  
  function updateUI(filteredArray: GameShop[]) {
    let searchResultContainer = document.getElementById("productsCards")as HTMLDivElement;
    searchResultContainer.innerHTML = "";
    
    filteredArray.forEach(item => {
      let div = document.createElement("div");
      let imge = document.createElement("img")as HTMLImageElement;
      imge.src = item.imageLink
      div.innerHTML = `${item.name} ${item.price}$`;
      div.append(imge);
      searchResultContainer.appendChild(div);
    });
  }