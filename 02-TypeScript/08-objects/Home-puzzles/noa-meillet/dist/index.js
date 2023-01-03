function convertToShekels(video) {
    try {
        return video.price * 3.25;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function createUser(user) {
    try {
        var getFromUser = prompt("Enter your user name:");
        while (!getFromUser) {
            getFromUser = prompt("We can't receive that value. Enter your user name:");
        }
        user.userName = getFromUser;
        getFromUser = prompt("Enter your password:");
        while (!getFromUser) {
            getFromUser = prompt("We can't receive that value. Enter your password:");
        }
        user.password = getFromUser;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function createrVideo(video) {
    try {
        var getFromUser = prompt("Enter the name of the movie:");
        while (!getFromUser) {
            getFromUser = prompt("We can't receive that value. Enter the name of the movie:");
        }
        video.name = getFromUser;
        getFromUser = prompt("Enter the producer name of " + video.name + " movie:");
        while (!getFromUser) {
            getFromUser = prompt("We can't receive that value. Enter the producer name of " + video.name + " movie:");
        }
        video.producer = getFromUser;
        getFromUser = prompt("Enter the movie price: (If it's free eneter 0) ");
        while (!getFromUser) {
            getFromUser = prompt("We can't receive that value. Enter the movie price:");
        }
        video.price = parseInt(getFromUser);
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
//function setVideoToUser{}
//function setViewsToVideo{}
