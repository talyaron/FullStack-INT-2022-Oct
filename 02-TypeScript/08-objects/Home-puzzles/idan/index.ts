

interface video{
    name: string;
    viewers: string;
    price:number;  //usd
    numberOfViews:number;
};
interface customer{
    name: string;
    videoList: string;
};
interface listOfVideos{
    0:video;
    1:video;
    2:video;
    3:video;
    4:video;
    5:video;
}
const numberOfMovies:number = 6; 



const hesExpecting:video = {
    name: `hes expecting, `,
    viewers:"",
    price:10000,
    numberOfViews:0
};
const parasite:video = {
    name: `parasite, `,
    viewers:"",
    price:30,
    numberOfViews:0
};
const birdman:video = {
    name: `birdman, `,
    viewers:"",
    price:30,
    numberOfViews:0
};
const thereWillBeBlood:video = {
    name: `there will be blood, `,
    viewers:"",
    price:30,
    numberOfViews:0
};
const driveWithRyanGosling:video = {
    name: `drive, `,
    viewers:"",
    price:30,
    numberOfViews:0
};
const fightClub:video = {
    name: `fight club, `,
    viewers:"",
    price:30,
    numberOfViews:0
};
const realNetflixMovies:listOfVideos = {
    0: fightClub,
    1: driveWithRyanGosling,
    2: hesExpecting, 
    3: birdman, 
    4: parasite,
    5: thereWillBeBlood
}

main()
function main():void{
    //reasoning for forcing ", "; example: "movie" has a sequal named "movie 2" if someone watched movie 2 and not its prequal then when checking it using the function it will falsly mark the movie as watched by the person who only watched the sequal if a movie is called "movie, more movies" or something like that then it can falsify information however i cant be bothered to fix it as it will take too much time and effort so i guess ill deal with it not working if that happens 
    //can be fixed by making a function that checks how many times someone has watched a movie and if there is a movie that has another movies name inside of it if i have time i will add it in which case you wont see this
    //movie doesnt exist not a problem just check the page to see which movies exist and which dont
    //"netflix is a subscription based program" smh
    try{
        let caseThingIguess = true;
        const joeBiden:customer={
            name: `joeBiden`,
            videoList:""
        };  
        const userName = prompt(`enter name`);
        if(userName){
            joeBiden.name = userName;
        }
        else{
            main();
        }
        while(caseThingIguess){

            let videos = prompt(`enter watched videos if done press "ok" without writing anything`)?.replace("'", "");
            //videos?.replace(`'`, ``) doesnt work
            if(userName && videos){
                joeBiden.videoList = joeBiden.videoList+`${videos}, `;
                console.log(joeBiden);
                //why does this let me change values evem though joeBiden is a const? i dont know i think it might be because of how generous javascript is i am not going to change it

            }

            else{
                caseThingIguess = false;
            }


        }
        for (let index = 0; index < numberOfMovies; index++) {
            hasViewed(joeBiden, realNetflixMovies[index]);
            console.log(realNetflixMovies);
        }
        main();
    }
    catch(error){
        console.error(error);
    }

}







function hasViewed(user:customer,video:video):void|false{
    try {
        if(user.videoList.indexOf(video.name)!=-1){
            console.log(user.videoList.indexOf(video.name))
            if(video.viewers == ""){
                video.viewers = user.name;
                video.numberOfViews +=1;
            }else{
                if(video.viewers.indexOf(video.name) == -1){
                    video.viewers += ", "+user.name;
                    video.numberOfViews += 1
                }
                else{
                    return false
                }
            }
        }
        else{
            return false;
        }
    } catch (error) {
        console.error(error)
        return false
    }
}


