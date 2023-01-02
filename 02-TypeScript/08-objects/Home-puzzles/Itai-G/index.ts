interface Movie {
    name: string;
    price: number;
  }
  
  const glassOnionAKnivesOutMystery: Movie = {
    name: "Glass Onion A Knives Out Mystery",
    price: 25.99,
  };
  
  const blackPantherWakandaForever: Movie = {
    name: "Black Panther Wakanda Forever",
    price: 15.99,
  };
  
  const uncharted: Movie = {
    name: "uncharted",
    price: 10.99,
  };
  
  function dollarToShekel(rentAmovie: Movie) {
    try {
      if (rentAmovie.name == "Glass Onion A Knives Out Mystery") {
        return rentAmovie.price * 3.5;
      }
      if (rentAmovie.name == "Black Panther Wakanda Forever") {
        return rentAmovie.price * 3.5;
      }
      if (rentAmovie.name == "uncharted") {
        return rentAmovie.price * 3.5;
      }
    } catch (error) {
      console.error(`we ha got an error on our hands`);
    }
  }
  
  function getMovieByName(movieName:string)
  {
      try{
          if(movieName === glassOnionAKnivesOutMystery.name){
              return glassOnionAKnivesOutMystery;
          }
          if(movieName === blackPantherWakandaForever.name){
              return blackPantherWakandaForever;
          }
          if(movieName === uncharted.name){
              return uncharted;
          }
      }
      catch(error){
          console.error('failed to get movie from library');
      }
  }
  
  const userInput = prompt(`please enter a movie name to rent:
  Glass Onion A Knives Out Mystery
  Black Panther Wakanda Forever
  uncharted`)

if (typeof userInput === "undefined") {
    alert("error input");
}

let movieObject = getMovieByName(userInput!);
const moviePrice = dollarToShekel(movieObject!);

alert("thank you for choosing the movie " + userInput + "and it's price in nis is " + moviePrice);


