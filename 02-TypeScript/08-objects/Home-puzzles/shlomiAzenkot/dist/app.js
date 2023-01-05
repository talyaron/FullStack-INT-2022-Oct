var videos = {
    //Price in dollars "100$"
    price: 0,
    users: [],
    movieAndSpecificUsers: {
        batman: {
            BatmansScouts: ["avi", "shlomi", "jonny"]
        },
        superman: {
            supermanScouts: ["Israel", "Uncle", "bob"]
        },
        theAvengers: {
            theAvengersScouts: ["Shiral", "Uncle", "praise"]
        }
    },
    getVideoPriceInShekels: function (video) {
        try {
            var input1 = document.querySelector(".input1").value;
            video.price = parseInt(input1);
            video.price = (video.price) * 3.51;
            console.log(video.price);
            var result = (video.price).toString();
            return result;
        }
        catch (error) {
            return error;
        }
    },
    whoWatchedMe: function (videos) {
        try {
            var input = document.querySelector(".input2");
            var valueOfinput = input.value;
            videos.users[videos.users.length] = valueOfinput;
            return videos.users;
        }
        catch (error) {
            console.log(error);
        }
    },
    namesOfTheScouts: function (Videos, typeB) {
        try {
            if (typeB === "b") {
                var input_b = document.querySelector(".inputB");
                var value_b = input_b.value;
                videos.movieAndSpecificUsers.batman.BatmansScouts[videos.movieAndSpecificUsers.batman.BatmansScouts.length] = value_b;
                return videos.movieAndSpecificUsers.batman.BatmansScouts;
            }
            if (typeB === "s") {
                var input_s = document.querySelector(".inputS");
                var value_s = input_s.value;
                videos.movieAndSpecificUsers.superman.supermanScouts[videos.movieAndSpecificUsers.superman.supermanScouts.length] = value_s;
                return videos.movieAndSpecificUsers.superman.supermanScouts;
            }
            if (typeB === "h") {
                var input_h = document.querySelector(".inputH");
                var value_h = input_h.value;
                videos.movieAndSpecificUsers.theAvengers.theAvengersScouts[videos.movieAndSpecificUsers.theAvengers.theAvengersScouts.length] = value_h;
                return videos.movieAndSpecificUsers.theAvengers.theAvengersScouts;
            }
        }
        catch (error) {
            console.log(error);
        }
        // for(let i in videos.movieAndSpecificUsers.batman.BatmansScouts) {
        //   console.log(videos.movieAndSpecificUsers.batman.BatmansScouts[i]);
        // }
        // console.log(`-----------------`)
        // for(let i in videos.movieAndSpecificUsers.superman.supermanScouts) {
        //   console.log(videos.movieAndSpecificUsers.superman.supermanScouts[i]);
        // }
        // console.log(`-----------------`)
        // for(let i in videos.movieAndSpecificUsers.theAvengers.theAvengersScouts) {
        //   console.log(videos.movieAndSpecificUsers.theAvengers.theAvengersScouts[i]);
        // }
    }
};
var btn1 = document.querySelector(".button1");
btn1.addEventListener("click", function (e) {
    var t = document.querySelector(".span1");
    t.textContent = videos.getVideoPriceInShekels(videos);
});
// span1=
// ----------------------------------------------------
var btn2 = document.querySelector(".button2");
btn2.addEventListener("click", function (e) {
    var addListUsers = videos.whoWatchedMe(videos);
    var list = document.querySelector(".span3");
    list.innerHTML = addListUsers;
});
// -------------------------------------------------
var button_b = document.querySelector(".buttonB");
button_b.addEventListener("click", function (e) {
    var result_b = videos.namesOfTheScouts(videos, "b");
    var spanB = document.querySelector(".listB");
    spanB.innerHTML = result_b;
});
var button_s = document.querySelector(".buttonS");
button_s.addEventListener("click", function (e) {
    var result_s = videos.namesOfTheScouts(videos, "s");
    var spanS = document.querySelector(".listS");
    spanS.innerHTML = result_s;
});
var button_h = document.querySelector(".buttonH");
button_h.addEventListener("click", function (e) {
    var result_h = videos.namesOfTheScouts(videos, "h");
    var spanH = document.querySelector(".listH");
    spanH.innerHTML = result_h;
});
var div1 = document.querySelector(".div1");
var div2 = document.querySelector(".div2");
var div3 = document.querySelector(".div3");
var currency_exchange = videos.getVideoPriceInShekels(videos);
div1.innerHTML = currency_exchange;
div2.innerHTML = "The viewers of the film are";
for (var i in videos.users) {
    div2.innerHTML = videos.users[i];
}
// pre objects
// const urielName = "Oriel";
// const urielAge = 27;
// const urielAddress = "Rishon";
// interface State {
//   name: string;
//   YearOfIndependice: number;
//   population: number;
//   capitalCity: string;
//   armyName: string;
//   continent: string;
// }
// interface Person {
//   name: string;
//   yearOfBirth: number;
//   address: string;
//   nickanme?: string;
//   citizenship?: string;
//   currentAddress?: string;
// }
// const uriel: Person = { yearOfBirth: 1995, address: "Rishon", name: "Uriel" };
// // const object = {"key":"value", "key":"value"}
// // key:value  is called "property"
// const israel: State = {
//   name: "Israel",
//   YearOfIndependice: 1948,
//   population: 9000020,
//   capitalCity: "Jerusalem",
//   armyName: "IDF",
//   continent: "Asia",
// };
// const iossiReels = {
//   creator: "Iossi",
//   videoId: "dsgdfgdfgdfgdfgdfhbvx_fdhtd",
//   timeOfCreation: "25-2-2022",
// };
// console.log(
//   `The state of ${israel.name} has a population of about ${israel["population"]}, ${israel.population}, and its army is called ${israel["army"]}`
// );
// for (const key in israel) {
//   console.log(key); //key
//   console.log(israel[key]); //value
// }
// const messi: Person = {
//   name: "Messi",
//   address: "Israel st. 525",
//   yearOfBirth: 1987,
//   nickanme: "The goat",
//   citizenship: "Argntina",
//   currentAddress: "Paris",
// };
// const itay: Person = {
//   name: "Itay",
//   yearOfBirth: 1993,
//   address: "Jerusalem",
// };
// for (const key in messi) {
//   console.log(`${messi.name} ${key} is ${messi[key]}`);
// }
// function getAgeOfPerson(obj: Person,obj2: Person): number | false {
//   try {
//     const currentYear: number = new Date().getFullYear();
//     const age = currentYear - obj.yearOfBirth;
//     return age;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }
// function getCitizenship(person: Person): string {
//   try {
//     if (person.citizenship) {
//       return person.citizenship;
//     } else {
//       return "Unknowun";
//     }
//   } catch (error) {
//     console.error(error);
//     return "Unknowun";
//   }
// }
// const age = getAgeOfPerson(itay);
// console.log(`The age is ${age}`);
// const citizenship = getCitizenship(uriel);
// console.log(citizenship);
