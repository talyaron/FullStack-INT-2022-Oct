interface NetflixUser {
  userName: string;
  videoList: object;
  videoViewedBy: Function;
}

function AddNetflixUser(userName, videoList) {
  this.userName = userName;
  this.videoList = videoList;
  this.videoViewedBy = () => {
    return this.videoList;
  };
}

const account: NetflixUser = {
  userName: "Vladi",
  videoList: {
    "The Matrix": ["Vladi", "John", "Jerry"],
    "Lord of the rings": ["Vladi", "Sara", "Michel"],
  },
  videoViewedBy(movie: string): string[] {
    return this.videoList[movie];
  },
};

console.log(account.videoViewedBy("The Matrix"));
