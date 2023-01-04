interface User{
    userName: string;
    password: string;
    videos?: Video[];
   
   
}

interface Video{
    name: string;
    producer: string;
    price: number;
    rentTo?: User;
    viewBy?:User[];
}

const noa:User = {
    userName: "Noa1806",
    password: "123456",
    videos: []
}

const avatar:Video = {
    name:"Avatar",
    producer:"James Cameron",
    price: 10.90
}

function convertToShekels(video:Video):number | false{
    try {
        return video.price*3.25;
    } catch (error) {
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


function setViewsToVideo(user:User, video:Video): void | false{}

prompt = enter the movies you are going to watch
while getfromuser != "."  || !getfromuser
      switch (getfromuser)
        case "avatar":
            user.videos.push(avatar);
            setViewsToVideo (avatar);      
*/


