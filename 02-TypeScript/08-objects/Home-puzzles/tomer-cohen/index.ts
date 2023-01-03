interface videos {
  price: number;
  nameOfMovie: string;
  rent?: users;
}
interface users {
  Name: string;
  userPassword: string;
}
const tomer:users ={
    Name: `tomer`,
    userPassword:`tomer1`
}
const noa:users={
    Name: `noa`,
    userPassword: `noa1`
}
const fastAndFurious9: videos = {
  nameOfMovie: `fastAndFurious9`,
  price: 9.99,
  rent: tomer
};

const avengersEndaGame: videos = {
  nameOfMovie: `avengers EndaGame`,
  price: 24.99,
};
const avatar2: videos = {
  nameOfMovie: `Avatar 2`,
  price: 49.99,
  rent: noa
};
function DollerToShekels(video: number): number | false {
  try {
    return 3.53 * video;
  } catch (error) {
    console.error(error);
    return false;
  }
}



const movieAllow: string | null =
  prompt(`what movie do you want to rent? we have
FastAndFurious9
AvengersEndGame
Avater2`);
if (movieAllow == " " || !movieAllow) {
  const movieAllow = alert("please enter a movie");
} else if (movieAllow == `fastAndFurious9`) {
  const movieAllow = alert(`${fastAndFurious9.rent?.Name} take the movie`);
} else if (movieAllow == `avatar2`) {
  alert(
    `the price for avatar 2 is ${avatar2.price}in shekels is ${DollerToShekels(
      avatar2.price
    )} but ${avatar2.rent?.Name}`
  );
} else if (movieAllow == `avengersEndaGame`) {
  alert(
    `the price for avengersEndaGame is ${
      avengersEndaGame.price
    }in shekels is ${DollerToShekels(avengersEndaGame.price)}`
  );
} else {
  alert(`why you dont take movie`);
}

