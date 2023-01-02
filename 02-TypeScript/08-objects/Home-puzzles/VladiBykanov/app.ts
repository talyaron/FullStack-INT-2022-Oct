// initiating a variable that will hold all the users
const netflixUsers: {}[] = [];
const userBtn = document.querySelectorAll('.chooseUser')
const movieBtn = document.querySelectorAll('.chooseMovie')
// user template
interface NetflixUser {
  userName: string;
  videoList: object;
  videoViewedBy: Function;
}

// function that will crate a user based on our interface template
function AddNetflixUser(userName: string, videoList: {}) {
  this.userName = userName;
  this.videoList = videoList;
  this.videoViewedBy = () => {
    return this.videoList;
  };
  netflixUsers.push(this);
}

const newUser: NetflixUser = new AddNetflixUser("John Doe", {
  "The Holiday": [],
  "Alles op tafel": [],
});

// console.log(newUser);

const account = {
  userName: "Vladi",
  videoList: {
    "The Matrix": ["Vladi", "John", "Jerry"],
    "Lord of the rings": ["Vladi", "Sara", "Michel"],
  },
  videoViewedBy(movie: string): string[] {
    return this.videoList[movie];
  },
  get getName() {
    return this.userName;
  },
  set addNewMovie(movie: string) {
    this.videoList[movie] = [];
  },
};

// console.log(account.videoViewedBy("The Matrix"));
// account.addNewMovie = 'movie';
// console.log(account);

netflixUsers.push(account);
console.log(account.userName);
// console.log(netflixUsers[1].userName);
netflixUsers.forEach(user => console.log(user.userName))