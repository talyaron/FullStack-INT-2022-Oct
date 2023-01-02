// initiating a variable that will hold all the users
const netflixUsers: {}[] = [];
const userBtn = document.querySelectorAll(".chooseUser");
const movieBtn = document.querySelectorAll(".chooseMovie");
// user template
interface NetflixUser {
  userName: string;
  videoList: {};
  whoWatchedThisMovie: Function;
  getName: Function;
  addMovieToList: Function;
}

// function that will crate a user based on our interface template
function AddNetflixUser(userName: string, videoList: {}) {
  this.userName = userName;
  this.videoList = videoList;
  // Return a list of peope that watched the movie chosen
  this.whoWatchedThisMovie = (movie: string) => {
    return this.videoList[movie];
  };
  // return users name
  this.getName = () => {
    return this.userName;
  };
  // add a movie to users watch list
  this.addMovieToList = (movie: string) => {
    this.videoList[movie] = [];
  };
  //adding user to list of users on platform
  netflixUsers.push(this);
}

const userOne: NetflixUser = new AddNetflixUser("Vladislav Bykanov", {
  matrix: ["who watched matrix?"],
  avatar: ["who watched Avatar"],
  "the godfather": ["who watched The godfather?"],
});

console.log(userOne.whoWatchedThisMovie("matrix"));
console.log(userOne.getName());
userOne.addMovieToList("Titanic");
console.log(userOne);
console.log(userOne.videoList["avatar"]);
addMovieAsViewedToPerson(userOne.videoList['Titanic'], 'vladi');
console.log(userOne.videoList["Titanic"]);

// console.log(account.whoWatchedThisMovie("The Matrix"));
// account.addNewMovie = 'movie';
// console.log(account);
// console.log(account.userName);
// console.log(netflixUsers[1].userName);
// netflixUsers.forEach(user => console.log(user.userName))

// adding the movie as viewed for the chosen user
function addMovieAsViewedToPerson(movie: string[], user: string) {
  return movie.push(user);
}

// const account = {
//   userName: "Vladi",
//   videoList: {
//     "The Matrix": ["Vladi", "John", "Jerry"],
//     "Lord of the rings": ["Vladi", "Sara", "Michel"],
//   },
//   whoWatchedThisMovie(movie: string): string[] {
//     return this.videoList[movie];
//   },
//   get getName() {
//     return this.userName;
//   },
//   set addNewMovie(movie: string) {
//     this.videoList[movie] = [];
//   },
// };



let word = "hello";
let upperWord = word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);

console.log(upperWord);
