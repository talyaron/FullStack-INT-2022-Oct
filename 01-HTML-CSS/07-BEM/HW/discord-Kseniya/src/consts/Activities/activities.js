import user1 from "../../assets/profile3.png";
import user2 from "../../assets/user1.png";
import user3 from "../../assets/user2.png";
import animeUser from "../../assets/animeUser.png";
import user4 from "../../assets/user4.png";
import serverPic from "../../assets/server.png";
import user5 from "../../assets/user5.png";

export const ACTIVITIES = [
  {
    pic: user1,
    users: "RokaK, Sylvie, and 4 others",
    desc: "In a voice channel",
    server: {
      pic: user4,
      name: "Friends Server",
      desc: "Hangout Room",
      serverPic: serverPic,
    },
  },
  {
    pic: user2,
    users: "yuugu, iDiscarded, and 2 others",
    desc: "League of Legends - 3h",
    server: {
      pic: user5,
      name: "Scrubs",
      desc: "Bronze to Gold Scr..",
    },
  },
  {
    pic: user3,
    users: "abfuscate",
    desc: "Hearthstone - 3h",
    server: "",
  },
  {
    pic: animeUser,
    users: "Kovath",
    desc: "Destiny 2 - 4h",
    server: "",
  },
];
