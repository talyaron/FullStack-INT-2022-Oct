"use strict";

//Create data for Blockbuster:
//Create an interface for videos and an interface for users.
//The video has a price property (in US dollars).
//It also has a property about who is the person that rented it.

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

interface Video {
  name: string;
  price: number;
  whoRent: string;
}

const Dana: User = {
  firstName: "Dana",
  lastName: "cohen",
  age: 22,
};

const Maya: User = {
  firstName: "Maya",
  lastName: "Levi",
  age: 30,
};

const America: Video = {
  name: "America",
  price: 15,
  whoRent: "Dana",
};

const Forest: Video = {
  name: "Forest",
  price: 10,
  whoRent: "Maya",
};

//create a function that gets a video object and returns the price in shekels

function usdToNis(Video: number): number | false {
  try {
    return 3.53 * Video;
  } catch (error) {
    console.error(error);
    return false;
  }
}

const enter = prompt("Please enter your user name:");
if (enter == " " || !enter) {
  alert(`You cant rent without a user name`);
}
console.log(`username: ${enter}`);
const ThankYou = alert(`Hi ${enter}, thank you for coming`);

const movie: string | null = prompt("What movie?");
if (movie == "" || !movie) {
  const movie = alert("You have to choose");
} else if (movie == "America") {
  const movie = alert(
    `You chose to watch ${America.name}, please give me ${usdToNis(
      America.price
    )} NIS`
  );
} else if (movie == "Forest") {
  const movie = alert(
    `You chose to watch ${Forest.name}, please give me ${usdToNis(
      Forest.price
    )} NIS`
  );
}
