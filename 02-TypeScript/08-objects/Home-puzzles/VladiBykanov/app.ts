// initiating a variable that will hold all the users
const netflixUsers: NetflixUser[] = [];
const movieList = {};
const userWatchedMovie = document.querySelector(
  ".userWatchedMovie"
) as HTMLUListElement;
// const userBtnList = document.querySelector(".userBtnList") as HTMLUListElement;
// const movieBtnList = document.querySelector(
//   ".movieBtnList"
// ) as HTMLUListElement;

window.addEventListener("click", (e) => {
  const target = e.target as Element;
  if (target.className === "movie") {
    userWatchedMovie.style.display = 'block';
    while (userWatchedMovie.childNodes.length > 2) {
      userWatchedMovie.removeChild(userWatchedMovie.lastChild as Element);
    }
    // text on button
    const text = target.textContent;
    Object.entries(movieList).forEach(([key, value]) => {
      const movieValues = value as [];
      if (key.toLowerCase() == text?.toLowerCase()) {
        for (const i in movieValues) {
          const li = document.createElement("li") as HTMLElement;
          li.textContent = movieValues[i];
          userWatchedMovie.appendChild(li);
        }
      }
    });
  }
});

// user template
interface NetflixUser {
  userName: string;
  videoList: {};
  checkIfMovieWasWatched: Function;
  getUserName: Function;
  addMovieToList: Function;
  markMovieViewed: Function;
}

// function that will crate a user based on our interface template
function addUser(userName: string, videoList: {}) {
  this.userName = userName;
  this.videoList = videoList;
  // Return true if user watched the movie
  this.checkIfMovieWasWatched = (movie: string): boolean =>
    this.videoList[movie];
  // return users name
  this.getUserName = () => {
    return this.userName;
  };
  // add a movie to users watch list
  this.addMovieToList = (movie: string) => {
    this.videoList[movie] = false;
  };
  this.markMovieViewed = (movie: string) => (this.videoList[movie] = true);
  //adding user to list of users on platform
  netflixUsers.push(this);
}

const userOne: NetflixUser = new addUser("User One", {
  matrix: false,
  avatar: false,
  "the godfather": true,
});

const userTwo: NetflixUser = new addUser("User Two", {
  matrix: false,
  avatar: false,
  "the godfather": true,
});

userTwo.markMovieViewed("matrix");

// console.log(userOne.checkIfMovieWasWatched("matrix"));
// console.log(userOne.getUserName());
userOne.addMovieToList("Titanic");
console.log(netflixUsers);
// console.log(userOne.videoList["avatar"]);
// console.log(userOne.videoList["Titanic"]);

// console.log(movieList);

const keys = Object.keys(netflixUsers[1].videoList);
const values = Object.values(netflixUsers[1].videoList)[0];
// console.log(keys);
// console.log(values);

console.log(movieList);

// adding the movie as viewed for the chosen user
function markMovieAsViewedForPerson(movie: string, user: string) {
  return movieList[movie].push(user);
}

// adding the name of the user that watched the movie to movieList
netflixUsers.forEach((user) => {
  Object.entries(user.videoList).forEach(([key, value]) => {
    if (value == true) {
      if (!movieList[key]) {
        movieList[key] = [];
      }
      movieList[key].push(user.userName);
      // console.log(key, user.userName);
    }
  });
});

// const account = {
//   userName: "Vladi",
//   videoList: {
//     "The Matrix": ["Vladi", "John", "Jerry"],
//     "Lord of the rings": ["Vladi", "Sara", "Michel"],
//   },
//   checkIfMovieWasWatched(movie: string): string[] {
//     return this.videoList[movie];
//   },
//   get getUserName() {
//     return this.userName;
//   },
//   set addNewMovie(movie: string) {
//     this.videoList[movie] = [];
//   },
// };

let word = "hello";
let upperWord = word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);

// console.log(upperWord);
