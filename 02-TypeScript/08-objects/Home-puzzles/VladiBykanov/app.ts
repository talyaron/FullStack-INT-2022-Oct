// initiating a variable that will hold all the users
const netflixUsers: NetflixUser[] = [];
const viewedMovieList = {};
const listOfUsersWhoWatchedTheMovieChosen = document.querySelector(
  ".listOfUsersWhoWatchedTheMovieChosen"
) as HTMLUListElement;
const creatUserName = document.querySelector(
  ".creatUserName"
) as HTMLInputElement;
const addMovieToNewUsersList = document.querySelector(
  ".addMovieToNewUsersList"
) as HTMLInputElement;
const userNameClickedOn = document.querySelector(
  ".userPage__userName"
) as HTMLHeadElement;
const userPage = document.querySelector(".userPage") as HTMLDivElement;
const userMovieList = document.querySelector(
  ".userPage__movieList"
) as HTMLUListElement;
// const userBtnList = document.querySelector(".userBtnList") as HTMLUListElement;
// const movieBtnList = document.querySelector(
//   ".movieBtnList"
// ) as HTMLUListElement;

// catching clicks on buttons and displaying the people who watched them
window.addEventListener("click", (e) => {
  const target = e.target as Element;
  const text = target.textContent as string;
  // if clicked on movie button display users that watched it
  if (target.className === "movie") {
    listOfUsersWhoWatchedTheMovieChosen.style.display = "block";
    // clear list of movies besides first child of ul element which is a title (hX tag)
    while (listOfUsersWhoWatchedTheMovieChosen.childNodes.length > 2) {
      listOfUsersWhoWatchedTheMovieChosen.removeChild(
        listOfUsersWhoWatchedTheMovieChosen.lastChild as Element
      );
    }
    if (!(text.toLowerCase() in viewedMovieList)) {
      console.log(text);
    }
    // text on button
    // go through watched movies object
    Object.entries(viewedMovieList).forEach(([key, value]) => {
      const movieValues = value as [];
      // display users who watched the movie that was clicked on
      if (key.toLowerCase() == text?.toLowerCase()) {
        for (const i in movieValues) {
          const li = document.createElement("li") as HTMLElement;
          li.textContent = movieValues[i];
          listOfUsersWhoWatchedTheMovieChosen.appendChild(li);
        }
      }
    });
  }
  // if clicked on user button display movies on his list
  else if (target.className === "userName") {
    userNameClickedOn.textContent = target.textContent;
    userPage.style.display = "block";
    netflixUsers.forEach((user) => {
      if (user.userName === target.textContent) {
        //clear ul element
        userMovieList.replaceChildren();
        // displaying list of movies of the user selected
        Object.entries(user.videoList).forEach(([key]) => {
          const li = document.createElement("li") as HTMLElement;
          li.textContent = key;
          userMovieList.appendChild(li);
        });
      }
    });
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && creatUserName.value.length > 5) {
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
  avatar: false,
  "the godfather": false,
});

userTwo.markMovieViewed("matrix");
userOne.addMovieToList("Titanic");
userOne.markMovieViewed("Titanic");

console.log(viewedMovieList);
console.log(netflixUsers);

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
