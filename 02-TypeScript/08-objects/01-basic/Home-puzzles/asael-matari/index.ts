// Create data for Blockbuster:
// Create an interface for videos and an interface for users. The video has a price property (in US dollars).
//  It also has a property about who is the person that rented it.

// 1. create a function that gets a video object and returns the price in shekels

const whthp: Function = (obj: Movie): number | false => {
  try {
    if (!obj) throw Error("what the name of the movie");
    console.log(`THE PRICE OF THE MOVIE ${obj.name} is ${obj.price} dollars`);

    return obj.price * 3.53;
  } catch (error) {
    console.error(error);
    return false;
  }
}
interface Movie {
  name: string;
  price: number;
  whoRented: string;
}
interface Person {
  name: string;
  whatRented: string;
}
const users: Person[] = [
  { name: "asael", whatRented: "bambi" },
  { name: "lea", whatRented: "lord of the rings" }
];
const movies: Movie[] = [
  { name: "bambi", price: 180, whoRented: "asael" },
  { name: "lord of the rings", price: 200, whoRented: "" }
];
// whthp(bambi)

// 2. create a function that gets a video and a person and returns the object of the video, with reference to the
// person that took it.

const moviERent: Function = (user: Person, movie: Movie): string | false => {
  try {
    movie.whoRented = user.name;
    console.log(
      `Hi ${movie.whoRented} thank's for renting the movie ${movie.name}`
    );

    return `Hi ${movie.whoRented} thank's for renting the movie ${movie.name}`;
  } catch (error) {
    console.error(error);
    return false;
  }
};
// moviERent(asael, bambi);

// 3. Blockbuster was busted. You are now a developer at Netflix. Think of a way to let a user to have many videos.
//  And the video has a list of all the people that viewed it.
