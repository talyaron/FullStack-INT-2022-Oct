class GameShop {
  constructor(
    public name: string,
    public price: number,
    public department: string,
    public types: string,
  ) {}
}

const fifa2022 = new GameShop(`Fifa2022`, 159.9, `sport-game`, `game`)
const fortnite = new GameShop(`Fortnite`, 29.9, `survival-game`, `game`)
const godOfWar = new GameShop(`God of War`, 199.9, `action-game`, `game`)
const keyboard = new GameShop(`Keyboard`, 15.9, `Kits`, `computer`)
const muose = new GameShop(`Muose`, 10.9, `Kits`, `computer`)
const controller = new GameShop(`Controller`, 99.9, `Kits`, `consoles`)
const headphones = new GameShop(`Headphones`, 99.9, `Kits`, `computer`)
const hdmiCable = new GameShop(`HDMI cable`, 6.9, `cable`, `Multimedia`)
const lgTv = new GameShop(`LG TV`, 1259.9, `screens`, `multimedia`)
const samsungTv = new GameShop(`Samsung TV`, 1359.9, `screens`, `multimedia`)

const items: GameShop[] = [
  fifa2022,
  fortnite,
  godOfWar,
  keyboard,
  muose,
  controller,
  headphones,
  hdmiCable,
  lgTv,
  samsungTv,
]

// task 1
console.log(items) // To delete!
function getTypes(item: GameShop) {
  console.log(item.name, item.types); // To delete!
}
items.forEach(getTypes)

// task 2

function getPrices(item: GameShop) {
  console.log(item.price) // To delete!
}
items.forEach(getPrices)

const min = Math.min(...items.map((item) => item.price))
console.log(min)

// task 3
items.sort((a, b) => a.price - b.price)

console.log(items) // To delete!

// task 4
