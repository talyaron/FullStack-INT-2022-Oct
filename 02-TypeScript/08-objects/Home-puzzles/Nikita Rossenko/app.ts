interface video {
    name:string;
    genre:string;
    ageRestriction:number;
    price:number;
    rentedBy?:{}
};

interface user {
    name:string;
    age:number
};

let avatar:video = {
    name:"Avatar",
    genre:"Fantasy",
    ageRestriction:10,
    price:20,
};

const mario:user = {
    name:"Mario",
    age:25
};
// 1)
function videoPrice(video:video){
    return `The price of the ${video.name} video caset is ${video.price}$`;
}
// 2)
function videoRent(video:video, user:user){
    if (user.age > video.ageRestriction){
        video.rentedBy = user;
        console.log(`${user.name} is rented the ${video.name} video caset`)
        return video;
    }
    else {
        return "You're not old enough to rent this video";
    }
}
console.log("Task 1------------------------------------------");
console.log(videoPrice(avatar));
console.log("\nTask 2------------------------------------------");
console.log(videoRent(avatar,mario));

console.log("\nTask 3------------------------------------------");
// 3)
interface netflixMovie {
    name:string;
    genre:string;
    ageRestriction:number;
    viewedBy:object[]
};

let vikings:netflixMovie = {
    name:"vikings",
    genre:"History",
    ageRestriction:18,
    viewedBy:[]
};

let lego:netflixMovie = {
    name:"lego",
    genre:"History",
    ageRestriction:18,
    viewedBy:[]
};

interface netflixUser {
    name:string;
    age:number;
    movieList:string[]
};
let cloud:netflixUser = {
    name:"cloud",
    age:25,
    movieList:[]
};

let nikita:netflixUser = {
    name:"Nikita",
    age:30,
    movieList:[]
};

function movieList (netflixMovie:netflixMovie, netflixUser:netflixUser){
    if (netflixUser.age > netflixMovie.ageRestriction){
        if (netflixUser.movieList.includes(netflixMovie.name)){ //if the user already added the movie to the movie list don't add again and alert it to the user!
            return `This movie is already in your list`
        }
        else{
            netflixUser.movieList?.push(netflixMovie.name);
            return `Hello ${netflixUser.name} the movie ${netflixMovie.name} added to your movie list, you have now ${netflixUser.movieList} in the list`;
        }
    } else {
        return "You're not old enough to movie list this video";
    }
}
console.log(movieList(vikings,nikita));
console.log(movieList(lego,nikita));


function watchMovie(netflixMovie:netflixMovie, netflixUser:netflixUser){
    if (netflixUser.age > netflixMovie.ageRestriction){
        if (netflixMovie.viewedBy.includes(netflixUser)){ //if the user watched the movie don't add the user again to the viewedBy list.
            return `User ${netflixUser.name} is watching ${netflixMovie.name}`
        }else {
            netflixMovie.viewedBy?.push(netflixUser)
            console.log(`User ${netflixUser.name} is watching ${netflixMovie.name}`)
            return netflixMovie;
        }
    } else {
        return "You're not old enough to view this video";
    }
}

console.log(watchMovie(vikings,cloud));
console.log(watchMovie(vikings,nikita));

console.log(watchMovie(lego,cloud));
console.log(watchMovie(lego,nikita));

console.log(watchMovie(lego,nikita));
console.log(watchMovie(lego,nikita));
console.log(watchMovie(vikings,nikita));
