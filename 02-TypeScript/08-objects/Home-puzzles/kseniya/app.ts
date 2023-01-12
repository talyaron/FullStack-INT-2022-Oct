interface IMovie {
  name: string;
  price: number;
  availableForRent: boolean;
  renter?: IUser
  viewedBy?: IUser[]
}

interface IUser {
  name: string;
  movies?: IMovie[]
}

const movieList: IMovie[] = [
  {
    name: "Home Alone",
    price: 12.99,
    availableForRent: true,
  },
  {
    name: "Avatar",
    price: 9.99,
    availableForRent: false,
  },
  {
    name: "The Avengers",
    price: 14.99,
    availableForRent: false,
  },
  {
    name: "Jurrasic Park",
    price: 6.99,
    availableForRent: false,
  },
];

const singleUser: IUser = {
    name:  'Karen',
    movies: movieList
}

// let answer = prompt('Welcome to Blockbuster, we currently offer the following movies: Home Alone, Avatar, The Avengers, Jurrasic Park.')

const moviePrice = (movie: IMovie): number => {
  let priceInShekel = movie.price * 3.53;
  return priceInShekel;
};

const movieRenter = (movie: IMovie, user: IUser):IMovie => {

return {...movie, renter:user}
};

movieRenter(movieList[0], singleUser)