class GameShop {
    constructor(
      public name: string,
      public price: number,
      public department: string,
      public types: string,
    ) {}
  }
  
  const uncharted = new GameShop(`Uncharted`, 60.9, `adventure-game`, `Game`)
  const watchdogs = new GameShop(`Watchdogs`, 29.9, `hacking-game`, `Game`)
  const godOfWar2 = new GameShop(`God of War2`, 80.9, `action-game`, `Game`)
  const xboxcontroller = new GameShop(`Xbox sieris x controller`, 88.9, `Controller`, `computer`)
  const wirelessmuose = new GameShop(`logitech wireless gameing mouse`, 10.9, `Kits`, `computer`)
  const ps5controller = new GameShop(`Play Station 5 Controller`, 85.9, `Controller`, `consoles`)
  const headphones = new GameShop(`Headphones`, 120.9, `Kits`, `audio`)
  const hdmiCable = new GameShop(`HDMI 2.1 120 Hz cable`, 16.9, `cable`, `Multimedia`)
  const lgTv = new GameShop(`Lg Tv`, 3000.9, `screens`, `multimedia`)
  const samsungTv = new GameShop(`Samsung TV`, 1359.9, `screens`, `multimedia`)
  
  const items: GameShop[] = [
    uncharted,
    watchdogs,
    godOfWar2,
    xboxcontroller,
    wirelessmuose,
    ps5controller,
    headphones,
    hdmiCable,
    lgTv,
    samsungTv,
  ]
  
  // task 1
  function getTypes(item: GameShop) {
    console.log(item.name, item.types);  
  }
  items.forEach(getTypes)
  
  // task 2
  
  function getPrices(item: GameShop) {
    console.log(item.price)
  }
  items.forEach(getPrices)
  
  const min = Math.min(...items.map((item) => item.price))
  console.log(min)
  
  // task 3
  items.sort((a, b) => a.price - b.price)
  
  console.log(items) // To delete