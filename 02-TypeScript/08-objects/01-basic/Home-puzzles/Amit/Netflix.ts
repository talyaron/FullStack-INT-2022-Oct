/////////////////////////////////////////interfaces////////////////////////////////////////////////

interface Video {
  name: string;
  genre: string;
  SN: number;
  usersOrdered: string[];
}

interface User {
  name: string;
  userID: number;
  videosOrdered: Video[];
}

/////////////////////////////////////////functions////////////////////////////////////////////////

function historyOfUsers(obj: Video): string[] | false {
  try {
    return obj.usersOrdered;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function logIn(): string | undefined {

  try {
    let repeat: boolean = true;
    while (repeat === true) {
      const userName = prompt(
        "Welcome to Amitflix! \n\nWhat is your user name?\n"
      );
      if (userName !== null) {
        if (isNaN(Number(userName)) && userName !== "") {
          repeat = false;
          const user: User = {
            name: userName,
            userID: 2,
            videosOrdered: [],
          };
          usersList.push(user);
          return userName;
        } else {
          alert("You didn't enter any letters");
        }
      } else {
        alert(`Type in your user name`);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

function newOrder(videoSN: Video["SN"]): void {
  try {
    const video = videosList.find((video) => video.SN === videoSN);
    if (video === undefined) {
      throw new Error(`could not find video by SN: ${videoSN}`);
    } else {
      const user = loggedInUser();
      validateNewVideoOnWatchlist(video, user);

      video.usersOrdered.push(user.name);
      const orderedBy = historyOfUsers(video);
      console.log(`The users who ordered ${video.name} are ${orderedBy}`);
    }
  } catch (error) {
    console.error((error as Error).message);
  }
}

function loggedInUser(): User {
  const user = usersList.find((user) => user.userID === 2);
  if (user === undefined) {
    throw new Error("could not find logged in user");
  } else {
    return user;
  }
}

function addVideoToWatchlist(video: Video): void {
  try {
    const user = loggedInUser();
    const newVideoOnWatchlistId = `watchlistItem-${video.name}`;
    validateNewVideoOnWatchlist(video, user);

    user?.videosOrdered.push(video);

    const newVideoOnWatchlist = document.createElement("div");
    newVideoOnWatchlist.innerHTML = `
            <div id="${newVideoOnWatchlistId}" class="watchlist__item">${video.name}
                <div class="watchlist__item__removeIcon">
                    <i type= "button" onclick="removeVideoFromWatchlist('${video.name}')" class="fa-sharp fa-solid fa-xmark"></i>
                </div> 
            </div>
        `;
    document.getElementById("watchlistItems")?.appendChild(newVideoOnWatchlist);
  } catch (error: unknown) {
    console.error((error as Error).message);
    alert("this video is already on your watchlist");
  }
}

function removeVideoFromWatchlist(videoName: string): void {
  try {
    const user = loggedInUser();

    const index = user.videosOrdered.findIndex(
      (video) => video.name === videoName
    );
    if (index !== undefined && index > -1) {
      user?.videosOrdered.splice(index, 1);
    }

    const newVideoOnWatchlistId = `watchlistItem-${videoName}`;
    const watchlistVideo = document.getElementById(newVideoOnWatchlistId);
    if (watchlistVideo !== null) {
      watchlistVideo.remove();
    }
  } catch (error) {
    console.error((error as Error).message);
  }
}

function showSlides(): void {
  try {
    let slides = document.getElementsByClassName(
      "videoSlides"
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000);
  } catch (error) {
    console.error((error as Error).message);
  }
}

function validateNewVideoOnWatchlist(newVideo: Video, user: User): void {
  const index = user.videosOrdered.findIndex(
    (video) => video.name === newVideo.name
  );
  if (index !== undefined && index > -1) {
    throw new Error(`this video is already on your watchlist`);
  }
}

/////////////////////////////////////////videos////////////////////////////////////////////////

const xMen: Video = {
  name: "X-Men",
  genre: "action",
  SN: 4120,
  usersOrdered: ["Wolverine", "Storm"],
};

const avengers: Video = {
  name: "Avengers",
  genre: "action",
  SN: 4274,
  usersOrdered: ["Michaelangelo", "Leonardo", "Raphael", "Donatelo"],
};

const frozen: Video = {
  name: "Frozen",
  genre: "action",
  SN: 4285,
  usersOrdered: ["Gamora", "Groot", "Rocket"],
};

const fightClub: Video = {
  name: "Fight Club",
  genre: "thriller",
  SN: 1050,
  usersOrdered: [
    "Michaelangelo",
    "Leonardo",
    "Raphael",
    "Donatelo",
    "Wolverine",
    "Storm",
    "Gamora",
    "Groot",
    "Rocket",
    "Tyler",
  ],
};

const videosList: Video[] = [xMen, avengers, frozen, fightClub];

/////////////////////////////////////////users////////////////////////////////////////////////

const usersList: User[] = [
  {
    name: "Michaelangelo",
    userID: 170889,
    videosOrdered: [avengers, fightClub],
  },
  {
    name: "Leonardo",
    userID: 230193,
    videosOrdered: [avengers, fightClub],
  },
  {
    name: "Raphael",
    userID: 281092,
    videosOrdered: [avengers, fightClub],
  },
  {
    name: "Donatelo",
    userID: 240663,
    videosOrdered: [avengers, fightClub],
  },
  {
    name: "Wolverine",
    userID: 110764,
    videosOrdered: [xMen, fightClub],
  },
  {
    name: "Storm",
    userID: 170838,
    videosOrdered: [xMen, fightClub],
  },
  {
    name: "Gamora",
    userID: 211963,
    videosOrdered: [frozen, fightClub],
  },
  {
    name: "Groot",
    userID: 250289,
    videosOrdered: [frozen, fightClub],
  },
  {
    name: "Rocket",
    userID: 111111,
    videosOrdered: [frozen, fightClub],
  },
  {
    name: "Tyler",
    userID: 170896,
    videosOrdered: [fightClub],
  },
];

//////////////////////////////////////////////////////main/////////////////////////////////////////////////////

const activeUser = logIn();
console.log(`the logged in user is ${activeUser}`);

let slideIndex = 0;
showSlides();
