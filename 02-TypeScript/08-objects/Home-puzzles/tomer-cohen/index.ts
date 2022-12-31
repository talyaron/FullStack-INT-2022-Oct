interface videos{
price:number;
nameOfMovie:string;
rent?:users;

}
interface users{
Name:string;
userPassword:string;
}
function DollerToShekels(video:videos):number | false {
try {
    return video.price*3.53;
} catch (error) {
    console.error(error);
    return false;
}
}
const fastAndFurious9:videos={
    nameOfMovie:`fastAndFurious9`,
    price:9.99
}
const avengersEndaGame:videos={
    nameOfMovie: `avengers EndaGame`,
    price: 24.99
}
const avatar2:videos={
    nameOfMovie: `Avatar 2`,
    price: 49.99
}
const movieAllow:string| null= prompt(`what movie do you want to rent? we have FastAndFurious9,AvengersEndGame,Avater2 `)
if (movieAllow==" "|| !movieAllow){
    const movieAllow = alert ("please enter a movie")
}
    if(fastAndFurious9){
        const movieAllow= alert(`tomer take the movie`)
    }else{
        const user=alert(`${dollar_to_shekel(movieAllow)}cost`)
    }

