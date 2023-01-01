interface videos{
price:number;
nameOfMovie:string;
rent?:users;

}
interface users{
Name:string;
userPassword:string;
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
function DollerToShekels(video:number):number | false {
try {
    return 3.53*video;
} catch (error) {
    console.error(error);
    return false;
}
}
const movieAllow:string| null= prompt(`what movie do you want to rent? we have
Fast-And-Furious-9
Avengers-EndGame
Avater2`)
if (movieAllow==" "|| !movieAllow){
    const movieAllow = alert ("please enter a movie")

    if(fastAndFurious9){
        const movieAllow= alert(`tomer take the movie`)
    }if(avatar2){
       alert(`the price for avatar 2 is ${avatar2.price}in shekels is ${DollerToShekels(avatar2.price)}`)
        }
    if(avengersEndaGame){
            alert(`the price for avengersEndaGame is ${avengersEndaGame.price}in shekels is ${DollerToShekels(avengersEndaGame.price)}`)
        }else{
            alert(`why you dont take movie`)
}
}
