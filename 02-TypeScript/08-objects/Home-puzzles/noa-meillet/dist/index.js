var noa = {
    userName: "Noa1806",
    password: "123456",
    videos: []
};
var avatar = {
    name: "Avatar",
    producer: "James Cameron",
    price: 10.90
};
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
alert(`${setVideoToUser(noa,avatar)}`);

function setVideoToUser(user:User, video:Video): void | false{
    try {
        let getFromUser= prompt("enter the movies you are going to watch");
        while (getFromUser != "."  || !getFromUser){
            switch (getFromUser){
                case "avatar":
                    {
                    user.videos?.unshift(video);
                    setViewsToVideo (user, video);
                    }
                    break;
            }
        }
    } catch (error) {
        console.error(error);
            return false;
    }
}


function setViewsToVideo(user:User, video:Video): void | false{}

prompt = enter the movies you are going to watch
while getfromuser != "."  || !getfromuser
      switch (getfromuser)
        case "avatar":
            user.videos.push(avatar);
            setViewsToVideo (avatar);
*/
