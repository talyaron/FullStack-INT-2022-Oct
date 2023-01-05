
interface Videos {
  price: number;
  name?: string;
  users: string[];
  getVideoPriceInShekels(video: Videos): string;
  whoWatchedMe(videos: Videos);
  namesOfTheScouts(Videos:Videos,typeB:string);
 
  movieAndSpecificUsers:{
  batman: {
    BatmansScouts: string[];
  };

  superman: {
    supermanScouts: string[];
  };

  theAvengers: {
    theAvengersScouts: string[];
  };
}

}

interface User {
  name: string;
  id: number;
  password: number;
  videos?: string[] | undefined;
}

const videos: Videos = {
  //Price in dollars "100$"
  price: 0 ,
  users: [], 
  movieAndSpecificUsers:{
  batman: {
    BatmansScouts: ["avi","shlomi","jonny"]
  },

  superman: {
    supermanScouts: ["Israel","Uncle","bob"]
  },


  theAvengers: {
    theAvengersScouts: ["Shiral","Uncle","praise"]
  },
  },

   getVideoPriceInShekels(video: Videos): string {
    try {
      let input1=(document.querySelector(".input1") as HTMLInputElement).value;
      video.price=parseInt(input1);
      video.price=(video.price)*3.51;
      console.log(video.price);
      let result =(video.price).toString();
      return result;
  
    } catch (error) {
     return error 
    }

  },



   whoWatchedMe(videos: Videos) {
    try {
      let input = document.querySelector(".input2") as HTMLInputElement;
      let valueOfinput = input.value;
        videos.users[ videos.users.length] = valueOfinput;
         return videos.users;
    } catch (error) {
     console.log(error); 
    }
    


   },


  namesOfTheScouts(Videos:Videos,typeB: string){
 try {
  if (typeB==="b") {
    let input_b=document.querySelector(".inputB")as HTMLInputElement;
    let value_b=input_b.value;
    videos.movieAndSpecificUsers.batman.BatmansScouts[videos.movieAndSpecificUsers.batman.BatmansScouts.length]=value_b;
    return videos.movieAndSpecificUsers.batman.BatmansScouts;
  }
  if (typeB==="s") {
    let input_s=document.querySelector(".inputS")as HTMLInputElement;
    let value_s=input_s.value;
    videos.movieAndSpecificUsers.superman.supermanScouts[videos.movieAndSpecificUsers.superman.supermanScouts.length]=value_s;
    return videos.movieAndSpecificUsers.superman.supermanScouts;
  }
  if (typeB==="h") {
    let input_h=document.querySelector(".inputH")as HTMLInputElement;
    let value_h=input_h.value;
    videos.movieAndSpecificUsers.theAvengers.theAvengersScouts[videos.movieAndSpecificUsers.theAvengers.theAvengersScouts.length]=value_h;
    return videos.movieAndSpecificUsers.theAvengers.theAvengersScouts;
  }


 } catch (error) {
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




const btn1 = document.querySelector(".button1") as HTMLButtonElement;
btn1.addEventListener("click", (e) =>{
  let t =document.querySelector(".span1") as HTMLSpanElement
  t.textContent=videos.getVideoPriceInShekels(videos);
});

// span1=

// ----------------------------------------------------
let btn2 = document.querySelector(".button2") as HTMLButtonElement;
btn2.addEventListener("click", (e) => {
  let addListUsers=videos.whoWatchedMe(videos);
  let list =document.querySelector(".span3") as HTMLSpanElement
  list.innerHTML=addListUsers;
  

});



// -------------------------------------------------


let button_b = document.querySelector(".buttonB") as HTMLButtonElement;

button_b.addEventListener("click", (e) => {
  let result_b =videos.namesOfTheScouts(videos,"b");
  let spanB=document.querySelector(".listB") as HTMLSpanElement;
  spanB.innerHTML=result_b;
});






let button_s = document.querySelector(".buttonS") as HTMLButtonElement;

button_s.addEventListener("click", (e) => {
  let result_s =videos.namesOfTheScouts(videos,"s");
  let spanS=document.querySelector(".listS") as HTMLSpanElement;
  spanS.innerHTML=result_s;

});




let button_h = document.querySelector(".buttonH") as HTMLButtonElement;

button_h.addEventListener("click", (e) => {
  let result_h =videos.namesOfTheScouts(videos,"h");
  let spanH=document.querySelector(".listH") as HTMLSpanElement;
  spanH.innerHTML=result_h;

});




let div1 = document.querySelector(".div1") as HTMLDivElement;
let div2 = document.querySelector(".div2") as HTMLDivElement;
let div3 = document.querySelector(".div3") as HTMLDivElement;

let currency_exchange= videos.getVideoPriceInShekels(videos)
div1.innerHTML=currency_exchange;

div2.innerHTML="The viewers of the film are"
for(let i in videos.users ){
  div2.innerHTML=videos.users[i];
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
