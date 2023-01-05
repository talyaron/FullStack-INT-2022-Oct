"use strict";

/////////////////////////////////////////interfaces////////////////////////////////////////////////
/////////////////////////////////////////functions////////////////////////////////////////////////
function historyOfUsers(obj) {
  try {
    var history = [];
    history.push(obj.usersOredred);
    return history;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function newOrder(userName, obj) {
  try {
    if (userName !== null) {
      userName = prompt("what is your user name?");
      obj.usersOredred.push("userName");
    } else {
      throw new Error("type your user name");
    }

    return userName;
  } catch (error) {
    console.error(error);
    return false;
  }
} //function that pushes new users to usersOrdered array.
/////////////////////////////////////////videos////////////////////////////////////////////////


var ninjaTurtles = {
  name: "NinjaTurtles",
  genre: "action",
  SN: 4274,
  usersOredred: ["Michaelangelo", "Leonardo", "Raphael", "Donatelo"]
};
var xMen = {
  name: "X-Men",
  genre: "action",
  SN: 4120,
  usersOredred: ["Wolverine", "Storm"]
};
var guardiansOfTheGalaxy = {
  name: "Guardians Of The Galaxy",
  genre: "action",
  SN: 4285,
  usersOredred: ["Gamora", "Groot", "Rocket"]
};
var fightClub = {
  name: "Fight Club",
  genre: "thriller",
  SN: 1050,
  usersOredred: ["Michaelangelo", "Leonardo", "Raphael", "Donatelo", "Wolverine", "Storm", "Gamora", "Groot", "Rocket", "Tyler"]
}; /////////////////////////////////////////users////////////////////////////////////////////////

var usersList = [{
  name: "Michaelangelo",
  userID: 170889,
  videosOredred: [ninjaTurtles, fightClub]
}, {
  name: "Leonardo",
  userID: 230193,
  videosOredred: [ninjaTurtles, fightClub]
}, {
  name: "Raphael",
  userID: 281092,
  videosOredred: [ninjaTurtles, fightClub]
}, {
  name: "Donatelo",
  userID: 240663,
  videosOredred: [ninjaTurtles, fightClub]
}, {
  name: "Wolverine",
  userID: 110764,
  videosOredred: [xMen, fightClub]
}, {
  name: "Storm",
  userID: 170838,
  videosOredred: [xMen, fightClub]
}, {
  name: "Gamora",
  userID: 211963,
  videosOredred: [guardiansOfTheGalaxy, fightClub]
}, {
  name: "Groot",
  userID: 250289,
  videosOredred: [guardiansOfTheGalaxy, fightClub]
}, {
  name: "Rocket",
  userID: 111111,
  videosOredred: [guardiansOfTheGalaxy, fightClub]
}, {
  name: "Tyler",
  userID: 170896,
  videosOredred: [fightClub]
}];
var choice = newOrder("Groot", xMen);
console.log("The users who oredered this video are " + choice);
var orderedBy = historyOfUsers(xMen);
console.log("The users who oredered this video are " + orderedBy);
var orderedBy2 = historyOfUsers(ninjaTurtles);
console.log("The users who oredered this video are " + orderedBy2);
var orderedBy3 = historyOfUsers(fightClub);
console.log("The users who oredered this video are " + orderedBy3);
var orderedBy4 = historyOfUsers(guardiansOfTheGalaxy);
console.log("The users who oredered this video are " + orderedBy4);