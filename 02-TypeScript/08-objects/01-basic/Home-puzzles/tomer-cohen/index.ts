interface Video {
  price: number;
  nameOfMovie: string;
  rent?: User;
}
interface User {
  Name: string;
  userPassword: string;
}
const tomer: User = {
  Name: `tomer6633`,
  userPassword: `tomer1`,
};
const noa: User = {
  Name: `noa532`,
  userPassword: `noa1`,
};
const fastAndFurious9: Video = {
  nameOfMovie: `fastAndFurious9`,
  price: 9.99,
  rent: tomer,
};

const avengersEndaGame: Video = {
  nameOfMovie: `avengers EndaGame`,
  price: 24.99,
};
const avatar2: Video = {
  nameOfMovie: `Avatar 2`,
  price: 49.99,
  rent: noa,
};
function dolarToShekel(video: number): number | false {
  try {
    return 3.53 * video;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function videoPriceInDolars(priceDolar: number): number | false {
  const priceInShekel = dolarToShekel(priceDolar);
  if (typeof priceInShekel === "number") {
    return priceInShekel;
  } else {
    return false;
  }
}

const login = prompt(`Welcome to my website
Enter a username`);
if (login == " " || !login) {
  alert(`It is not possible to get to the website without a username
  `);
}
console.log(`username: ${login}`);
const Thanks = alert(`Hi ${login}, thanks for signing up`);

const movieAllow: string | null =
  prompt(`what movie do you want to rent? we have
fastAndFurious9
avengersEndaGame
avatar2`);
if (movieAllow == " " || !movieAllow) {
  const movieAllow = alert("please enter a movie");
} else if (movieAllow == `fastAndFurious9`) {
  const movieAllow = alert(`${fastAndFurious9.rent?.Name} take the movie`);
} else if (movieAllow == `avatar2`) {
  alert(
    `the price for avatar 2 is ${avatar2.price}in shekels is ${dolarToShekel(
      avatar2.price
    )} but ${avatar2.rent?.Name} rent this one`
  );
} else if (movieAllow == `avengersEndaGame`) {
  alert(
    `the price for avengersEndaGame is ${
      avengersEndaGame.price
    }in shekels is ${dolarToShekel(avengersEndaGame.price)}`
  );
} else {
  alert(`Only For The Names In The Qustion (You Can Copy Paste)`);
}
