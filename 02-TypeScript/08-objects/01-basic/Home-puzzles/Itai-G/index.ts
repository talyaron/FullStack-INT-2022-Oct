interface Movie {
    name: string;
    price: number;
    rentedBy:number
  }
  interface User {
    firstName: string;
    lastName:string;
    id: number;
  }
  
  const movies: Array<Movie> = [
    {
    name: "Glass Onion A Knives Out Mystery",
    price: 25.99,
    rentedBy: 1
    },
    {
    name: "Black Panther Wakanda Forever",
    price: 15.99,
    rentedBy: 1
  },
  {
    name: "uncharted",
    price: 10.99,
    rentedBy:2
  }
  ]
  const users: Array<User> = [
    {
        id: 1,
        firstName: "Shimon",
        lastName: "Or"
    },
    {
        id: 2,
        firstName: "Itai",
        lastName: "Gelberg",
    },
    {
        id: 3,
        firstName: "Simon",
        lastName: "Levi",
    },
    {
        id: 4,
        firstName: "Ayala",
        lastName: "Vilo",
    },
    {
        id: 5,
        firstName: "Udi",
        lastName: "Bron",
    }
];

  function dollarToShekel(movieName) {
    try {
      if (movieName == "Glass Onion A Knives Out Mystery") {
        return movies[0].price * 3.5;
      }
      if (movieName == "Black Panther Wakanda Forever") {
        return movies[1].price * 3.5;
      }
      if (movieName == "uncharted") {
        return movies[2].price * 3.5;
      }
    } catch (error) {
      console.error(`we ha got an error on our hands`);
    }
  }
  
  
  const userInput = prompt(`please enter a movie name to rent:
  Glass Onion A Knives Out Mystery
  Black Panther Wakanda Forever
  uncharted`)

if (typeof userInput === "undefined") {
    alert("error input");
}

const moviePrice = dollarToShekel(userInput);

alert(`thank you for choosing the movie  ${userInput} and it's price in nis is ${moviePrice}`);


//ex:2


function howRentedMovie(movie:Movie, id: number){
  if(movie.rentedBy === id) {
    for(let i =0; i < users.length; i++){
      let user: User | null = null;
      if(users[i].id === id){
        user = users[i];
      }

      if (user !== null){
        console.log(`${user.firstName} ${user.lastName} have rented the movie ${movie.name}`);
      }
    }
  }
}



function howRentedMovie1(movie:Movie, id: number){
  if(movie.rentedBy === id) {
    for(let i =0; i < users.length; i++){
      let user: User | null = null;
      if(users[i].id === id){
        user = users[i];
      }

      if (user !== null){
        console.log(`${user.firstName} ${user.lastName} have rented the movie ${movie.name}`);
      }
    }
  }
}

howRentedMovie(movies[1] , 1);
howRentedMovie(movies[2] , 2);