// Create data for Blockbuster:
// Create an interface for videos and an interface for users. The video has a price property (in US dollars).
//  It also has a property about who is the person that rented it.
// 1. create a function that gets a video object and returns the price in shekels
var whthp = function (obj) {
    try {
        if (!obj)
            throw Error("what the name of the movie");
        console.log(obj.price);
        console.log("THE PRICE OF THE MOVIE " + obj.name + " is " + obj.price);
        return obj.price;
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
var asael = { name: "asael", whatRented: "bambi" };
var bambi = { name: "bambi", price: 180, whoRented: asael.name };
// whthp(bambi)
// 2. create a function that gets a video and a person and returns the object of the video, with reference to the
// person that took it.
var moviERent = function (user, movie) {
    try {
        movie.whoRented = user.name;
        console.log("Hi " + movie.whoRented + " thank's for renting the movie " + movie.name);
        return "Hi " + movie.whoRented + " thank's for renting the movie " + movie.name;
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
// moviERent(asael, bambi);
// 3. Blockbuster was busted. You are now a developer at Netflix. Think of a way to let a user to have many videos.
//  And the video has a list of all the people that viewed it.
