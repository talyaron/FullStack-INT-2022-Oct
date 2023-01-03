// initiating a variable that will hold all the users
const netflixUsers: NetflixUser[] = [];
const viewedMovieList = {};
const userWatchedMovie = document.querySelector(
  ".userWatchedMovie"
) as HTMLUListElement;
const creatUserName = document.querySelector(
  ".creatUserName"
) as HTMLInputElement;
const addMovieToNewUsersList = document.querySelector(
  ".addMovieToNewUsersList"
) as HTMLInputElement;
// const userBtnList = document.querySelector(".userBtnList") as HTMLUListElement;
// const movieBtnList = document.querySelector(
//   ".movieBtnList"
// ) as HTMLUListElement;

// listening to button clicks on html window
window.addEventListener("click", (e) => {
  const target = e.target as Element;
  if (target.className === "movie") {
    userWatchedMovie.style.display = "block";
    while (userWatchedMovie.childNodes.length > 2) {
      userWatchedMovie.removeChild(userWatchedMovie.lastChild as Element);
    }
    // text on button
    const text = target.textContent;
    Object.entries(viewedMovieList).forEach(([key, value]) => {
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

window.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && creatUserName.value != '') {
    console.log("working");
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

const userOne: NetflixUser = new addUser("Vladislav Bykanov", {
  matrix: false,
  avatar: false,
  "the godfather": true,
});

const userTwo: NetflixUser = new addUser("John Doe", {
  matrix: false,
  avatar: false,
  "the godfather": true,
});

const userThree: NetflixUser = new addUser("Jerry Smith", {
  matrix: true,
  avatar: true,
  "the godfather": false,
});

userTwo.markMovieViewed("matrix");
userOne.addMovieToList("Titanic");
userOne.markMovieViewed("Titanic");

console.log(viewedMovieList);

// adding the movie as viewed for the chosen user
function markMovieAsViewedForPerson(movie: string, user: string) {
  return viewedMovieList[movie].push(user);
}

// adding the name of the user that watched the movie to viewedMovieList
netflixUsers.forEach((user) => {
  Object.entries(user.videoList).forEach(([key, value]) => {
    if (value == true) {
      if (!viewedMovieList[key]) {
        viewedMovieList[key] = [];
      }
      viewedMovieList[key].push(user.userName);
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

// let word = "hello";
// let upperWord = word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);

// console.log(upperWord);
