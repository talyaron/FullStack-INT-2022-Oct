interface NetflixUser {
  userName: string;
  videoList: object;
  videoViewedBy: Function;
}

function AddNetflixUser(userName: string, videoList: {}) {
  this.userName = userName;
  this.videoList = videoList;
  this.videoViewedBy = () => {
    return this.videoList;
  };
}

const newUser = new AddNetflixUser("John Doe", {
  "The Holiday": [],
  "Alles op tafel": [],
});

console.log(newUser);

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
  set addVideo(movie) {
    this.videoList[movie] = [];
  }
};

// console.log(account.videoViewedBy("The Matrix"));
console.log(account.addVideo('Snatch'));
