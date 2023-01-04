var noa = {
    userName: "Noa1806",
    password: "123456",
    videos: []
};
var avatar = {
    name: "Avatar",
    producer: "James Cameron",
    price: 10.9
};
var zootropolis = {
    name: "Zootropolis",
    producer: "Walt Disney",
    price: 10.9
};
var lalaland = {
    name: "Lalaland",
    producer: "Damien Chazelle",
    price: 10.9
};
var price = prompt("enter the name of the movie you want to convert his price to shekel:");
if (!price) {
    alert("you need to enter a value");
}
else if (price != "avatar") {
    alert("this movie is not available");
}
else {
    alert(convertToShekels(avatar));
}
function convertToShekels(video) {
    try {
        return video.price * 3.25;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
/*
let movieArr:Video[] = [avatar, zootropolis,lalaland];
setVideoToUser(noa,movieArr);


function setVideoToUser(user:User, movieArr:Video[]): void | false{
    try {
        let getFromUser= prompt(`enter the movies you are going to watch from this list: avatar, zootropolis, lalaland.`,`To stop enter . or null`);
        while (getFromUser != "."  || !getFromUser){
            switch (getFromUser){
                case "avatar":
                    {
                    user.videos?.unshift(movieArr[0]);
                    setViewsToVideo (user, movieArr[0]);
                    }
                    break;
                case "zootropolis":
                    {
                    user.videos?.unshift(movieArr[1]);
                    setViewsToVideo (user, movieArr[1]);
                    }
                    break;
                case "lalaland":
                    {
                    user.videos?.unshift(movieArr[2]);
                    setViewsToVideo (user, movieArr[2]);
                    }
                    break;
                default :
                alert ("this movie is not available");
            }
        }
        console.log (user.videos?.toString);
    } catch (error) {
        console.error(error);
            return false;
    }
}


function setViewsToVideo(user:User, video:Video): void | false{
    try {
        video.viewBy?.unshift(user);
        console.log (video.viewBy?.toString);
    } catch (error) {
        console.error(error);
            return false;
    }
}

*/ 
