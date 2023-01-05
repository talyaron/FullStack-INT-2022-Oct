interface IShirt {
  name: string;
  price: number;
  priceInUSD: (ss: number) => number;
}

const priceInUSD = (price: number): number => {
  return price * 3.52;
};

const SHIRTS: IShirt[] = [
  {
    name: "shiret",
    price: 6,
    priceInUSD,
  },
  {
    name: "shiiiiit",
    price: 7,
    priceInUSD,
  },
  {
    name: "fuuuuck",
    price: 4,
    priceInUSD,
  },
];

const avgShirtsPrice = (shirts: IShirt[]): number => {
  let avgPrice = 0;
  shirts.forEach((element) => {
    avgPrice += element.priceInUSD(element.price);
  });
  return avgPrice / shirts.length;
};

const lowerShirtsPrice = (shirts: IShirt[], lowerPrice: number): IShirt[] => {
  let priceShirtsLow = shirts.map((element) => {
    if (element.price > lowerPrice) {
      element.price = lowerPrice;
    }
    return element;
  });
  console.log(priceShirtsLow)
  return priceShirtsLow;
};

lowerShirtsPrice(SHIRTS, 5);
